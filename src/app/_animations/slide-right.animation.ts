import { query, trigger, state, animate, transition, style, group } from '@angular/animations';

export const slideRight = [
    query(':leave', style({ position: 'absolute', left: 0, right: 0 ,transform: 'translate3d(0%,0,0)' }), {optional:true}),
    query(':enter', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(-100%,0,0)' }), {optional:true}),
    group([
      query(':leave', group([
        animate('400ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(100%,0,0)' })), // y: '-100%'
      ]), {optional:true}),
      query(':enter', group([
        animate('400ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' })),
      ]), {optional:true})
    ])
  ]

