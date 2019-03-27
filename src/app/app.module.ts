import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { TapRoomAppComponent } from './tap-room-app/tap-room-app.component';




@NgModule({
  declarations: [
    AppComponent,
    TapRoomAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
