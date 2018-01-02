import { Component } from '@angular/core';
import { trigger, transition } from '@angular/animations';
import { Router, RoutesRecognized } from '@angular/router';
import { slideLeft, slideRight, fadeInOut } from './_animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  trigger('routerAnimations', [
    transition('* => home', slideRight),
    transition('* => *', slideLeft),
    ])
  ]
})

export class AppComponent {
  title = 'app';
  apiRoot: string = "http://0.0.0.0:8000";

	prepareRouteTransition(outlet){
		const animation = outlet.activatedRouteData['animation'] || {};
    const state = animation['value'] || null;
    return state;
  }
}

