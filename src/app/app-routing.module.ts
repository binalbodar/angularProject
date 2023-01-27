import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurdAPIComponent } from './curd-api/curd-api.component';
import { CurdWithoutAPIComponent } from './curd-without-api/curd-without-api.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';

const routes: Routes = [
  { path: '', component: CurdWithoutAPIComponent },
  {path: 'app-curd-api', component: CurdAPIComponent},
  {path:'Material-Form', component:MaterialFormComponent},
  { path: 'post', redirectTo: 'post/index', pathMatch: 'full' },
  { path: 'post/index', component: IndexComponent },
  { path: 'post/:postId/view', component: ViewComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/:postId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
