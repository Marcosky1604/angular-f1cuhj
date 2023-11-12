import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ExerciceInterpolationComponent } from './exercice-interpolation/exercice-interpolation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProductListModule } from './product-list/product-list.module';
import { HomeComponent } from './home/home.component';
import { ParentEnfantModule } from './parent-enfant/parent-enfant.module';
import { PhotoModule } from './photo/photo.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UtilisateurModule,
    FormsModule,
    AppRoutingModule,
    ProductListModule,
    ParentEnfantModule,
    PhotoModule,
  ],
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserProfileComponent,
    ProductCardComponent,
    FooterComponent,
    TaskListComponent,
    ExerciceInterpolationComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
