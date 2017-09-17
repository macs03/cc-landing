import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {
  RouterModule,
  Routes,
  RouterOutlet,
  RouterLink,
  RouterLinkWithHref,
  RouterLinkActive
} from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";
import { ParticlesModule } from "angular-particle";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import {
  LandingComponent,
  ConveniosDialog
} from "./components/landing/landing.component";
import { ProvidersComponent } from "./components/providers/providers.component";
import { ProvidersLandingComponent } from "./components/providers/providers-landing.component";
import { SideNavbarComponent } from "./components/side-navbar/side-navbar.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: LandingComponent },
  { path: "providers", component: ProvidersComponent },
  { path: "providers-landing", component: ProvidersLandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    ConveniosDialog,
    ProvidersComponent,
    ProvidersLandingComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    ParticlesModule
  ],
  providers: [],
  entryComponents: [ConveniosDialog],
  bootstrap: [AppComponent]
})
export class AppModule {}
