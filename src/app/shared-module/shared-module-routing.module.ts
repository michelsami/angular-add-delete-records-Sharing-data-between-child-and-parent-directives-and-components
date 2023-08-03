import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {path: '', component:MainLayoutComponent, children: [
    {path: 'home', component:HomeComponent},
    {path: '', redirectTo: 'home', pathMatch:"full"},
    { path: 'contacts', loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModuleRoutingModule { }
