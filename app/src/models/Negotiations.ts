import { Model } from "../interfaces/model.js";
import { Negotiation } from "./Negotiation.js";


export class Negotiations implements Model<Negotiations> {
    
    private negotiations: Negotiation[] = [];

    add(negotiation: Negotiation) {
        this.negotiations.push(negotiation);
    }
    toList(): readonly Negotiation[] {
        return this.negotiations;
    }

    public forText(): string {
        return JSON.stringify(this.negotiations, null, 2);
    }

    equals(negotiations: Negotiations): boolean {
        return JSON.stringify(this.negotiations) === JSON.stringify(negotiations.toList());
    }
}