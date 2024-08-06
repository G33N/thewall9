import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CharacterCreateService } from "../character-create.service";
import { CreateCharacter } from "../create-character.model";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-character-create-form",
  templateUrl: "./character-create-form.component.html",
})
export class CharacterCreateFormComponent implements OnInit {
  characterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly service: CharacterCreateService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.characterForm = this.fb.group({
      name: ["", Validators.required],
      status: ["", Validators.required],
      species: ["", Validators.required],
      type: ["", Validators.required],
      gender: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.characterForm.valid) {
      const updatedCharacter: CreateCharacter = this.characterForm.value;
      this.service.createCharacter(updatedCharacter).subscribe(
        () => {
          this.toastr.success("Success", "character created");
          this.router.navigate(["character"], { relativeTo: this.route });
        },
        (error) => {
          console.error("Error creating character:", error);
        }
      );
    }
  }
}
