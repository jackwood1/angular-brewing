import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BatchStartComponent } from './batch-start/batch-start.component';
import { RecentBatchesComponent } from './recent-batches/recent-batches.component';

import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: RecentBatchesComponent },
      { path: 'batches/:batchId', component: BatchStartComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    BatchStartComponent,
    RecentBatchesComponent
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/