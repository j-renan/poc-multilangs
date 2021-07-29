import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private transSrv: TranslocoService
  ) { }

  ngOnInit(): void {
    //this.transSrv.selectTranslate('', {}).subscribe()
  }

  setLang(lang) {
    this.transSrv.setActiveLang(lang);
    localStorage.setItem("lang", lang)
    console.log(this.transSrv.setActiveLang(lang))
  }

}
