import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-subscription',
    standalone: true,
    templateUrl: './subscription.component.html',
    styleUrl: './subscription.component.css',
    imports: [FooterComponent,RouterLink,RouterLinkActive]
})
export class SubscriptionComponent {

}
