import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesDashboardRoutingModule } from './companies-dashboard-routing.module';
import { CompaniesDashboardComponent } from './companies-dashboard/companies-dashboard.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CompaniesDashboardComponent],
  imports: [CommonModule, CompaniesDashboardRoutingModule, MaterialModule],
})
export class CompaniesDashboardModule {}
