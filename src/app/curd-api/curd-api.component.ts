import { Component, OnInit } from '@angular/core';
import { CurdServiceService } from '../shared/services/curd-service.service';

@Component({
  selector: 'app-curd-api',
  templateUrl: './curd-api.component.html',
  styleUrls: ['./curd-api.component.css']
})

export class CurdAPIComponent implements OnInit {

  isEdit: boolean = true
  constructor(private curdServ: CurdServiceService) { }

  postData: any = [];

  ngOnInit() {
    this.curdServ.getAll().subscribe((data) => {
      this.postData = data
    })
  }

  editRow(item: any) {
    if (item.id === 0) {
      this.curdServ.addPost(item).subscribe((newPost: any) => {
        item.id = newPost.id;
        item.isEdit = true;
      });
    } else {
      this.curdServ.addPost(item).subscribe(() => {item.isEdit = false});
    }
  }

  addRow() {
    const newRow: any = {
      id: 0,
      title: '',
      isEdit: true,
    };
    this.postData.data = [newRow, ...this.postData.data];
  }

  deletePost(item: any) {
    this.curdServ.delete(item).subscribe(res => {
      this.postData = this.postData.filter((res: any) => res.id !== item);
      console.log(res, 'Post Deleted Successfully!');
    })
  }

}
