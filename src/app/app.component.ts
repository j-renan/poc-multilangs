import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'poc-multilangs';

  constructor(
    private transSrv: TranslocoService
  ) { }

  ngOnInit(): void {
    const lang = localStorage.getItem("lang")
    if (lang) { 
      this.setLang(lang)
    }
  }
  setLang(lang) {
    this.transSrv.setActiveLang(lang);
    console.log(this.transSrv.setActiveLang(lang))
  }
}
