import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {MessageAlertComponent} from 'src/app/shared/modules/message-alert/components/message-alert.component'

@NgModule({
  imports: [CommonModule],
  declarations: [MessageAlertComponent],
  exports: [MessageAlertComponent],
})
export class MessageAlerModule {}
