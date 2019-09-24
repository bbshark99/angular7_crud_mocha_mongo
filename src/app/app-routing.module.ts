import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstViewComponent } from './gst-view/gst-view.component';

const routes: Routes = [
  {
    path: 'create',
    component: GstAddComponent
  },
  {
    path: 'edit/:id',
    component: GstEditComponent
  },
  {
    path: 'view/:id',
    component: GstViewComponent
  },
  {
    path: '',
    component: GstGetComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
