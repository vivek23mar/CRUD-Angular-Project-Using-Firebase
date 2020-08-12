import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CategoryService } from 'src/app/_services/category.service';
import { Router } from '@angular/router';
import { Category } from '../../admin/category/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  
  catForm:FormGroup;
  catData:Category;

  constructor(private router:Router, private fb:FormBuilder, private catser:CategoryService, private route : Router) {
    this.catForm=this.fb.group({
      'cname' : ['',Validators.required],
      'cdes'  : ['',Validators.required],
      'cdate' : ['',Validators.required],
    })    
   }

  ngOnInit(): void {
    this.catData=this.catser.getter()
  }

  catAdd(){    
   if(this.catData.$key==null)
   {
    console.log(this.catData);
    this.catser.insert(this.catData);
    setTimeout(() => {
     this.catForm.reset();
      this.route.navigateByUrl('/admin/category')
    }, 1000);
   }
   else
   {
     this.catser.updateCat(this.catData)
     setTimeout(() => {
      // this.catForm.reset();
       this.router.navigateByUrl('/admin/category')
     }, 500);

   }
  }

}
