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
    const homeBgVideo: any = document.querySelector('#home .bg-video');
    const homeIntroVideo: any = document.querySelector('#home .bg-video video');
    setTimeout(() => {
      homeBgVideo.classList.add('show');
      homeIntroVideo.play();
    }, 3000);

    // const allBgVideo: any = document.querySelectorAll('.bg-video');
    // const allIntroVideo: any = document.querySelectorAll('.bg-video video');
    // setTimeout(() => {
    //   allBgVideo.forEach((bgVideo: any) => {
    //     bgVideo.classList.add('show');
    //   });

    //   allIntroVideo.forEach((introVideo: any) => {
    //     introVideo.play();
    //   });
    // }, 3000);
  }

  isInViewPort(elem: any, type: any = 'normal') {
    let elemTop = elem.offsetTop;
    let elemBottom = elem.offsetTop + elem.offsetHeight;
    let scrollTop = window.pageYOffset;
    let scrollBottom = window.pageYOffset + window.innerHeight;

    if (type === 'section') {
      return scrollBottom > elemBottom - 30;
    }
    if (type === 'paragraph') {
      return scrollBottom > elemTop + 200;
    }
    if (type === 'mhw-button') {
      return scrollBottom > elemTop + 50;
    }
    return scrollBottom > elemTop;
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
    let mhwButton2Element = document.querySelectorAll(
      '.section-element .mhw-button2'
    );

    // Ecosystem
    let ecosystemSection: any = document.querySelector('#ecosystem');
    let ecosystemBgVideo: any = document.querySelector('#ecosystem .bg-video');
    let ecosystemIntroVideo: any = document.querySelector(
      '#ecosystem .bg-video video'
    );

    // Hunting
    let huntingSection: any = document.querySelector('#hunting');
    let huntingBgVideo: any = document.querySelector('#hunting .bg-video');
    let huntingIntroVideo: any = document.querySelector(
      '#hunting .bg-video video'
    );

    window.addEventListener('scroll', () => {
      // Play Ecosystem video background
      if (
        this.isInViewPort(ecosystemSection, 'section') &&
        !ecosystemSection.classList.contains('in-view')
      ) {
        setTimeout(() => {
          ecosystemSection.style.position = 'relative';
          ecosystemBgVideo.classList.add('show');
          ecosystemIntroVideo.play();
        }, 1000);
      }

      // Play Hunting video background
      if (
        this.isInViewPort(huntingSection, 'section') &&
        !huntingSection.classList.contains('in-view')
      ) {
        setTimeout(() => {
          huntingSection.style.position = 'relative';
          huntingBgVideo.classList.add('show');
          huntingIntroVideo.play();
        }, 1000);
      }

      //Title Fade Effect
      titleElement.forEach((elem: any) => {
        if (this.isInViewPort(elem) && !elem.classList.contains('in-view')) {
          elem.classList.add('fadeInLeftTitle');
        }
      });

      // Subtitle Typewriter Effect
      subtitleElement.forEach((elem: any) => {
        let textData: any = elem.getAttribute('text-data');
        if (
          this.isInViewPort(elem, 'paragraph') &&
          !elem.classList.contains('in-view')
        ) {
          this.typeWriter('reverse', textData, elem);
        }
      });

      // Paragraph Typewriter Effect
      paragraphElement.forEach((elem: any) => {
        let textData: any = elem.getAttribute('text-data');
        if (
          this.isInViewPort(elem, 'paragraph') &&
          !elem.classList.contains('in-view')
        ) {
          this.typeWriter('normal', textData, elem);
        }
      });

      // mhwButton2  Typewriter Effect
      mhwButton2Element.forEach((elem: any) => {
        if (
          this.isInViewPort(elem, 'mhw-button') &&
          !elem.classList.contains('in-view')
        ) {
          elem.classList.add('in-view');
          elem.style.animation = 'fadeIn 1s forwards';
        }
      });
    });
  }
}
