

/**
 * Converts an array of objects into a Excel file.
 */
class Object2Xlsx {


    /**
     * @description - the Object2Xlsx constructor expects an array of object anything other than that will result in an error
     * @param {Array<object>} arrayOfObjects - 
     */
    constructor(arrayOfObjects) {
        if (!Array.isArray(arrayOfObjects) || arrayOfObjects.length === 0) {
            throw new Error("Object2Xlsx expects an array of objects, that is not empty");
        }
        
        this.arrayOfObjects = arrayOfObjects;

    }
        

}

module.exports = Object2Xlsx;

