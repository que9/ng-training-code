import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './components/training/training.component';
import { ListViewComponent } from './components/training/list-view/list-view.component';
import { SearchComponent } from './components/training/search/search.component';
import { ViewHeroComponent } from './components/training/view-hero/view-hero.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrainingComponent, ListViewComponent, SearchComponent, ViewHeroComponent ]
})
export class TrainingModule { }
