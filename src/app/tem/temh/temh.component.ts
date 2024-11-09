import { Component,  EventEmitter,  Input,Output} from '@angular/core';

@Component({
  selector: 'app-temh',
  standalone: true,
  imports: [],
  templateUrl: './temh.component.html',
  styles: ``
})
export class TemhComponent {

  @Input() mensaje:string=''

  @Output() mensaaje2= new EventEmitter<string>();
  enviaMensaje(){
    this.mensaaje2.emit('Hola desde el hijo');
  }

}
