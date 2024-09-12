import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-page',
    standalone: true,
    templateUrl: './page.component.html',
    styleUrl: './page.component.css',
    imports: [FooterComponent,RouterLink,RouterLinkActive]
})
export class PageComponent {

}
