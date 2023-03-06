var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { Negotiations } from "../models/Negotiations.js";
import { NegotiationsService } from "../services/negotiations-services.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-View.js";
import { inspect } from "../decorators/inspect.js";
import { Negotiation } from "../models/Negotiation.js";
import { DaysOfTheWeek } from "../enums/day-of-week.js";
import { Performance } from "../decorators/Performance.js";
import { printOut } from "../utils/print-out.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations;
        this.negotiationsView = new NegotiationsView('#negotiationsView');
        this.messageView = new MessageView('#messageView');
        this.SATURDAY = 6;
        this.SUNDAY = 0;
        this.negotiationsService = new NegotiationsService;
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.createOf(this.inputDate.value, this.inputAmount.value, this.inputValue.value);
        if (!this.BusinessDay(negotiation.date)) {
            this.messageView
                .update('Only trades on business days are accepted!');
            return;
        }
        this.negotiations.add(negotiation);
        printOut(negotiation, this.negotiations);
        this.cleanForm();
        this.updateView();
    }
    importData() {
        this.negotiationsService.getTradesOfTheDay()
            .then(todaysTrades => {
            return todaysTrades.filter(todaysTrades => {
                return !this.negotiations
                    .toList()
                    .some(negotiation => negotiation.equals(negotiation));
            });
        })
            .then(todaysTrades => {
            for (let negotiation of todaysTrades) {
                this.negotiations.add(negotiation);
            }
            this.negotiationsView.update(this.negotiations);
        });
    }
    BusinessDay(date) {
        return date.getDay() > DaysOfTheWeek.SUNDAY && date.getDay() < DaysOfTheWeek.SATURDAY;
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Trade added successfully!');
    }
}
__decorate([
    domInjector('#data')
], NegotiationController.prototype, "inputDate", void 0);
__decorate([
    domInjector('#quantidade')
], NegotiationController.prototype, "inputAmount", void 0);
__decorate([
    domInjector('#valor')
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    inspect,
    Performance()
], NegotiationController.prototype, "add", null);
//# sourceMappingURL=negotiation-controller.js.map