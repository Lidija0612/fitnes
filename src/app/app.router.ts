import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ClanstvoComponent } from './clanstvo/clanstvo.component';
import { RasporedComponent } from './raspored/raspored.component';
import { TreninziComponent } from './treninzi/treninzi.component';
import { PocetnaComponent } from './pocetna/pocetna.component';

export const router: Routes = [
    {path: '', redirectTo: 'pocetna', pathMatch: 'full' },
    {path: 'kontakt', component: KontaktComponent},
    {path: 'clanstvo', component: ClanstvoComponent},
    {path: 'raspored', component: RasporedComponent},
    {path: 'treninzi', component: TreninziComponent},
    {path: 'pocetna', component: PocetnaComponent}
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);