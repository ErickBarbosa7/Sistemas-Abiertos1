import { Component,signal } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero-page.component.html',
    styleUrls: []
})
export class HeroPageComponent {

    name = signal<string> ('ironman');
    age = signal<number>(45);

    getHeroDescription(): string {
        return `Description: ${this.name()} - ${this.age()} años`;
    }

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(30);
    }

    changeAge(): void {
        this.age.set(60);
    }
    resetForm(): void {
        this.name.set('ironman'); 
        this.age.set(45);
    }
}