import { NgModule } from "@angular/core";
import { CharacterComponent } from "./character/character.component";
import { RouterModule, Routes } from "@angular/router";
import { CharacterCreateComponent } from "./character-create/character-create.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "character/page/1" },
  { path: "character/page/:id", component: CharacterComponent },
  { path: "character/create", component: CharacterCreateComponent },
  { path: "**", redirectTo: "character/page/1" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
