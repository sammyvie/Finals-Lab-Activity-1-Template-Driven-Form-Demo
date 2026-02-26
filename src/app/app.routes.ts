import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
import { CustomizeDemo } from './custome/customize-demo'; 

export const routes: Routes = [
  { path: 'template', component: TemplateDemo },
  { path: 'reactive', component: ReactiveDemo },
  { path: 'custom', component: CustomizeDemo }, 
  { path: '', redirectTo: '/template', pathMatch: 'full' }
];
