import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HardwareComponent } from './hardware/hardware.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  {
    path: 'software',
    component: SoftwareComponent,
  },
  {
    path: 'hardware',
    component: HardwareComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
