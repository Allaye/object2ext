

declare class Object2Ext {
    constructor(parameters: object[]);

    toDisk(path: string, options ?: Object2Ext.toDistOptions ): Promise<unknown>

    toString(header?: boolean, allColumns?: boolean): Promise<string>
}


declare namespace Object2Ext {

    interface ConstructorData {
        /**
         * Define the number of generated fields and the generation method.
         */
        columns?: number | string[] | undefined;
    }

    interface toDistOptions {
        append?: boolean | undefined;
        bom?: string | undefined;
        allColumns?: boolean | undefined;
    }
}
export = Object2Ext;