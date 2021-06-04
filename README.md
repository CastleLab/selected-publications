# Selected Publications

## Add Your Publications

1. Create your JSON file under `collection` folder, e.g., firstName_lastName.json
2. Add your publication with the following schema: 

```bash
[
  {
    "title": "Title of your paper",
    "date": "date of publication, e.g., 2021-12-31, following ECMA date string format: https://262.ecma-international.org/11.0/#sec-date-time-string-format",
    "authors": [
      "First Author", "Second Author"
    ],
    "venue": "Full name of the conference or journal name",
    "venueShort": "abbreviation of conference or journal, e.g., ESEC/FSE",
    "tags": [ 
      "Tag 1",
      "Tag 2"
    ],
    "abstract": "(optional) abstract of your paper",
    "project": "(optional) project url",
    "url": "(optional) paper url",
    "bibtex": "(optional) bibtex"
  },
  {
    ...
  },
  ...
]
```

## Test Your JSON Structure

You need to have Node.js environment.

```bash
npm install
npm test
```

If no errors are printed in the console, you are good to push it on GitHub. 
Your publications will automatically added on CASTLE HomePage. 