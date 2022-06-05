import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'mhw-media',
  templateUrl: './mhw-media.component.html',
  styleUrls: ['./mhw-media.component.sass'],
})
export class MhwMediaComponent implements OnInit {
  mediaList = [
    {
      thumbnail: '/assets/images/mhw-media/collabo_movie.jpg',
      text: '"Monster Hunter" Movie Collaboration Trailer',
    },
    {
      thumbnail: '/assets/images/mhw-media/update_05_2.jpg',
      text: 'Title Update 5 Teaser Trailer',
    },
    {
      thumbnail: '/assets/images/mhw-media/update_05.jpg',
      text: 'Fatalis Trailer',
    },
    {
      thumbnail: '/assets/images/mhw-media/dev_final_en.jpg',
      text: 'Developer Diary 7 - The Final Stand',
    },
    {
      thumbnail: '/assets/images/mhw-media/update_04.jpg',
      text: 'Alatreon Introductory Trailer',
    },
    {
      thumbnail: '/assets/images/mhw-media/update_03.jpg',
      text: 'Variant Monster Intro Trailers',
    },
    {
      thumbnail: '/assets/images/mhw-media/update_02.jpg',
      text: 'Stygian Zinogre Introductory Trailer',
    },
    {
      thumbnail: '/assets/images/mhw-media/promo_16.jpg',
      text: 'Horizon Zero Dawn™: The Frozen Wilds" Collaboration Trailer',
    },
    {
      thumbnail: '/assets/images/mhw-media/promo_19.jpg',
      text: 'Raccoon City Collaboration Trailer',
    },
    {
      thumbnail: '/assets/images/mhw-media/promo_17.jpg',
      text: 'Design Contest Winners Trailer: Hunter Weapon',
    },
    {
      thumbnail: '/assets/images/mhw-media/promo_18.jpg',
      text: 'Design Contest Winners Trailer: Palico Weapon & Armor',
    },
    {
      thumbnail: '/assets/images/mhw-media/promo_14.jpg',
      text: 'Trailer #5',
    },
  ];
  mhwMediaConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    navigation: {
      prevEl: '.prev-icon-mhw-media',
      nextEl: '.next-icon-mhw-media',
    },
    pagination: { el: '.wrapper-pagination-mhw-media', clickable: true },
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
