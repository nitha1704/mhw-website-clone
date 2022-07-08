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
    }, 1000);
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

    //Wrapper Slider
    let wrapperSlider = document.querySelectorAll('.wrapper-slider');

    //Wrapper Mhw Button
    let wrapperMhwButton = document.querySelectorAll('.wrapper-mhw-button');

    // Introduction
    let introductionSection: any = document.querySelector('#introduction');
    let introductionBgCharacter: any = document.querySelector(
      '#introduction .bg-character'
    );
    let introductionParagraph: any = document.querySelector(
      '#introduction .paragraph'
    );

    // Mhw title
    let mhwTitle: any = document.querySelectorAll('.mhw-title');

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
      // Wrapper Slider
      wrapperSlider.forEach((elem: any) => {
        if (this.isInViewPort(elem) && !elem.classList.contains('in-view')) {
          elem.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });

      // Wrapper Mhw Button
      wrapperMhwButton.forEach((elem: any) => {
        if (this.isInViewPort(elem) && !elem.classList.contains('in-view')) {
          elem.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });

      // New elements
      mhwTitle.forEach((elem: any) => {
        if (this.isInViewPort(elem) && !elem.classList.contains('in-view')) {
          elem.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });

      // Introduction Section
      if (
        this.isInViewPort(introductionSection) &&
        !introductionSection.classList.contains('in-view')
      ) {
        introductionSection.classList.add('in-view');
        introductionSection.style.position = 'relative';
        introductionBgCharacter.style.display = 'block';
        introductionParagraph.style.display = 'block';
      }

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
