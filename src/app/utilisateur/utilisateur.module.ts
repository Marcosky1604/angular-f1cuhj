import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfilUtilisateurComponent } from './profil-utilisateur/profil-utilisateur.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfilUtilisateurComponent],
  exports: [ProfilUtilisateurComponent],
})
export class UtilisateurModule {}
