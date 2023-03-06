export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    toList() {
        return this.negotiations;
    }
    forText() {
        return JSON.stringify(this.negotiations, null, 2);
    }
    equals(negotiations) {
        return JSON.stringify(this.negotiations) === JSON.stringify(negotiations.toList());
    }
}
//# sourceMappingURL=Negotiations.js.map