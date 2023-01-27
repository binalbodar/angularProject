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

  // EDIT DATA
  editRow(post: any) {
    if (post.id === 0) {
      this.curdServ.addPost(post).subscribe((post: any) => {
        post.id = post.id;
        post.isEdit = false;
      });
    } else {
      this.curdServ.addPost(post).subscribe(() => {post.isEdit = false});
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

  // DELETE DATA
  deletePost(item: any) {
    this.curdServ.delete(item).subscribe(res => {
      this.postData = this.postData.filter((res: any) => res.id !== item);
      console.log(res, 'Post Deleted Successfully!');
    })
  }

}
