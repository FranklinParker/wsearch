import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {PageListComponent} from './components/page-list/page-list.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    PageListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    PageListComponent
  ]
})
export class SharedModule {
}
