import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockMarketRoutingModule } from './stock-market-routing.module';
import { CompaniesDashboardComponent } from './companies-dashboard/companies-dashboard.component';


@NgModule({
  declarations: [CompaniesDashboardComponent],
  imports: [
    CommonModule,
    StockMarketRoutingModule
  ]
})
export class StockMarketModule { }
