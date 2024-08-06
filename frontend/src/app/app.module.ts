import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CharacterComponent } from "./character/character.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PaginatorComponent } from "./paginator/paginator.component";
import { CharacterListComponent } from "./character/character-list/character-list.component";
import { CharacterCreateFormComponent } from "./character-create/character-create-form/character-create-form.component";
import { CharacterCreateComponent } from "./character-create/character-create.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    NavbarComponent,
    PaginatorComponent,
    CharacterListComponent,
    CharacterCreateComponent,
    CharacterCreateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
