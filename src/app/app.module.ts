
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BonsaiComponent} from "./bonsai/bonsai.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";

import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

import {MatToolbarModule} from "@angular/material/toolbar";
import {DragDropModule} from "@angular/cdk/drag-drop";

import { BonsaiDialogComponent } from './bonsai-dialog/bonsai-dialog.component';

@NgModule({
declarations: [
AppComponent,
BonsaiComponent,
BonsaiDialogComponent
],
imports: [
BrowserModule,
BrowserAnimationsModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
FormsModule,
MatDialogModule,
MatButtonModule,
MatIconModule,
MatToolbarModule,
DragDropModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }