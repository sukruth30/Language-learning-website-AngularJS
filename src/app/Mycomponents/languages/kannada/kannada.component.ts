import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-kannada',
    standalone: true,
    templateUrl: './kannada.component.html',
    styleUrl: './kannada.component.css',
    imports: [FooterComponent,RouterLink,RouterLinkActive]
})
export class KannadaComponent {

}
