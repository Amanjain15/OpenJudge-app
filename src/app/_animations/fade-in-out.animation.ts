import { query, trigger, state, animate, transition, style, group } from '@angular/animations';

export const fadeInOut = [
    // query(':enter', [style({ opacity: 0 }), {optional:true}]),
    query(':leave', [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))], {optional:true}),
    query(':enter', [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1 }))], {optional:true})
  ]