import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtfsComponent } from './etfs/etfs.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
{path:'', component: HomeComponent},
{path: 'news', component: NewsComponent},
{path: 'etfs', component: EtfsComponent},
{path: 'etfs/:id', component:EtfsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
