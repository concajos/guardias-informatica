import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GuardiasInformaticaSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [GuardiasInformaticaSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class GuardiasInformaticaHomeModule {}
