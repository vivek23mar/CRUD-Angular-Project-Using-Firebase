import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { Router } from '@angular/router';
import { Category } from '../category/category';
import { BlogModel } from '../blog/blogModel';
import { BlogService } from 'src/app/_services/blog.service';


@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent implements OnInit {

  constructor(
    private catser:CategoryService,
    private blogser:BlogService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  addcat(event)
  {
    event.preventDefault();
    this.catser.setter( new Category);
    this.router.navigateByUrl('/admin/addcategory')

  }
  addBlog(event)
  {
    event.preventDefault();
    this.blogser.setter(new BlogModel);
    this.router.navigateByUrl('/admin/addblog')

  }

}
