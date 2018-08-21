/* 
 * Sixolile.Mtengwwana™
 * License(s): MIT
 * Digital Profile: https://www.mtengwanas.firebaseapp.com
 * GeniusPlatform: https://genius.platform.com
*/

export class PersonalDetails{
    /* This class wil consist of a user's personal details */
    private alias:string;
    private firstname:string;
    private lastname:string;
    private profession:string;
    
    constructor(alias:string, firstname:string,lastname:string){
        this.alias = alias;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public fullName():string{
        return `${this.firstname} ${this.lastname}`;
    }

    public toString():string{
        return `Personal Details of: ${this.alias}\n
        First Name: ${this.firstname} \n
        Last Name: ${this.lastname}\n`;
    }

}