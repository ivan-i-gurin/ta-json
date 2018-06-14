import { IPropertyConverter } from "../converters/converter";

export class PropertyDefinition {
    public type:Function;
    public array:boolean = false;
    public set:boolean = false;
    public readonly:boolean = false;
    public writeonly:boolean = false;
    public converter:IPropertyConverter;
    public serializedName:string;

    constructor() {}

    public initProperty(type:any, propertyName?:string):void {
        if (propertyName) {
            this.serializedName = this.serializedName || propertyName; }
        this.array = type === Array;
        this.set = type === Set;
        if (!this.array && !this.set && !this.type) {
            this.type = type;
        }
    }
}
