// update-universite.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { universiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.scss'] 
})
export class UpdateUniversiteComponent implements OnInit {
  updateForm!: FormGroup;
  universiteId: any;

  constructor(
    private formBuilder: FormBuilder,
    private universiteService: universiteService, // Remplacez 'UniversiteService' par le nom correct de votre service
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      idUniversite: [this.universiteId],

      nomUniversite: ['', Validators.required],
      adresse: ['', Validators.required]
    });

    // Récupérer l'ID de l'université depuis l'URL
    this.universiteId = this.route.snapshot.params['iduniversite'];

    // Charger les données de l'université à mettre à jour
    this.universiteService.universiteById(this.universiteId).subscribe(
      (universite) => {
        this.updateForm.patchValue(universite);
      },
      (error) => {
        console.error('Erreur lors du chargement des données de l\'université:', error);
      }
    );
  }

  onSubmit(): void {
  if (this.updateForm.valid) {
    // Mettre à jour l'université avec les nouvelles données
    this.universiteService.updateUniversite(this.updateForm.value).subscribe(
      {
        next: (updatedUniversite) => {
          console.log('Université mise à jour avec succès:', updatedUniversite);
          // Rediriger vers la liste des universités ou une autre page après la mise à jour
          this.router.navigate(['/liste-universites']);
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour de l\'université:', error);
        }
      }
    );
  }
}

}
