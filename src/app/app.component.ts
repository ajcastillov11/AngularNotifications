import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNotifications';

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(private toastr: ToastrService) {
        
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showError(){
    this.toastr.error('Hello world!', 'Toastr fun!');
}
 
showInfo(){
    this.toastr.info('Hello world!', 'Toastr fun!');
}
 
showWarning(){
    this.toastr.warning('Hello world!', 'Toastr fun!');
}
 

}


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}