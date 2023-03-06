import { TradesOfTheDay } from "../interfaces/trades-of-the-day.js";
import { Negotiation } from "../models/Negotiation.js";


export class NegotiationsService {

    public getTradesOfTheDay(): Promise<Negotiation[]>{
        return fetch('http://localhost:8080/DADOS')
        .then(res => res.json())
        .then((data: TradesOfTheDay[])=> {
            return data.map(todaysData => {
                return new Negotiation(
                    new Date(),
                    todaysData.times,
                    todaysData.amount
                )
            })
        });
    }
}