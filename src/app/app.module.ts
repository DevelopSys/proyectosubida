import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivaIfComponent } from './components/directiva-if/directiva-if.component';
import { DirectivaSwitchComponent } from './components/directiva-switch/directiva-switch.component';
import { DirectivaForComponent } from './components/directiva-for/directiva-for.component';
import { PipeImagenPipe } from './pipes/pipe-imagen.pipe';
import { CartasCompletoComponent } from './components/cartas-completo/cartas-completo.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UnoComponent } from './components/uno/uno.component';
import { DosComponent } from './components/dos/dos.component';
import { HomeComponent } from './components/home/home.component';
import { CartaComponent } from './components/carta/carta.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaIfComponent,
    DirectivaSwitchComponent,
    DirectivaForComponent,
    PipeImagenPipe,
    CartasCompletoComponent,
    NavBarComponent,
    UnoComponent,
    DosComponent,
    HomeComponent,
    CartaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
