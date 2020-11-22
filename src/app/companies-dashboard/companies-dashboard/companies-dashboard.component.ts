import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
    selector: 'app-companies-dashboard',
    templateUrl: './companies-dashboard.component.html',
    styleUrls: ['./companies-dashboard.component.css'],
})
export class CompaniesDashboardComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    public displayedColumns = [
        'bseSymbol',
        'companyName',
        'faceValue',
        'auditedYear',
        'currentEquity',
        'bookValue',
        'sales',
        'netProfit',
        'eps',
        'dividend',
        'debtEquityRatio',
        'ronw',
        'latQtrYear',
        'latQtrSales',
        'latQtrNetProfit',
        'y2dyearMonth',
        'y2dsales',
        'y2dsalesGrowth',
        'y2dnetProfit',
        'y2dnetProfitGrowth',
        'promoterHolding',
        'pledgedHolding',
        'institutionalHolding',
        'noOfShareHolders',
        'marketCap',
        'price',
        'fiftyTwoWeekHigh',
        'fiftyTwoWeekLow',
        'enterpriseValue',
        'peratio',
        'sectorName',
    ];
    dataSource = new MatTableDataSource<any>();

    constructor(private repoService: RepositoryService) {}

    ngOnInit(): void {
        this.getDataBank();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    public getDataBank = () => {
        this.repoService.getData('api/DataBank').subscribe((res) => {
            console.log('data', res);
            this.dataSource.data = res as any[];
        });
    };
    public doFilter = (value: string) => {
        this.dataSource.filter = value.trim().toLocaleLowerCase();
    };
}
