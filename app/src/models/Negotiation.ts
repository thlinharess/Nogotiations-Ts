import { Model } from "../interfaces/model.js";


export class Negotiation implements Model<Negotiation> {
    constructor(
        private _date: Date,
        public readonly amount: number,
        public readonly value: number
        ) {}

    
    public static createOf(dateString: string, amountString: string, valueString: string): Negotiation {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const amount = parseInt(amountString);
        const value = parseFloat(valueString);
        return new Negotiation(date, amount, value);
    }

    get volume(): number {
        return this.amount * this.value;
    }

    get date(): Date {
        const date = new Date(this._date.getTime());
        return date;
    }

    public forText(): string {
        return `
        Date: ${this.date},
        Quantidade: ${this.amount},
        Valor: ${this.value} 
      ;`
    }
    
    public equals(negotiation: Negotiation): boolean {
        return this.date.getDate() === negotiation.date.getDate()
        && this.date.getMonth() === negotiation.date.getMonth()
        && this.date.getFullYear() === negotiation.date.getFullYear();
    }
}