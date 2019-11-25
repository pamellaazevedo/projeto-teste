import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
// import { SingletonRouterService } from 'src/services/singletonRouter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'teste-boticario';
  data = false;

  constructor(public dialog: MatDialog,) {}
    // private singletonService: SingletonRouterService) {}
    ngOnInit() {
     
    }
    

    openDialog() {
      const dialogRef = this.dialog.open(AppComponent, {
        height: '350px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });   
    }

}