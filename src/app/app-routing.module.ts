import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { PartyComponent } from './party/party.component';

const routes: Routes = [
  { path: 'business', component: BusinessComponent },
  { path: 'party', component: PartyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
