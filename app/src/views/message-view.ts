import { View } from "./view.js";

export class MessageView extends View <String> {
     
    protected template(model: String): string {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
}