import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { entityConfig } from './entity.metadata';
import {ListComponent} from './component/list/list.component';
import { QuizeRoutingModule } from './quize-routing.module';
import { QuizeDataService } from './services/quize-data.service';
import { QuizeService } from './services/quize.service';
import { Quize } from './model/quize';
import { QuizePostComponent } from './component/quize-post/quize-post.component';
import { EditQuizeComponent } from './component/edit-quize/edit-quize.component';
import { ReactiveFormsModule } from '@angular/forms';
const entityMetadata: EntityMetadataMap = {
  Quize: {
    sortComparer: sortByName,
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticDelete: false,
    },
  },
};
function sortByName(a: Quize, b: Quize): number {
  let comp = a.title.localeCompare(b.title);
  return comp;
}
@NgModule({
  declarations: [ListComponent, QuizePostComponent, EditQuizeComponent, EditQuizeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    QuizeRoutingModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    
  ],
  providers: [QuizeDataService],
  bootstrap: [],
})
export class QuizeModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    quizeDataService: QuizeDataService,
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Quize', quizeDataService); // <-- register it
  }
}
