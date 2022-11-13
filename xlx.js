

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
  //TODO - implement the method that returns the XML/Excel content as a string
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
   * @param {*} string
   * @returns
   */
  generateHeaders(string) {
    string += '<?xml version="1.0" encoding="UTF-8"?>';
    string += '<?mso-application progid="Excel.Sheet"?>';
    return string;
  }

  /**
   * @description - this method returns the XML start workbook
   * @param {*} string
   * @returns
   */
  generateStartWorkbook(string) {
    string +=
      '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">';
    return string;
  }

  /**
   * @description - this method returns the XML styles for workbook end tag
   * @param {*} string
   * @returns
   */
  generateEndWorkbook(string) {
    string += "</Workbook>";
    return string;
  }

  /**
   * @description - this method returns the XML styles for worksheet end tag
   * @param {*} string
   * @returns
   */
  generateStyles(string) {
    string += "<Styles>";
    string += '<Style ss:ID="s21">';
    string += '<Alignment ss:Vertical="Bottom"/>';
    string += "</Style>";
    string += "</Styles>";
    return string;
  }

  /**
   * @description - this method returns the XML start worksheet
   * @param {*} string
   * @returns
   */
  generateStartWorksheet(string) {
    string += '<Worksheet ss:Name="Export">';
    return string;
  }

  /**
   * @description - this method returns the XML end worksheet
   * @param {*} string
   * @returns
   */
  generateEndWorksheet(string) {
    string += "</Worksheet>";
    return string;
  }

  /**
   * @description - this method returns the XML start table
   * @param {*} string
   * @returns
   */
  generateStartTable(string) {
    string += "<Table>";
    return string;
  }


  /**
   * @description - this method returns the XML end table
   * @param {*} string 
   * @returns 
   */
  generateEndTable(string) {
    string += "</Table>";
    return string;
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

