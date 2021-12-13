import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditQuizeComponent } from './component/edit-quize/edit-quize.component';
import { ListComponent } from './component/list/list.component';
import { QuizePostComponent } from './component/quize-post/quize-post.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  { 
    path: 'add',
    component: QuizePostComponent
  },
  {
    path: 'edit/:id',
    component: EditQuizeComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizeRoutingModule {}
