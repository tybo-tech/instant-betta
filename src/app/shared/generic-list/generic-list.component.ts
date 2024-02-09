import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from 'src/services/accounts/LoginService ';
import { IKeyValue } from 'src/utils.models';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss'],
})
export class GenericListComponent {
  @Input() headers: IKeyValue[] = [];
  @Input() data: any[] = [];
  @Output() createClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() viewEvent = new EventEmitter<any>();
  isAdmin: boolean;
  constructor(private account: LoginService) {
    this.isAdmin = account.user.value.role === 'admin';
    console.log(this.isAdmin);
    
  }
  filteredData: any[] = [];
  searchTerm: string = '';
  sortColumn: string = '';
  sortDirection: number = 1;

  ngOnInit() {
    this.filteredData = this.data;
  }

  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = -this.sortDirection; // Reverse the sort direction if the same column is clicked again
    } else {
      this.sortColumn = column;
      this.sortDirection = 1;
    }

    this.filteredData.sort((a, b) => {
      const valueA = a[this.sortColumn];
      const valueB = b[this.sortColumn];

      if (valueA < valueB) {
        return -this.sortDirection;
      } else if (valueA > valueB) {
        return this.sortDirection;
      } else {
        return 0;
      }
    });
  }

  applySearch() {
    this.filteredData = this.data.filter((item) => {
      return Object.values(item).some((value: any) =>
        value?.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }
  onCreateClick() {
    this.createClicked.emit();
  }
  delete(item: any, e: Event) {
    e.stopPropagation();
    this.deleteEvent.emit(item);
  }
  open(item: any) {
    this.viewEvent.emit(item);
  }
}
