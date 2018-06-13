import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface RasporedItem {
  name: string;
  ponedeljak: string;
  utorak: string;
  sreda: string;
  cetvrtak: string;
  petak: string;
  subota: string;
  nedelja: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA : RasporedItem[] = [
  {name: 'Bodyattack', ponedeljak: '12-14', utorak: '', sreda: '12-14', cetvrtak: '', petak: '12-14', subota: '', nedelja: ''},
  {name: 'Bodybalance', ponedeljak: '', utorak: '15-17', sreda: '', cetvrtak: '18-20', petak: '', subota: '12-14', nedelja: ''},
  {name: 'Bodycombat', ponedeljak: '15-17', utorak: '', sreda: '15-17', cetvrtak: '', petak: '15-17', subota: '', nedelja: '' },
  {name: 'Les Mills Sprint', ponedeljak: '', utorak: '12-14', sreda: '', cetvrtak: '15-17', petak: '', subota: '16-18', nedelja: '' },
  {name: 'TRX Strong', ponedeljak: '', utorak: '', sreda: '', cetvrtak: '', petak: '', subota: '19-21', nedelja: '19-21'},
  {name: 'TRX Flow', ponedeljak: '', utorak: '', sreda: '', cetvrtak: '', petak: '', subota: '15-17', nedelja: '16-18'},
];

/**
 * Data source for the Raspored view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class RasporedDataSource extends DataSource<RasporedItem> {
  data: RasporedItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<RasporedItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: RasporedItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: RasporedItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'ponedeljak': return compare(a.ponedeljak, b.ponedeljak, isAsc);
        case 'utorak': return compare(a.utorak, b.utorak, isAsc);
        case 'sreda': return compare(a.sreda, b.sreda, isAsc);
        case 'cetvrtak': return compare(a.cetvrtak, b.cetvrtak, isAsc);
        case 'petak': return compare(a.petak, b.petak, isAsc);
        case 'subota': return compare(a.subota, b.subota, isAsc);
        case 'nedelja': return compare(a.nedelja, b.nedelja, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
