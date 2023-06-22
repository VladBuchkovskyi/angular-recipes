import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Don't need anymore, because we add routing to our app
  // loadedFeature: string = 'recipe'

  // onNavigate(feature: string){
  //   this.loadedFeature = feature
  // }
}
