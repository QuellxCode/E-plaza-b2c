import { HomeComponent } from './../../pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from 'material-module.module';
import { HomeLayoutRoutes } from './home-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRoutes),
    FormsModule,
    NgbModule,
    DemoMaterialModule,
  ],
  declarations: [
    HomeComponent
  ]
})

export class HomeLayoutModule {}
