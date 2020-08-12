import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './index/home/home.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';
import { ContactComponent } from './index/contact/contact.component';
import { AboutComponent } from './index/about/about.component';
import { AheaderComponent } from './admin/aheader/aheader.component';
import { AsidebarComponent } from './admin/asidebar/asidebar.component';
import { AhomeComponent } from './admin/ahome/ahome.component';
import { CategoryComponent } from './admin/category/category.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { BlogComponent } from './admin/blog/blog.component';
import { UserloginComponent } from './index/userlogin/userlogin.component';
import { environment } from 'src/environments/environment';
import { CategoryService } from './_services/category.service';
import { BlogService } from './_services/blog.service';
import { SortPipe } from './sort.pipe';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminComponent,
    NotfoundComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    AheaderComponent,
    AsidebarComponent,
    AhomeComponent,
    CategoryComponent,
    AddCategoryComponent,
    AddBlogComponent,
    BlogComponent,
    UserloginComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [CategoryService,BlogService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
