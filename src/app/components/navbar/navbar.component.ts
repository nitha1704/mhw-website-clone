import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  timer: any;
  offsetY: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.showFirstAnimation();
  }

  menuActive(navbar: any) {
    clearTimeout(this.timer);

    const body: any = document.body;
    const allMenu = document.querySelectorAll('.navbar-menu .content li');
    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')) {
      this.offsetY = pageYOffset;
      body.classList.add('fixed');
      body.style.top = `-${this.offsetY}px`;

      this.timer = setTimeout(() => {
        allMenu.forEach((item: any, index) => {
          item.style.animation = `menuFade ${(index + 1.5) * 0.3}s`;
          item.style.animationFillMode = 'forwards';
        });
      }, 800);
    } else {
      allMenu.forEach((item: any) => {
        item.removeAttribute('style');
      });
      body.classList.remove('fixed');
      window.scrollTo(0, this.offsetY);
    }
  }

  showFirstAnimation() {
    setTimeout(() => {
      const navItem: any = document.querySelector('nav .wrapper');
      navItem.style.animation = `showNavItem 0.5s`;
      navItem.style.animationFillMode = 'forwards';
    }, 1500);
  }
}
