import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurdAPIComponent } from './curd-api/curd-api.component';
import { CurdWithoutAPIComponent } from './curd-without-api/curd-without-api.component';
import { MaterialFormComponent } from './material-form/material-form.component';

const routes: Routes = [
  { path: '', component: CurdWithoutAPIComponent },
  {path: 'app-curd-api', component: CurdAPIComponent},
  {path:'Material-Form', component:MaterialFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
