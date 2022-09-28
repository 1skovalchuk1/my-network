import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapPipe } from './map/map.pipe';
import { FilterPipe } from './filter/filter.pipe';


@NgModule({
  declarations: [
    MapPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MapPipe,
    FilterPipe,
  ]
})
export class PipesModule { }
