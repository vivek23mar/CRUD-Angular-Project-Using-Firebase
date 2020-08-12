import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CategoryService } from 'src/app/_services/category.service';
import { BlogService } from 'src/app/_services/blog.service';
import { Router } from '@angular/router';
import { BlogModel } from '../blog/blogModel';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  catArray;
  bData:BlogModel;

  constructor(private catSer:CategoryService, private blogSer:BlogService, private router : Router) { }
  
  ngOnInit() {
    this.catSer.getCategory()
    .subscribe(res=>{
      this.catArray=res.map(list=>{
        return{
          $key:list.key,
          ...list.payload.val()
        }
      })
      
    })

    this.bData=this.blogSer.getter();
    console.log(this.bData);
  }

  blogAdd(){
   if(this.bData.$key==null)
    {
      this.blogSer.insertBlog(this.bData);
      console.log(this.bData);

      setTimeout(() => {
        this.router.navigateByUrl('/admin/blog')
  
      },500);
    }
    else
    {
      this.blogSer.update(this.bData);
      setTimeout(() => {
        this.router.navigateByUrl('/admin/blog');
          
      }, 1000);
    }
  }

}
