import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { SampleComponent } from './LocalReferenceVariable/sample.component';
import { Sample2Component } from './sample2/sample2.component';
import { Products2Component } from './products2/products2.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { HighlightDirective } from './highlight.directive';
import { HoverDirective } from './hover.directive';
import { Highlight2Directive } from './highlight2.directive';
import { CustomClassDirective } from './custom-class.directive';
import { StyleDirective } from './style.directive';
import { IfDirective } from './if.directive';
import { AngularComponentComponent } from './angular-component/angular-component.component';
import { JavaComponentComponent } from './java-component/java-component.component';
import { ObserveComponent } from './observe/observe.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent,
    SampleComponent,
    Sample2Component,
    Products2Component,
    ContentChildComponent,
    HighlightDirective,
    HoverDirective,
    Highlight2Directive,
    CustomClassDirective,
    StyleDirective,
    IfDirective,
    AngularComponentComponent,
    JavaComponentComponent,
    ObserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
