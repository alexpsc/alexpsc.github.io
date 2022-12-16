import { Component } from '@angular/core';
import { LanguageService } from './services/language/language.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.languageService.initLanguage();
    AOS.init();
  }

  title = 'Alex-Pascu';
}
