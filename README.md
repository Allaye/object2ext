<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/allaye/object2ext">
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

<h3 align="center">Object2Ext</h3>

[![Made with 🥰💝💖💗](https://img.shields.io/badge/made%20with-love-008751.svg?style=flat-square)](https://github.com/allaye/object2ext)
[![latest release](https://img.shields.io/badge/npm-v1.5.2-blue.svg)](https://www.npmjs.com/package/object2ext/)
[![status](https://img.shields.io/badge/status-stable-brightgreen.svg)](./)

<!-- <img src=https://github.com/Allaye/object2ext/blob/master/img/object2ext.png alt="Object2Ext Logo" width=180 height=180/> -->

  <p align="center">
    This is module is just a small toolkit to convert arrays of objects to other hard file format
    like csv, xml, xls etc.<br />
    <!-- <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    · -->
    <a href="https://github.com/allaye/object2ext/issues">Report Bug</a>
    ·
    <a href="https://github.com/allaye/object2ext/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#examples">Examples</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

# Convert array of objects into a CSV file

Converts an array of JavaScript objects into the CSV and XLS. You can
save the files or return them as string.

The keys in the first object of the array will be used as column names.

Any special characters in the values (such as commas) will be properly escaped.

conversion to excel format is coming soon.

## Usage

```js
const Object2Ext = require("object2ext");

// Sample data - two columns, three rows:
const tests = [
  {
    id: 56,
    name: "taro",
    designId: 1,
    designName: "design1",
  },
  {
    id: 1,
    name: "taro",
    designId: 2,
    designName: "design2",
  },
];

// If you use "await", code must be inside an asynchronous function:
(async () => {
  const csv = new Object2Ext(tests);

  // Save to file:
  await csv.toDisk("./tests.csv");

  // Return the CSV file as string:
  console.log(await csv.toString());
})();
```

## Methods

The API provides two methods, `toDisk(filename)` and `toString()`.

### async toDisk(filename, options)

Converts the data and saves the CSV file to disk. The `filename` must include the
path as well.

The `options` is an optional parameter which is an object that contains the
settings. Supported options:

- `append` - whether to append to the file. Default is `false` (overwrite the file).
  Set to `true` to append. Column names will be added only once at the beginning
  of the file. If the file does not exist, it will be created.
- `bom` - whether to add the Unicode Byte Order Mark at the beginning of the
  file. Default is `false`; set to `true` to be able to view Unicode in Excel
  properly. Otherwise Excel will display Unicode incorrectly.
- `allColumns` - whether to check all array items for keys to convert to columns rather
  than only the first. This will sort the columns alphabetically. Default is `false`;
  set to `true` to check all items for potential column names.

```js
const Object2Ext = require("object2ext");
const sampleData = [{ id: 1, text: "this is a test" }];

// Run asynchronously, without awaiting:
new Object2Ext(sampleData).toDisk("./tests.csv");

// Alternatively, you can append to the existing file:
new Object2Ext(sampleData).toDisk("./tests.csv", { append: true });

// `allColumns: true` collects column names from all objects in the array,
// instead of only using the first one. In this case the CSV file will
// contain three columns:
const mixedData = [
  { id: 1, name: "California" },
  { id: 2, description: "A long description." },
];
new Object2Ext(mixedData).toDisk("./tests.csv", { allColumns: true });
```

### async toString(header = true, allColumns = false)

Returns the CSV file as a string.

Two optional parameters are available:

- `header` controls whether the column names will be
  returned as the first row of the file. Default is `true`. Set it to `false` to
  get only the data rows, without the column names.
- `allColumns` controls whether to check every item for potential keys to process,
  rather than only the first item; this will sort the columns alphabetically by key name.
  Default is `false`. Set it to `true` to process keys that may not be present
  in the first object of the array.

```js
const Object2Ext = require("object2ext");
const sampleData = [{ id: 1, text: "this is a test" }];

async function printCsv(data) {
  console.log(await new Object2Ext(data).toString());
}

printCsv(sampleData);
```

## Requirements

Note tested again older node version

Use Node.js version 12 and above.
