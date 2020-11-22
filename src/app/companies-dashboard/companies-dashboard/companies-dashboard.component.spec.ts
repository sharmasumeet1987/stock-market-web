import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesDashboardComponent } from './companies-dashboard.component';

describe('CompaniesDashboardComponent', () => {
    let component: CompaniesDashboardComponent;
    let fixture: ComponentFixture<CompaniesDashboardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CompaniesDashboardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CompaniesDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
