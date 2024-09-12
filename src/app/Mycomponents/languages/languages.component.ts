import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-languages',
    standalone: true,
    templateUrl: './languages.component.html',
    styleUrl: './languages.component.css',
    imports: [FooterComponent,RouterLink,RouterLinkActive]
})
export class LanguagesComponent {

}
