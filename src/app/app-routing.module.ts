import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './index/contact/contact.component';
import { HomeComponent } from './index/home/home.component';
import { AboutComponent } from './index/about/about.component';
import { UserloginComponent } from './index/userlogin/userlogin.component';
import { AhomeComponent } from './admin/ahome/ahome.component';
import { CategoryComponent } from './admin/category/category.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { BlogComponent } from './admin/blog/blog.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path:'',component:IndexComponent,
    children:[
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'userlogin',component:UserloginComponent},
      {path:'contact', component:ContactComponent},
    ]
  },
  
  { path:'admin', component:AdminComponent,canActivate:[AuthGuard],
    children:[
      {path:'',redirectTo:'ahome', pathMatch:'full'},
      {path:'ahome',component:AhomeComponent},
      {path:'category',component:CategoryComponent},
      {path:'addcategory',component:AddCategoryComponent},
      {path:'blog',component:BlogComponent},
      {path:'addblog',component:AddBlogComponent,}

    ]
  },

  { path:'login',component:LoginComponent},
  { path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
