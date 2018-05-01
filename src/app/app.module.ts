import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrainingModule } from './training/training.module';
import { TrainingComponent } from './training/components/training/training.component';
// 009
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    TrainingModule,
    HttpModule
  ],
  bootstrap: [TrainingComponent]
})
export class AppModule { }
