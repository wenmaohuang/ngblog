import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
// import {ElModule} from 'element-angular';
// import { NzButtonModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CollapsePageComponent } from './components/collapse-page/collapse-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import { SearchUrlComponent } from './components/search-url/search-url.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { NavPageComponent } from './components/nav-page/nav-page.component';
import { SearchArticleBarComponent } from './components/search-article-bar/search-article-bar.component';
import { SelectArticleBarComponent } from './components/select-article-bar/select-article-bar.component';
import { ArticleHotBarComponent } from './components/article-hot-bar/article-hot-bar.component';
import { ArticleTopBarComponent } from './components/article-top-bar/article-top-bar.component';
import { VisitorBarComponent } from './components/visitor-bar/visitor-bar.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CollapsePageComponent,
    SearchUrlComponent,
    BlogPageComponent,
    NavPageComponent,
    SearchArticleBarComponent,
    SelectArticleBarComponent,
    ArticleHotBarComponent,
    ArticleTopBarComponent,
    VisitorBarComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCollapseModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
