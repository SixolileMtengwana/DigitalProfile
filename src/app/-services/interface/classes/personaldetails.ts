import { Address } from "./address";
import { Work } from "./work";

/* 
 * Sixolile.Mtengwwana™
 * License(s): MIT
 * Digital Profile: https://www.mtengwanas.firebaseapp.com
 * GeniusPlatform: https://genius.platform.com
*/

export class PersonalDetails {
    /* This class wil consist of a user's personal details */
    private alias: string;
    private firstname: string;
    private lastname: string;
    private profession: string;
    private address: Address;
    private work?: Work;
    private workHistory?: Work[];

    constructor(alias: string, firstname: string, lastname: string, profession: string, 
        address: Address, work?: Work, workHistory?: Work[]) {
        this.alias = alias;
        this.firstname = firstname;
        this.lastname = lastname;
        this.profession = profession;
        this.address = address;
        this.work = work;
        this.workHistory = workHistory;
    }

    public fullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }
    comple
    public toString(): string {
        return `Personal Details:\nUsername: ${this.alias}\nFirst Name: ${this.firstname} \nlast Name: ${this.lastname}\nProfession: ${this.profession}\n\n${this.address.toString()}\n\nWork Details:\n${this.work.toString()}\nWork History: ${this.workHistory}`;
    }

}