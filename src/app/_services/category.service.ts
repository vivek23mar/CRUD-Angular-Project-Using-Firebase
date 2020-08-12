import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Category} from '../admin/category/category'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category:AngularFireList<any>;

  categoryModel:Category;
  

  constructor(private db:AngularFireDatabase, private router:Router) {
    this.category=this.db.list('categories', sort=>sort.orderByChild('cname'))
   }

  insert(cdata){
   /*  this.category.push({
      cname:cdata.cname,
      cdes:cdata.cdes,
      cdate:cdata.cdate,
    }) */
    this.category.push(cdata)
  }

  getCategory(){
    return this.category.snapshotChanges()
    
  }

  deleteCategory(id){
    this.category.remove(id)
  }

  setter(cdata:Category)
  {
    this.categoryModel=cdata;
    this.router.navigateByUrl('admin/addcategory')
  }

  getter()
  {
    return this.categoryModel
  }

  updateCat(cdata)
  {
    this.category.update(cdata.$key,{
      cname:cdata.cname,
      cdes:cdata.cdes,
      cdate:cdata.cdate
    })
  }
 


  

 
}
