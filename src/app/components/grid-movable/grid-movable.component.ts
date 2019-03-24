import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-grid-movable',
  templateUrl: './grid-movable.component.html',
  styleUrls: ['./grid-movable.component.css']
})
export class GridMovableComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.columnDefs = [
      {
        headerName: 'Manager',
        field: 'manager',
        width: 150,
        sortingOrder: ['asc,desc'],
        rowDrag: true
      },
      {
        headerName: 'Name',
        field: 'name',
        width: 150,
      },
      {
        headerName: 'Owner Name',
        field: 'ownerName',
        width: 150,
      },
      {
        headerName: 'Color Code',
        field: 'color',
        width: 150,
      }
    ];
    this.sortingOrder = ['desc', 'asc', null];
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // const dataValue = [{firstName: 'Ragavan', age: 31}, {firstName: 'Mike', age: 50}];
    this.http.get('https://44893b89-d593-4131-9563-4f6faacaa7a1.mock.pstmn.io/projects')
      .subscribe(data => {
          params.api.setRowData(data);
        }
      );
  }

  getData() {
    const rowNode = this.gridApi.getDisplayedRowAtIndex(0);
    alert(rowNode.data.manager);
  }

}
