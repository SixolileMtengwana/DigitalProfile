import { PersonalDetails } from "./personaldetails";

/* 
 * Sixolile.Mtengwwana™
 * License(s): MIT
 * Digital Profile: https://www.mtengwanas.firebaseapp.com
 * GeniusPlatform: https://genius.platform.com
*/

/* This Class forms the structure of a person's workplace structure */

export class Work{
    private name:string;
    // private address:Address;
    // private contact:Contact;
    reference?:PersonalDetails;

    constructor ( name : string, reference:PersonalDetails){
        this.name = name;
        this.reference = reference;
    }
    

}