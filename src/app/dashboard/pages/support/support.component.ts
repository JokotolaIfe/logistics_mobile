import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MdbTableDirective, MdbTablePaginationComponent, ModalDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild("statusModal", { static: false }) statusModal: ModalDirective;

  elements: any = [];
  previous: any = [];
  headElements = ['', 'Customer Details', 'Agent', 'Chat Initiated', 'Chat Status', 'Action'];
  status: string;
  statuses: any = [
    { name: 'open', status: 'Open', image: '../../../../assets/images/open_status.png', id: 0, details: 'No one has joined this chat yet, so click to join chat'},
    { name: 'resolved', status: 'Ended', image: '../../../../assets/images/ended_status.png', id: 1, details: 'jhoshuer has left the call.'},
    { name: 'in_view', status: 'In View', image: '../../../../assets/images/in_view_status.png', id: 2, details: 'No one has joined this chat yet, so click to join chat'}
  ];
  selected_status: any;
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.elements.push({id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i});
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();

    this.statusModal.onHidden.subscribe(res=>{
      this.selected_status = null;
    })
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  clickStatus(status){
    this.status = status;
    this.selected_status = this.statuses.filter(item=>item.name === status)[0];
    setTimeout(() => {
      this.statusModal.show();
    }, 500);
  }
}
