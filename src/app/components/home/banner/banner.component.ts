import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent {

  ngOnInit(): void {
    var options = {
      strings: ['', 'Frontend Developer', 'Web Developer', 'Mobile Developer'],
      typeSpeed: 140,
      backSpeed: 300,
      loop: true,
    };

    var typed = new Typed('.typed', options);
    typed.reset(true)
  }


}
