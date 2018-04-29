import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { StartComponent } from './components/start/start.component';
import { StoryComponent } from './components/Story/Story.component';
import { FightComponent } from './components/fight/fight.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';

const Routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'story', component: StoryComponent},
  {path: 'character-creation', component: CharacterCreationComponent},
  {path: 'fight', component: FightComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FightComponent,
    StoryComponent,
    CharacterCreationComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
