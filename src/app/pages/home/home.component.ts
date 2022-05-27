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
    this.scrollToViewport();
  }

  startAnimation() {
    const bgVideo: any = document.querySelector('.bg-video');
    const introVideo: any = document.querySelector('.bg-video video');
    setTimeout(() => {
      bgVideo.classList.add('show');
      introVideo.play();
    }, 3000);
  }

  isInViewPort(elem: any, type: any = 'normal') {
    let elemTop = elem.offsetTop;
    let elemBottom = elem.offsetTop + elem.offsetHeight;
    let scrollTop = window.pageYOffset;
    let scrollBottom = window.pageYOffset + window.innerHeight;

    if (type === 'section') {
      return scrollBottom > elemTop + 500;
    }
    return scrollBottom > elemTop + 200;
  }

  typeWriter(type: string, messageToShow: any, elem: any, currentPos: any = 0) {
    elem.classList.add('in-view');
    if (currentPos < messageToShow.length) {
      let node = document.createElement('span');
      let br = document.createElement('br');

      if (type === 'normal') {
        node.style.animation = 'fadeIn 1s forwards';
      }
      if (type === 'reverse') {
        node.style.animation = 'fadeInReverse 1s forwards';
      }

      let textNode: any = document.createTextNode(
        messageToShow.charAt(currentPos)
      );

      node.appendChild(textNode);

      if (messageToShow.charAt(currentPos) === '/') {
        elem.appendChild(br);
      } else {
        elem.appendChild(node);
      }
      currentPos++;

      setTimeout(() => {
        this.typeWriter(type, messageToShow, elem, currentPos);
      }, 20);
    }
    // else {
    //   setTimeout(() => {
    //     elem.innerHTML = messageToShow;
    //   }, 2000);
    // }
  }

  scrollToViewport() {
    let sectionElement = document.querySelectorAll('.section-element');
    let titleElement = document.querySelectorAll('.section-element .title');
    let subtitleElement = document.querySelectorAll(
      '.section-element .subtitle'
    );
    let paragraphElement = document.querySelectorAll(
      '.section-element .paragraph'
    );

    // Section add relative position
    window.addEventListener('scroll', () => {
      sectionElement.forEach((elem: any) => {
        if (
          this.isInViewPort(elem, 'section') &&
          !elem.classList.contains('in-view')
        ) {
          elem.style.position = 'relative';
        }
      });

      // Title Fade Effect
      // titleElement.forEach((elem: any) => {
      //   let textData: any = elem.getAttribute('text-data');
      //   if (this.isInViewPort(elem) && !elem.classList.contains('in-view')) {
      //     this.typeWriter('normal', textData, elem);
      //   }
      // });

      // Subtitle Typewriter Effect
      subtitleElement.forEach((elem: any) => {
        let textData: any = elem.getAttribute('text-data');
        if (this.isInViewPort(elem) && !elem.classList.contains('in-view')) {
          this.typeWriter('reverse', textData, elem);
        }
      });

      // Paragraph Typewriter Effect
      paragraphElement.forEach((elem: any) => {
        let textData: any = elem.getAttribute('text-data');
        if (this.isInViewPort(elem) && !elem.classList.contains('in-view')) {
          this.typeWriter('normal', textData, elem);
        }
      });
    });
  }
}
