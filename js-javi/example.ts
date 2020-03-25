// child.component.ts
import { Component, EventEmitter, Input, Output } from ‘@angular/core’;
@Component({
    selector: ‘app-vote’,
    template: `
    <p>Hello, {{name}}</p>
    <button (click)=”vote(true)”>Agree</button>
    <button (click)=”vote(false)”>Disagree</button>
    `
})
export class VoterComponent {
    @Input() name: string;
    // Obtiene el evento y lo pasará al componente padre
    @Output() voted = new EventEmitter<boolean>();
    vote(agreed: boolean) {
        this.voted.emit(agreed)
    }
};
// parent.component.ts
import { Component } from ‘@angular/core’;
@Component({
    selector: ‘app-vote-taker’,
    template: `
        <p>Vote Counter</p>
        <h3>Agree: {{agreed}}, Disagree: {{disagreed}}
        <app-vote *ngFor=”let voter of voters”> 
        [name]=”voter”
        // (voted) is the child component event
        // onVoted is the function that is going to receive the event in the parent component
        (voted)=”onVoted($event)”
        </app-vote>
    `
})
export class VoteTakerComponent {
    agreed = 0;
    disagreed = 0;
    voters = [‘Javier’, ‘Gise’, ‘Hector’, ‘Alexis’];
    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }
};












// child.component.ts
import { Component, EventEmitter, Input, Output } from ‘@angular/core’;
@Component({
    selector: ‘app-vote’,
    template: `<p>Hello, {{name}}</p>
    <button (click)=”vote(true)”>Agree</button>
`
<button (click)=”vote(false)”>Disagree</button>
})
export class VoterComponent {
@Input() name: string;
@Output() voted = new EventEmitter<boolean>();
vote(agreed: boolean) { this.voted.emit(agreed)
}
};



// parent.component.ts
import { Component } from ‘@angular/core’;
@Component({
selector: ‘app-vote-taker’, template: `
<p>Vote Counter</p>
<h3>Agree: {{agreed}}, Disagree: {{disagreed}}
// Creamos una referencia hacia el componente llamada #myRef <app-voter #myRef>
[name]=”voter”
(voted)=”onVoted($event)”
</app-voter>
// Llamamos las propiedades de la referencia
Agreed: {{myRef.agreed}}, Disagreed {{myRef.disagreed}}
`
})
export class VoteTakerComponent {
agreed = 0; disagreed = 0;
onVoted(agreed: boolean) {
agreed ? this.agreed++ : this.disagreed++;
} };





