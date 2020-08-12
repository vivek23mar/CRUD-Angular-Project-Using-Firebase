import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/_services/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogArray;
  constructor(private blogSer:BlogService) { }

  ngOnInit(): void {
    this.blogSer.getBlog()
    .subscribe(res=>{

      this.blogArray=res.map(list=>{
        return{
          $key:list.key,
          ...list.payload.val()
        }
      })
      console.log(this.blogArray)
    })
  }

  delete(blogID)
  {
    this.blogSer.delete(blogID)
  }

  editBlog(bData)
  {
    this.blogSer.setter(bData)
  }

 

}
