import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-feedback',
    standalone: true,
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.css',
    imports: [FooterComponent,RouterLink,RouterLinkActive]
})
export class FeedbackComponent {

}
