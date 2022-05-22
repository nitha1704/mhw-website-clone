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
    setTimeout(() => {
      const updateNew: any = document.querySelector('.update-new .wrapper');
      updateNew.style.animation = `showUpdateNewItem 0.5s`;
      updateNew.style.animationFillMode = 'forwards';
    }, 1500);
  }
}
