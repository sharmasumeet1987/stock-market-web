import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CompaniesDashboardRoutingModule } from './companies-dashboard-routing.module';
import { CompaniesDashboardComponent } from './companies-dashboard/companies-dashboard.component';

@NgModule({
    declarations: [CompaniesDashboardComponent],
    imports: [CommonModule, CompaniesDashboardRoutingModule, MaterialModule],
})
export class CompaniesDashboardModule {}
