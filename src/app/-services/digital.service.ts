import { Injectable } from '@angular/core';
import { PersonalDetails } from './interface/classes/personaldetails';
import { Address } from './interface/classes/address';
import { Work } from './interface/classes/work';
import { Digital } from './interface/digital';

@Injectable()
export class DigitalService {
  sixolileMtengwana:PersonalDetails;
  detail:Digital;

  constructor() { 
    this.sixolileMtengwana = new PersonalDetails(
      '@sixolilemtengwana',
      'sixolile',
      'mtengwana',
      '</developer>',
      new Address(
        'Cape Town',
        'Western Cape',
        '7784',
        'South Africa',
        'P61 Njimba Street'
      ),
      new Work('ABSA Group',
        'developer intern',
        new Date('2/1/2018'),
        'present'
      ));
    this.detail = new Digital('./assets/img/devRantAvatarRight.png',this.sixolileMtengwana);

    }

}
