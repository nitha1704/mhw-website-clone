import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-new',
  templateUrl: './update-new.component.html',
  styleUrls: ['./update-new.component.sass'],
})
export class UpdateNewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.showFirstAnimation();
  }

  showFirstAnimation() {
    const updateNew: any = document.querySelector('.update-new .wrapper');
    setTimeout(() => {
      updateNew.style.animation = `showUpdateNewItem 0.8s`;
      updateNew.style.animationFillMode = 'forwards';
    }, 1500);

    if (window.matchMedia('(max-width: 1200px)')) {
      updateNew.style.opacity = 1;
    }
  }
}
