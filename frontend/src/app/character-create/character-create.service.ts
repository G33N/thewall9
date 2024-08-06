import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CreateCharacter } from "./create-character.model";

@Injectable({
  providedIn: "root",
})
export class CharacterCreateService {
  private readonly CHARACTER_PAGE_API =
    "https://5vue77teib.execute-api.us-east-1.amazonaws.com/dev/character";

  private httpHeaders: HttpHeaders = new HttpHeaders({
    "X-Api-Key": "WeRAh6pQBZ3woFt3VSeWWasRfi8EIJqu3DHtRo4P",
  });

  constructor(public readonly httpClient: HttpClient) {}

  public createCharacter(
    character: CreateCharacter
  ): Observable<CreateCharacter> {
    return this.httpClient.post<CreateCharacter>(
      this.CHARACTER_PAGE_API,
      character,
      {
        headers: this.httpHeaders,
      }
    );
  }
}
