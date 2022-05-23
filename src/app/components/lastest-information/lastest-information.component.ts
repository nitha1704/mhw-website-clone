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
  selector: 'lastest-information',
  templateUrl: './lastest-information.component.html',
  styleUrls: ['./lastest-information.component.sass'],
})
export class LastestInformationComponent implements OnInit {
  lastestInformations = [
    {
      thumbnail: '/assets/images/thum_collabo-horizon.jpg',
      text: 'Round 2 event quest available for a limited time!',
    },
    {
      thumbnail: '/assets/images/thum_collabo-re2_icebone.jpg',
      text: 'Raccoon City Collaboration event quest available for a limited time!',
    },
    {
      thumbnail: '/assets/images/thum_contest.jpg',
      text: 'Craft the winning hunter weapon and Palico equipment designs from the Weapon Design Contest!',
    },
    {
      thumbnail: '/assets/images/thum_edit-voucher.jpg',
      text: 'One free "Character & Palico Edit Voucher" for Purchasers of Iceborne!',
    },
    {
      thumbnail: '/assets/images/thum_itempack.jpg',
      text: 'Free commemorative item pack will be available upon login for a limited time!',
    },
    {
      thumbnail: '/assets/images/thum_movie.jpg',
      text: 'New movie of monster hunter!',
    },
    {
      thumbnail: '/assets/images/thum_roadmap_en.jpg',
      text: 'Monster Hunter World: Iceborne Roadmap Renewal!',
    },
  ];
  configLastestInformations: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 500,
    navigation: { prevEl: '.prev-icon', nextEl: '.next-icon' },
    pagination: { clickable: true },
    loop: true,
  };

  constructor() {}

  ngOnInit(): void {}

  nextSlide() {
    console.log('hello');
  }
}
