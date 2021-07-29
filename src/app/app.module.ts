import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { TRANSLOCO_CONFIG, TranslocoConfig} from "@ngneat/transloco";
import { FooterComponent } from './template/footer/footer.component';
import { BodyComponent } from './template/body/body.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { SaibaMaisComponent } from './views/saiba-mais/saiba-mais.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SaibaMaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    TranslocoRootModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: ["pt", "es"],
        reRenderOnLangChange: true,
        fallbackLang: "es",
        defaultLang: "pt"
      } as TranslocoConfig
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
