import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Character } from "./character.model";
import { Info } from "../common/common.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  private readonly CHARACTER_PAGE_API =
    "https://5vue77teib.execute-api.us-east-1.amazonaws.com/dev/character?page=";

  private httpHeaders: HttpHeaders = new HttpHeaders({
    "X-Api-Key": "WeRAh6pQBZ3woFt3VSeWWasRfi8EIJqu3DHtRo4P",
  });

  constructor(private readonly httpClient: HttpClient) {}

  public getCharacterByURL(url: string): Observable<Character> {
    return this.httpClient.get<Character>(url, { headers: this.httpHeaders });
  }

  public getCharacters(page: string): Observable<Info<Character[]>> {
    return this.httpClient.get<Info<Character[]>>(
      this.CHARACTER_PAGE_API + page
    );
  }
}
