import { Component, OnInit } from '@angular/core';
import data from './data.json';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hidden = true;

  animation: any = {};

  prevRandom = 1;
  data = data[this.prevRandom];


  next() {
    anime({
      targets: '#overlay',
      rotateY: '90deg',
      duration: this.hidden ? 0 : 1000,
      easing: 'easeInOutQuad'
    })
    setTimeout(() => {
      let newRandom;
      do {
        newRandom = Math.floor(Math.random() * data.length);
      } while (newRandom === this.prevRandom);
      this.prevRandom = newRandom;
      this.data = data[this.prevRandom];
      anime({
        targets: '#overlay',
        rotateY: '0deg',
        duration: 1000,
        easing: 'easeInOutQuad'
      });
      this.hidden = false;
    }, this.hidden ? 0 : 1000);
  }
}
