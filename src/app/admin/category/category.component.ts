import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catArray;
  constructor(private catser:CategoryService) { }

  ngOnInit(){
    this.catser.getCategory()
    .subscribe(res=>{

      this.catArray=res.map(list=>{
        return{
          $key:list.key,
          ...list.payload.val()
        }
      })
     
    })
    
  }


  delete(id)
  {
    this.catser.deleteCategory(id)
  }

  edit(data)
  {
      
      this.catser.setter(data)
  }

  

 

}
