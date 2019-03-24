import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ag-gridng';

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: 'Id',
        field: 'id',
        width: 150,
        sortingOrder: ['asc,desc']
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
        headerName: 'Project Group Name',
        field: 'projectGroupName',
        width: 150,
      }
    ];
    this.sortingOrder = ['desc', 'asc', null];
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // const dataValue = [{firstName: 'Ragavan', age: 31}, {firstName: 'Mike', age: 50}];
    this.http.get('yourmockURL/projects')
      .subscribe(data => {
        params.api.setRowData(data);
      }
    );
  }
}

