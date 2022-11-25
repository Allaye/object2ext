
let jsObject = [
  {
    id: 191603,
    date: "2017-02-13",
    public: 20151,
    technical: 20151,
    type: "ØP",
    placement: 1,
    units: 1,
  },
  {
    id: 191603,
    date: "2017-02-13",
    public: 20151,
    technical: 20151,
    type: "ØP",
    placement: 1,
    units: 1,
  },
];

// let tag = '';
// const c = 'record'
// for (let i = 0; i < jsObject.length; i++) {
//     tag += '<record>';
//     for (let key in jsObject[i]) {
//         tag += `
//         <${key}> ${jsObject[i][key]} </${key}>`;
//     }
//     tag += '</record>';
// }



// console.log(tag)



















// {
//     'id': 191603,
//     'date': '2017-02-13'

// }];

//const xmlData = arr2xml.saveAsXML(jsObject, './testss');


// kk = {


//   generateXML: (arrayOfObjects) => {
//     let xmlString = "";

//     xmlString = generateHeaders(xmlString);
//     xmlString = generateStartWorkbook(xmlString);
//     // xmlString = module.exports.generateStyles(xmlString);
//     // xmlString = module.exports.generateStartWorksheet(xmlString);
//     // xmlString = module.exports.generateStartTable(xmlString);
//     // xmlString = module.exports.generateHeaderRow(xmlString, arrayOfObjects[0]);
//     // xmlString = module.exports.generateDataRows(xmlString, arrayOfObjects);
//     // xmlString = module.exports.generateEndTable(xmlString);
//     // xmlString = module.exports.generateEndWorksheet(xmlString);
//     // xmlString = module.exports.generateEndWorkbook(xmlString);

//     return xmlString;
//   },  
// }

// function generateHeaders(string){
//     string += '<?xml version="1.0" encoding="UTF-8"?>';
//     string += '<?mso-application progid="Excel.Sheet"?>';

//     return string;
//   }

//   function generateStartWorkbook(string){
//     string +=
//       '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">';

//     return string;
//   }

// // console.log(kk.generateXML(jsObject));


// function isEmptyObject(obj) {
//     // console.log(Object.keys(obj).length)
//     return Object.keys(obj).length === 0;
// }

// // LOOP THROUGH AN ARRAY OF OBJECTS
// function isArrayOK(arr){
//     if (arr.length === 0) return false;
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         if (isEmptyObject(arr[i]) || arr[i].constructor.name != "Object") {
//             return false
//         }
//     }
//     return true
// }

// // console.log({jsObject}.constructor.name === "Object");
// // obj?.constructor.name === 'Object';

// // console.log(isArrayOK([{a:1}, {b:2}]));

// const Object2Xlsx = require("./xlx");

// new Object2Xlsx([{a:1}, {}])





