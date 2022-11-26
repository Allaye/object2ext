

declare class Object2Xlsx {
    constructor(parameters: object[], context: string);

    toDisk(path: string, filename: string): void

    generateXML(): string
}



export = Object2Xlsx;