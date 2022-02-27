import {HttpClient, HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {TranslateLoader, TranslateModule} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader'

import {AppRoutingModule} from 'src/app/app-routing.module'
import {AppComponent} from 'src/app/app.component'
import {HiringModule} from 'src/app/pages/hiring/hiring.module'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    HiringModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
