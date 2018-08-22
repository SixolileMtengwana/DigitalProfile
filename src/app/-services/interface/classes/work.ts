import { PersonalDetails } from "./personaldetails";
import { Address } from "./address";

/* 
 * Sixolile.Mtengwwana™
 * License(s): MIT
 * Digital Profile: https://www.mtengwanas.firebaseapp.com
 * GeniusPlatform: https://genius.platform.com
*/

/* This Class forms the structure of a person's workplace structure */

export class Work {
    private name: string;
    private position: string;
    private startDate: Date;
    private endDate: Date | string;
    private address?: Address;
    // private contact:Contact;
    reference?: PersonalDetails;

    constructor(name: string, position: string, startDate: Date, endDate: Date | string,
        address?: Address, reference?: PersonalDetails) {
        this.name = name;
        this.position = position;
        this.reference = reference;
        this.startDate = startDate;
        this.endDate = endDate;
        this.address = address;
    }

    toString():string {
        return `Name: ${this.name},\nContract Duration: ${this.startDate.toString()+' - '+this.endDate.toString()}\nPosition Held: ${this.position}\n${(this.address != undefined)?this.address.toString():''}`;
    }
}