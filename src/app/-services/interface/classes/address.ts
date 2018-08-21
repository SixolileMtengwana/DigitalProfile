/* 
 * Sixolile.Mtengwwana™
 * License(s): MIT
 * Digital Profile: https://www.mtengwanas.firebaseapp.com
 * GeniusPlatform: https://genius.platform.com
*/
export class Address {

    private line1: string;
    private line2?: string;
    private city: string;
    private region: string;
    private zip: string;
    private country: string;

    constructor(city: string, region: string, zip: string, country: string, line1: string, line2?: string) {
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.region = region;
        this.zip = zip;
        this.country = country;
    }

    public toString():string{
        return `Adrress Details:\n${this.line1},\n
        ${(this.line2 != undefined && this.line2.length > 0 )?(this.line2+','):''}\n
        ${this.city},\n
        ${this.line1},\n`;
    }
}