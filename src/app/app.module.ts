import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListsContainerComponent } from './lists-container/lists-container.component';
import { ListItemComponent } from './lists-container/components/list-item/list-item.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './redux-app/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListsContainerComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      app: appReducer
    }),

    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
