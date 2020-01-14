import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, HorizontalBarGraphComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavbarComponent,
    HorizontalBarGraphComponent
  ]
})
export class ComponentsModule { }
