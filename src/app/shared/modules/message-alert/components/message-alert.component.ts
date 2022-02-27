import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core'

const DEFAULT_TEXT = ''
const DEFAULT_TYPE = 'info'

@Component({
  selector: 'app-message-alert',
  templateUrl: './message-alert.component.html',
  styleUrls: ['./message-alert.component.scss'],
})
export class MessageAlertComponent
  implements OnChanges, AfterViewInit, OnDestroy
{
  @Input() text: string
  @Input() type: string
  @Output() closed: EventEmitter<void>

  @ViewChild('alert') private alertEl?: ElementRef

  constructor(private renderer: Renderer2) {
    this.text = DEFAULT_TEXT
    this.type = DEFAULT_TYPE
    this.closed = new EventEmitter<void>()
  }

  ngOnChanges(changes: SimpleChanges): void {
    const typeChange = changes['type']
    if (typeChange && !typeChange.firstChange) {
      this.removeTypeClass(typeChange.previousValue)
      this.addTypeClass(typeChange.currentValue)
    }
  }

  ngAfterViewInit(): void {
    this.addTypeClass(this.type)
  }

  ngOnDestroy(): void {
    this.reset()
  }

  private removeTypeClass(type: string): void {
    this.renderer.removeClass(this.alertEl?.nativeElement, type)
  }

  private addTypeClass(type: string): void {
    this.renderer.addClass(this.alertEl?.nativeElement, type)
  }

  private reset(): void {
    this.removeTypeClass(this.type)
    this.type = DEFAULT_TYPE
    this.text = DEFAULT_TEXT
  }

  onClose(): void {
    return this.closed.emit()
  }
}
