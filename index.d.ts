
declare class Object2Csv {
    constructor(parameters: object[]);

    toDisk(path: string, options?: Object2Csv.toDistOptions ): Promise<unknown>

    toString(header?: boolean, allColumns?: boolean): Promise<string>
}


declare namespace Object2Csv {

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


declare class Object2Xlx {
    constructor(parameters: object[], context: string);

    toDisk(path: string, filename: string): void

    generateXML(): string
}

export { Object2Csv, Object2Xlx };


