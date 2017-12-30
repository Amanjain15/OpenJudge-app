import { Component } from '@angular/core';
import { trigger, transition } from '@angular/animations';
import { slideLeft, slideRight } from './_animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  trigger('routerAnimations', [
    transition('* => home', slideLeft),
  	transition('* => *', slideRight),
    ])
  ]
})

export class AppComponent {
  title = 'app';
	prepareRouteTransition(outlet){
		const animation = outlet.activatedRouteData['animation'] || {};
		console.log(animation['value']);
		return animation['value'] || null;
	}
}

