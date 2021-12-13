import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
  } from '@ngrx/data';

import { Quize } from '../model/quize';

@Injectable({
    providedIn: 'root',
  })
export class QuizeService extends EntityCollectionServiceBase<Quize> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Quize', serviceElementsFactory);
    }
}