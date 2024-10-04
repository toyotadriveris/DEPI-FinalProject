import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  eleTarget: any = '';

  getPostion () {
    let textContainer = document.querySelector('.txtContainer')
    let elementref = document.querySelector('.landingImg');
    let elementTop = elementref?.getBoundingClientRect().height;
    
    this.eleTarget = elementTop + '50'
    console.log(this.eleTarget);

  }

}
