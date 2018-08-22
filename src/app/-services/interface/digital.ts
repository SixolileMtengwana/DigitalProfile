import { PersonalDetails } from "./classes/personaldetails";

export class Digital{
/* 
 * Sixolile.Mtengwana™
 * License(s): MIT
 * Digital Profile: https://www.mtengwanas.firebaseapp.com
 * GeniusPlatform: https://genius.platform.com
*/
    /* This class will comprise of all the details a user wiil have */
    imgUrl:string;
    details:PersonalDetails;

    constructor( imgUrl:string , detail:PersonalDetails){
        this.imgUrl = imgUrl;
        this.details = detail;
    }

    toString():string{
        return `Avatar: ${this.imgUrl}\n${this.details.toString()}`;
    }


}