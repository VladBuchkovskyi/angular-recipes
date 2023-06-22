import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Don't need anymore while adding routing'
  // @Output() featureSelected = new EventEmitter<string>()

  // onSelect(feature:string){
  //   this.featureSelected.emit(feature)
  // }
}
