/**
 * This script bundles all JSON files in one folder (and sub folders) into one bundle JSON.
 */

import Joi from "joi";
import glob from 'glob';
import path from "path";
import * as fs from "fs";

const HOSTNAME = 'https://castlelab.github.io/selected-publications'

async function main() {
    const schema: Joi.Schema = Joi.object().keys({
        title: Joi.string().min(1).required(),
        date: Joi.string().min(1).custom(((value, helpers) => {
            const d = new Date(value);
            const errorString = `'${value}' is an invalid date string. Please refer to https://262.ecma-international.org/11.0/#sec-date-time-string-format`;
            if (isNaN(d.getTime())) throw new Error(errorString)
            return value;
        }), 'validate date string'),
        authors: Joi.array().min(1).items(Joi.string()).required(),
        venue: Joi.string().allow('').required(),
        venueShort: Joi.string().allow('').required(),
        tags: Joi.array().items(Joi.string()),
        awards: Joi.array().items(Joi.string()),
        paperUrl: Joi.string().allow(null, ''),
        arxivUrl: Joi.string().allow(null, ''),
        abstract: Joi.string().allow(null, ''),
        bibtex: Joi.string().allow(null, ''),
        projectUrl: Joi.string().allow(null, ''),
        slidesUrl: Joi.string().allow(null, ''),
    });

    const dryRun = process.argv[2] === '--dry-run';
    if (dryRun) {
        console.log("Running in dry-run mode. No bundle json will be output.");
    }
    let exitCode: number = 0;

    // scan collection folder
    const files: string[] = [];
    let ffs = glob.sync(path.join(__dirname, '..', 'collection/**/*.json'));
    files.push(...ffs);
    ffs = glob.sync(path.join(__dirname, '..', 'collection/**/*.js'));
    files.push(...ffs);
    console.log(`Found ${files.length} publication declaration files to bundle:`);
    files.forEach(f => console.log(`==> ${f}`));
    console.log();
    const collection: unknown[] = [];
    for (const file of files) {
        try {
            let arr: unknown[];
            if (path.extname(file).toLowerCase() === '.json') {
                const content = fs.readFileSync(file, {encoding: 'utf-8'});
                arr = JSON.parse(content);
            } else if (path.extname(file).toLowerCase() === '.js') {
                arr = require(file);
            } else {
                continue;
            }

            if (!Array.isArray(arr)) {
                console.error("[Error] JSON object in", file, "is not an array");
                if (dryRun) exitCode = 1;
                continue;
            }
            const validations: Joi.ValidationResult[] = [];
            arr.forEach(obj => {
                const r = schema.validate(obj, {allowUnknown: true});
                validations.push(r);
                if (!r.error) {
                    const processRelativeUrl = (url: string | null): string | null => {
                        if (!url) return url;
                        return url.replace("{ASSETS}", path.join(HOSTNAME, 'assets'))
                    }
                    if (!obj.paperUrl) obj.paperUrl = null;
                    if (!obj.arxivUrl) obj.arxivUrl = null;
                    if (!obj.abstract) obj.abstract = null;
                    if (!obj.bibtex) obj.bibtex = null; else obj.bibtex = obj.bibtex.trim();
                    if (!obj.projectUrl) obj.projectUrl = null;
                    if (!obj.slidesUrl) obj.slidesUrl = null;
                    if (!obj.tags) obj.tags = [];
                    if (!obj.awards) obj.awards = [];

                    obj.paperUrl = processRelativeUrl(obj.paperUrl);
                    obj.slidesUrl = processRelativeUrl(obj.slidesUrl);

                    collection.push(obj);
                }
            });
            if (validations.some(r => r.error)) {
                if (dryRun) exitCode = 1;
                console.log('[Warning] Invalid JSON structure with', validations.filter(r => r.error).length, 'errors in', file);
                validations.forEach((r, index) => {
                    if (r.error) {
                        console.log("==> Item with index", index)
                        r.error.details.forEach((e) => console.error(`====>`, e.message));
                    }
                })
            }
        } catch (e) {
            console.error("[Error] Failed to parse", file);
            console.error(e.toString());
            if (dryRun) exitCode = 1;
        }
    }
    if (!dryRun) {
        console.log();
        fs.writeFileSync(path.join(__dirname, '..', 'public', 'bundle.json'), JSON.stringify(collection));
        console.log("Bundle complete, output in public/bundle.json");
    } else {
        if (exitCode === 0) {
            console.log("No errors detected.");
        } else {
            console.warn("Errors detected as above. Please try to fix them.")
        }
    }
}

if (require.main === module) {
    main().catch(e => {
        console.error(e);
        process.exit(1);
    })
}
