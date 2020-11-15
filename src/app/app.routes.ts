import { Routes, RouterModule } from '@angular/router';
import { EncuestaComponent } from './encuesta/encuesta.component';

var page = '/encuesta';
const appRoutes: Routes = [
    { path: '', redirectTo: page, pathMatch: 'full' },
    { path: 'encuesta', component:EncuestaComponent },
    
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});