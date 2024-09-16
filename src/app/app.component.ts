import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText: string = lorem.sentence();  
  enteredText: string = '';        
  messageVisible: boolean = false; 
  isCorrect: boolean = false;  
  transitionVisible: boolean = false
  getInputValue(value: string) {
    this.enteredText = value;
  }

  compare(letter: string, enteredLetter: string): string {
    if (!enteredLetter) return ''; 
    return letter === enteredLetter ? 'text-green-500' : 'text-red-500';
  }


  
  checkInput() {
    this.isCorrect = this.randomText === this.enteredText;
    this.transitionVisible = true;
    this.messageVisible = true;

    setTimeout(() => {
      this.transitionVisible = false;
    },1000);

    setTimeout(() => {
      this.messageVisible = false;
    }, 2000); 
  }

}
