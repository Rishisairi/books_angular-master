import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { LoginPageComponent } from './login-page/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login-page',
    component: LoginPageComponent,
  },
  {
    path: 'home/register-page',
    component: RegisterPageComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'search/:id',
    component: BookdetailsComponent,
  },
  {
    path: 'addbooks',
    component: AddbooksComponent,
  },

  {
    path: 'search/edit/:id',
    component: EditBooksComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
