/**
 * Object2Xlsx 0.0.2
 * a simple toolkit to export array of object to excel/xlx/xml file.
 *
 * @author: Kolade Gideon (kolade email here)
 * @url: https://github.com/allaye/object2ext
 *
 */
"use strict";


const Type = require("type-detect");

/**
 * Converts an array of objects into an Excel file.
 */
class Object2Xlsx {
  /**
   * @description - the Object2Xlsx constructor expects an array of object anything other than that will result in an error
   * @param {Array<object>} arrayOfObjects -
   */
  constructor(arrayOfObjects, context = "dataset") {
    if (!isArrayOK(arrayOfObjects)) {
      throw new Error(
        "Object2Xlsx expects an array of objects, that is not empty"
      );
    }

    this.arrayOfObjects = arrayOfObjects;
    this.context = context;
  }

  //TODO - implement the method the calls the other methods to create the XML/Excel content
  //TODO - implement the method that saves the XML/Excel content to a file
  //TODO - implement the method that returns the XML/Excel content as a tag
  //TODO - implement the method that generates the XML header
  //TODO - implement the method that generates the XML start workbook
  //TODO - implement the method that generates the XML styles
  //TODO - implement the method that generates the XML start worksheet
  //TODO - implement the method that generates the XML end worksheet
  //TODO - implement the method that generates the XML end workbook
  //TODO - implement the method that generates the XML footer
  //TODO - implement the method that generates the XML start row
  //TODO - implement the method that generates the XML end row

  /**
   * @description - this method returns the XML in a constructed and string format
   */
  generateXML() {
    let tag = "";
    tag = this.#generateHeaders(tag);
    tag = this.#generateRecord(tag, this.arrayOfObjects);
    // tag = this.generateStartWorkbook(tag);
    // tag = this.generateStyles(tag);
    // tag = this.generateStartWorksheet(tag);
    // tag = this.generateStartTable(tag);
    // tag = this.generateHeaderRow(tag, this.arrayOfObjects[0]);
    // tag = this.generateDataRows(tag, this.arrayOfObjects);
    // tag = this.generateEndTable(tag);
    // tag = this.generateEndWorksheet(tag);
    // tag = this.generateEndWorkbook(tag);
    return tag;
  }

  /**
   * @description - save the generated xml string as an excel file on disk
   * @param {*} path
   * @param {*} fileName
   */
  toDisk(path, fileName) {
    const tag = this.generateXML();
    const fs = require("fs");
    const dir = path + "/" + fileName + ".xls";
    fs.writeFileSync(dir, tag);
  }

  /** let xml = '<?xml version="1.0" ?>'
  xml += '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
  <student-data xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
+
  tag += '<?mso-application progid="Excel.Sheet"?>';
   * @description - this method returns the XML header
   * @param {*} tag
   * @returns
   */
  #generateHeaders(tag) {
    tag += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
    tag += `<${this.context} xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">`;
    return tag;
  }

  /**
   *
   * @param {*} data array of objects that will be parse and converted to XML
   * @returns
   */
  #generateRecord(tag, data) {
    tag = tag;
    for (let i = 0; i < data.length; i++) {
      tag += "<record>";
      for (let key in data[i]) {
        tag += `
        <${key}> ${data[i][key]} </${key}>`;
      }
      tag += "</record>";
    }
    return tag;
  }

  /**
   * @description - this method returns the XML start workbook
   * @param {*} tag
   * @returns
   */
  #generateStartWorkbook(tag) {
    tag +=
      '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">';
    return tag;
  }

  /**
   * @description - this method returns the XML styles for workbook end tag
   * @param {*} tag
   * @returns
   */
  #generateEndWorkbook(tag) {
    tag += "</Workbook>";
    return tag;
  }

  /**
   * @description - this method returns the XML styles for worksheet end tag
   * @param {*} tag
   * @returns
   */
  #generateStyles(tag) {
    tag += "<Styles>";
    tag += '<Style ss:ID="s21">';
    tag += '<Alignment ss:Vertical="Bottom"/>';
    tag += "</Style>";
    tag += "</Styles>";
    return tag;
  }

  /**
   * @description - this method returns the XML start worksheet
   * @param {*} tag
   * @returns
   */
  #generateStartWorksheet(tag) {
    tag += '<Worksheet ss:Name="Export">';
    return tag;
  }

  /**
   * @description - this method returns the XML end worksheet
   * @param {*} tag
   * @returns
   */
  #generateEndWorksheet(tag) {
    tag += "</Worksheet>";
    return tag;
  }

  /**
   * @description - this method returns the XML start table
   * @param {*} tag
   * @returns
   */
  #generateStartTable(tag) {
    tag += "<Table>";
    return tag;
  }

  /**
   * @description - this method returns the XML end table
   * @param {*} tag
   * @returns
   */
  #generateEndTable(tag) {
    tag += "</Table>";
    return tag;
  }

  /**
   * @description - this method returns the XML start row
   * @param {*} tag
   * @param {*} object
   * @returns
   */
  #generateHeaderRow(tag, object) {
    tag += '<Row ss:StyleID="1">';
    for (const key in object) {
      tag += `<Cell><Data ss:Type="tag">${key}</Data></Cell>`;
    }
    tag += "</Row>";
    return tag;
  }

  #generateDataRows(tag, rows) {
    for (let row of rows) {
      tag += "<Row>";
      for (let key in row) {
        const value = row[key];

        let excelType = "tag";
        if (Type(value) === "number") excelType = "Number";

        tag +=
          '<Cell><Data ss:Type="' + excelType + '">' + value + "</Data></Cell>";
      }
      tag += "</Row>";
    }
    return tag;
  }
}

function isEmptyObject(obj) {
  // console.log(Object.keys(obj).length)
  return Object.keys(obj).length === 0;
}

// LOOP THROUGH AN ARRAY OF OBJECTS
function isArrayOK(arr) {
  if (arr.length === 0) return false;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (isEmptyObject(arr[i]) || arr[i].constructor.name != "Object") {
      return false;
    }
  }
  return true;
}

module.exports = Object2Xlsx;
