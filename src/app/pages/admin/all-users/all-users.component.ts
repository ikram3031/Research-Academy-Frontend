import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { User } from 'src/app/interfaces/user.interface';
import { FilterData } from 'src/app/interfaces/core/filterData';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit{

  // Store Data
  users: User[] = [];
  holdPrevData: User[] = [];
  totalUsers = 0;
  totalUsersStore = 0;
  data: any[] = new Array(10);
  activeFilter1: number = new Date().getMonth();

  // SEARCH AREA
  searchUsers: User[] = [];
  searchQuery = null;

  // Subscriptions
  // private subReloadOne: Subscription;
  // private subDataOne: Subscription;
  // private subForm: Subscription;

  constructor(
    private userService: UserService,
  ) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // this.getAllUsers();
  }

  /**
 * HTTP REQ HANDLE
 * getAllUsers()
 */

  // private getAllUsers() {
  //   // this.spinner.show();

  //   // Select
  //   const mSelect = {
  //     name: 1,
  //     role: 1,
  //     phoneNo: 1,
  //   };

  //   const filterData: FilterData = {
  //     // pagination: null,
  //     filter: null,
  //     select: mSelect,
  //     sort: { name: 1 }
  //   };


  //   this.subDataOne = this.userService.getAllUsers(filterData)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         if (res.success) {
  //           this.users = res.data;
  //           this.totalUsers = res.count;
  //           if (!this.searchQuery) {
  //             this.holdPrevData = res.data;
  //             this.totalUsersStore = res.count;
  //           }
  //         }
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       }
  //     });
  // }

  /**
* ON DESTROY
*/
  // eslint-disable-next-line @typescript-eslint/member-ordering
  // ngOnDestroy() {
  //   // if (this.subReloadOne) {
  //   //   this.subReloadOne.unsubscribe();
  //   // }
  //   // if (this.subDataOne) {
  //   //   this.subDataOne.unsubscribe();
  //   // }
  // }

}
