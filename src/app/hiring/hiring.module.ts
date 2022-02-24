import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {HiringPageComponent} from 'src/app/hiring/hiring-page/hiring-page.component'

const routes: Routes = [
  {
    path: '',
    component: HiringPageComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HiringPageComponent],
})
export class HiringModule {}
