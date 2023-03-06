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
    @domInjector('#data')
    private inputDate: HTMLInputElement;
    @domInjector('#quantidade')
    private inputAmount: HTMLInputElement;
    @domInjector('#valor')
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations;
    private negotiationsView = new NegotiationsView('#negotiationsView');
    private messageView = new MessageView('#messageView');
    private readonly SATURDAY =6;
    private readonly SUNDAY = 0;
    private negotiationsService = new NegotiationsService;

    constructor() {
        this.negotiationsView.update(this.negotiations);
    }

    @inspect
    @Performance()
    public add():void {
        const negotiation = Negotiation.createOf(
            this.inputDate.value,
            this.inputAmount.value,
            this.inputValue.value
        );

        if(!this.BusinessDay(negotiation.date)) {
         this.messageView
         .update('Only trades on business days are accepted!');
         return;
        }

        this.negotiations.add(negotiation);
        printOut(negotiation, this.negotiations);
        this.cleanForm();
        this.updateView();
    }

    public importData(): void {
        this.negotiationsService.getTradesOfTheDay()
        .then(todaysTrades => {
            return todaysTrades.filter(todaysTrades => {
                return !this.negotiations
                .toList()
                .some(negotiation => negotiation.equals(negotiation));
            });
        })
        .then(todaysTrades => {
            for(let negotiation of todaysTrades) {
                this.negotiations.add(negotiation);
            }
            this.negotiationsView.update(this.negotiations);
        });
    }

    private BusinessDay(date: Date) {
        return date.getDay() > DaysOfTheWeek.SUNDAY && date.getDay() < DaysOfTheWeek.SATURDAY;
    }
    
    private cleanForm(): void{
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }

    private updateView():void {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Trade added successfully!');
    }
}