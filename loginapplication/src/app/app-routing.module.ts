
import { NgModule } from '@angular/core';
import{ Routes,RouterModule } from '@angular/router';
import {TodosListComponent } from './todo/todos-list/todos-list.component';
import { Component } from '@angular/core';

 const routes:Routes =[
     {path:'todos-list', component:TodosListComponent }
 ];
@NgModule({
    imports:[RouterModule.forRoot(routes)],

    exports:[RouterModule]
})

export class AppRoutingModule {}