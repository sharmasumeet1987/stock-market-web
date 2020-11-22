import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesDashboardComponent } from './companies-dashboard/companies-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: CompaniesDashboardComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CompaniesDashboardRoutingModule {}
