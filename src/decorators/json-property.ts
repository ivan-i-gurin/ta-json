import "reflect-metadata";
import { getDefinition } from "../classes/object-definition";
import { PropertyDefinition } from "../classes/property-definition";

// tslint:disable:ext-variable-name only-arrow-functions

export function JsonProperty(propertyName?:string):PropertyDecorator {
    return function(target:any, key:string | symbol):void {
        const type = Reflect.getMetadata("design:type", target, key);
        if (typeof key === "string") {
            const property = getDefinition(target.constructor).getProperty(key);
            property.initProperty(type, propertyName || key);
        }
    };
}

