import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from './contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateService implements CanDeactivate<ContactComponent>{
  canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean 
  {
    return component.canExit();
  }
  constructor() { }
}
