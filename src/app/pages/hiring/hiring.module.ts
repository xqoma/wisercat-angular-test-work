import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import {TranslateModule} from '@ngx-translate/core'

import {HiringPageComponent} from 'src/app/pages/hiring/components/hiring-page/hiring-page.component'
import {MessageAlerModule} from 'src/app/shared/modules/message-alert/message-alert.module'

const routes: Routes = [
  {
    path: '',
    component: HiringPageComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ReactiveFormsModule,
    MessageAlerModule,
  ],
  declarations: [HiringPageComponent],
})
export class HiringModule {}
