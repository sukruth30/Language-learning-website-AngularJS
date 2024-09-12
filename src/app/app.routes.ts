import { Routes } from '@angular/router';
import { HomeComponent } from './Mycomponents/home/home.component';
import { NavbarComponent } from './Mycomponents/navbar/navbar.component';
import { LanguagesComponent } from './Mycomponents/languages/languages.component';
import { FooterComponent } from './Mycomponents/footer/footer.component';
import { KannadaComponent } from './Mycomponents/languages/kannada/kannada.component';
import { TamilComponent } from './Mycomponents/languages/tamil/tamil.component';
import { HindiComponent } from './Mycomponents/languages/hindi/hindi.component';
import { SubscriptionComponent } from './Mycomponents/subscription/subscription.component';
import { FeedbackComponent } from './Mycomponents/feedback/feedback.component';
import { PageComponent } from './Mycomponents/subscription/page/page.component';

export const routes: Routes = [{path: 'home', component: HomeComponent},
{path: 'navbar', component: NavbarComponent},
{path: 'Languages', component: LanguagesComponent},
{path: 'footer', component: FooterComponent},
{path: 'Languages/kannada', component: KannadaComponent},
{path: 'Languages/tamil', component: TamilComponent},
{path: 'Languages/hindi', component: HindiComponent},
{path: 'subscription', component: SubscriptionComponent},
{path: 'feedback', component: FeedbackComponent},
{path: 'subscription/page', component:PageComponent}];
