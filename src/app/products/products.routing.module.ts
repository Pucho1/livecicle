import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'products', component: ProductComponent},
      {path: '**', redirectTo: 'products'},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
