import { Printable } from "./printable.js";


export function printOut(...objects: Printable[]) {
    for (let object of objects) {
        console.log(object.forText());
    }
}