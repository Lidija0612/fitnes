import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { RasporedDataSource } from './raspored-datasource';

@Component({
  selector: 'raspored',
  templateUrl: './raspored.component.html',
  styleUrls: ['./raspored.component.css']
})
export class RasporedComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: RasporedDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'ponedeljak', 'utotrak', 'sreda', 'cetvrtak', 'petak', 'subota', 'nedelja'];

  ngOnInit() {
    this.dataSource = new RasporedDataSource(this.paginator, this.sort);
  }
}
