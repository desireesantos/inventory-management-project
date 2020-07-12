import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SoftwareComponent } from './software/software.component';
import { HardwareComponent } from './hardware/hardware.component';

@NgModule({
  declarations: [
    AppComponent,
    ListInventoryComponent,
    InventoryComponent,
    SoftwareComponent,
    HardwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
