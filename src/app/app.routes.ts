import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ErreurComponent } from './erreur/erreur.component';

export const routes: Routes = [
    {path:"chemin1" , component : Comp1Component},
    {path:"chemin2" , component : Comp2Component},
    {path : '**', component : ErreurComponent}

];
