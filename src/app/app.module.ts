import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { MaterialFormComponent } from './material-form/material-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurdAPIComponent } from './curd-api/curd-api.component';
import { CurdWithoutAPIComponent } from './curd-without-api/curd-without-api.component';
import { IndexComponent } from './post/index/index.component';
import { EditComponent } from './post/edit/edit.component';
import { ViewComponent } from './post/view/view.component';
import { CreateComponent } from './post/create/create.component';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    CurdAPIComponent,
    CurdWithoutAPIComponent,
    MaterialFormComponent,
    IndexComponent,
    EditComponent,
    ViewComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgMaterialModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
