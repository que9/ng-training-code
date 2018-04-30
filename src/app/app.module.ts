import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrainingModule } from './training/training.module';
import { TrainingComponent } from './training/components/training/training.component';

@NgModule({
  imports: [
    BrowserModule,
    TrainingModule
  ],
  bootstrap: [TrainingComponent]
})
export class AppModule { }
