import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Mycomponents/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FooterComponent } from "./Mycomponents/footer/footer.component";
import { HomeComponent } from "./Mycomponents/home/home.component";
import { LanguagesComponent } from './Mycomponents/languages/languages.component';
import { KannadaComponent } from './Mycomponents/languages/kannada/kannada.component';
import { TamilComponent } from './Mycomponents/languages/tamil/tamil.component';
import { HindiComponent } from './Mycomponents/languages/hindi/hindi.component';
import { SubscriptionComponent } from './Mycomponents/subscription/subscription.component';
import { FeedbackComponent } from './Mycomponents/feedback/feedback.component';
import { PageComponent } from './Mycomponents/subscription/page/page.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, RouterLink, RouterLinkActive, FooterComponent, HomeComponent,LanguagesComponent,
      KannadaComponent,
      TamilComponent,
      HindiComponent,
      SubscriptionComponent,
      FeedbackComponent,
      PageComponent]
})
export class AppComponent {
  title = 'project';
}
