

/**
 * Converts an array of objects into an Excel file.
 */
class Object2Xlsx {
  /**
   * @description - the Object2Xlsx constructor expects an array of object anything other than that will result in an error
   * @param {Array<object>} arrayOfObjects -
   */
  constructor(arrayOfObjects) {
    if (!isArrayOK(arrayOfObjects)) {
      throw new Error(
        "Object2Xlsx expects an array of objects, that is not empty"
      );
    }

    this.arrayOfObjects = arrayOfObjects;
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

  generateXML() {}

  /**
   * @description - this method returns the XML header
   * @param {*} tag
   * @returns
   */
  generateHeaders(tag) {
    tag += '<?xml version="1.0" encoding="UTF-8"?>';
    tag += '<?mso-application progid="Excel.Sheet"?>';
    return tag;
  }

  /**
   * @description - this method returns the XML start workbook
   * @param {*} tag
   * @returns
   */
  generateStartWorkbook(tag) {
    tag +=
      '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">';
    return tag;
  }

  /**
   * @description - this method returns the XML styles for workbook end tag
   * @param {*} tag
   * @returns
   */
  generateEndWorkbook(tag) {
    tag += "</Workbook>";
    return tag;
  }

  /**
   * @description - this method returns the XML styles for worksheet end tag
   * @param {*} tag
   * @returns
   */
  generateStyles(tag) {
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
  generateStartWorksheet(tag) {
    tag += '<Worksheet ss:Name="Export">';
    return tag;
  }

  /**
   * @description - this method returns the XML end worksheet
   * @param {*} tag
   * @returns
   */
  generateEndWorksheet(tag) {
    tag += "</Worksheet>";
    return tag;
  }

  /**
   * @description - this method returns the XML start table
   * @param {*} tag
   * @returns
   */
  generateStartTable(tag) {
    tag += "<Table>";
    return tag;
  }

  /**
   * @description - this method returns the XML end table
   * @param {*} tag
   * @returns
   */
  generateEndTable(tag) {
    tag += "</Table>";
    return tag;
  }

  /**
   * @description - this method returns the XML start row
   * @param {*} tag
   * @param {*} object
   * @returns
   */
  generateHeaderRow(tag, object) {
    tag += '<Row ss:StyleID="1">';
    for (const key in object) {
      tag += `<Cell><Data ss:Type="tag">${key}</Data></Cell>`;
    }
    tag += "</Row>";
    return tag;
  }

  generateDataRows(tag, rows){
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

