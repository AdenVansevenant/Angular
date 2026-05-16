import { Routes } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
import { FrontEndCourse } from './front-end-course/front-end-course';
import { FullStackCourse } from './full-stack-course/full-stack-course';

export const routes: Routes = [
{ path: 'first', component: First },
{ path: 'second', component: Second },
{ path: 'front-end-course', component: FrontEndCourse},
{ path: 'full-stack-course', component: FullStackCourse },
{path: '', redirectTo: 'first', pathMatch: 'full' }
];