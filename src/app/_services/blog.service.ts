import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { BlogModel } from '../admin/blog/blogModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogList :AngularFireList<any>;
  blogDataModel : BlogModel;

  constructor(private db:AngularFireDatabase, private router : Router) {
    this.blogList=this.db.list('bloges')
   }
  
  insertBlog(bData){
    this.blogList.push(bData);
  }

  getBlog(){
    return this.blogList.snapshotChanges()
  }

  delete(id)
  {
    this.blogList.remove(id)
  }

  setter(bData)
  {
    this.blogDataModel=bData;
    this.router.navigateByUrl('/admin/addblog');
  }

  getter()
  {
    return this.blogDataModel;
  }

  update(data)
  {
   this.blogList.update(data.$key,
    {         
    blogTitle    :  data.blogTitle,
    blogCategory :  data.blogCategory,
    blogDes      :   data.blogDes,
    blogDate     :  data.blogDate,
   })
  }
}
