import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from 'src/app/app-routing.module'
import {AppComponent} from 'src/app/app.component'
import {HiringModule} from 'src/app/pages/hiring/hiring.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HiringModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
