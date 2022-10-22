import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CdkDragDrop, transferArrayItem} from "@angular/cdk/drag-drop";
import {BonsaiDialogComponent} from "./bonsai-dialog/bonsai-dialog.component";
import {Bonsai} from './bonsai/bonsai';
import {BonsaiD
  ialogResult} from './bonsai/bonsai';
 //Makaylas code 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'bonsai-store';

  shoppingCart: Bonsai[] = [];

  constructor(private dialog: MatDialog) {}

  bonsaiCollection: Bonsai[] = [
    {
      id: 1,
      title: 'Bonsai 1',
      description: 'This bonsai tree is from Omiya Bonsai Village. 6000 USD including shipping.',
      pictureLink: "https://www.japan-guide.com/g20/2097_01.jpg",
    },
    {
    id: 2,
    title: 'Bonsai 2',
    description: 'A small bonsai tree that is two feet. 200  USD.',
    pictureLink: "https://www.mydomaine.com/thmb/AAxl5wYbWItnxprqyuxm9El2v2U=/712x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/GettyImages-598322873-409b66c4895d492eb28fde9e752d98ad.jpg",
  },
  {
    id: 3,
    title: 'Bonsai 3',
    description: 'A medium bonsai tree that is two feet. 300  USD.',
    pictureLink: "https://www.thespruce.com/thmb/Fp2EfEyJ9xXKRDE0DeTn1ZgdWCg=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Bonsai-Juniper-Tree_GettyImages-1191078639-c86fffdd513648b6b2ee0d658710bc7d.jpg",
  },
  {
    id: 4,
    title: 'Bonsai 4',
    description: 'A discounted and small bonsai tree that is two feet. 50  USD.',
    pictureLink: "https://www.thespruce.com/thmb/e-86uS0IoiGUXgXX7MZggzL96RQ=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Bonsai-Cherry-Tree_GettyImages-125916653-d7913a2384a94a19af8b2e0a659ca67a.jpg",
  },
  {
    id: 5,
    title: 'Bonsai 5',
    description: 'A discounted and small bonsai tree that is two feet. 70  USD.',
    pictureLink: "https://www.thespruce.com/thmb/u5Q0ZUJAgtalRcA03NXJHzAUnZ4=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Bonsai-Jade_GettyImages-184995692-91c1d0b3ce054ee881aab1f4d5e32b85.jpg",
  }
  ];

  addBonsai(): void {
    const dialogRef = this.dialog.open(
      BonsaiDialogComponent,
      {
        width: '270px',
        data: {
          bonsai: {},
        }
      }
    );
    dialogRef
    .afterClosed()
      .subscribe(
        (result: BonsaiDialogResult | undefined)=>{
          if (!result) {
            return;
          }
          this.bonsaiCollection.push(result.bonsai);
        }
        );
        }
      

  

  editBonsai(list: 'bonsaiCollection' | 'shoppingCart', bonsai: Bonsai): void {
    const dialogRef = this.dialog.open(BonsaiDialogComponent, {
      width: '270px',
      data: {
        bonsai,
        enableDelete: true
      }
    });

    
    dialogRef.afterClosed()
      .subscribe((result: BonsaiDialogResult) => {
        if (!result) {
          return;
        }
        const dataList = this[list];
        const bonsaiIndex = dataList.indexOf(bonsai);
        if (result.delete) {
          dataList.splice(bonsaiIndex, 1);
        } else {
          dataList[bonsaiIndex] = bonsai;
        }
      })
  }
  

  drop(event: CdkDragDrop<Bonsai[]>): void {
    if (event.previousContainer === event.container || !event.container.data || !event.previousContainer.data) {
      return
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}