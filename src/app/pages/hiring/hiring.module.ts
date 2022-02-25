import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'

import {HiringPageComponent} from 'src/app/pages/hiring/hiring-page/hiring-page.component'

const routes: Routes = [
  {
    path: '',
    component: HiringPageComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  declarations: [HiringPageComponent],
})
export class HiringModule {}
