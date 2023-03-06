import { Negotiation } from "../models/Negotiation.js";
export class NegotiationsService {
    getTradesOfTheDay() {
        return fetch('http://localhost:8080/DADOS')
            .then(res => res.json())
            .then((data) => {
            return data.map(todaysData => {
                return new Negotiation(new Date(), todaysData.times, todaysData.amount);
            });
        });
    }
}
//# sourceMappingURL=negotiations-services.js.map