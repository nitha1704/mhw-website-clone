import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.startAnimation();
  }

  startAnimation() {
    const bgVideo: any = document.querySelector('.bg-video');
    const introVideo: any = document.querySelector('.bg-video video');
    setTimeout(() => {
      bgVideo.classList.add('show');
      introVideo.play();
    }, 3000);
  }
}
