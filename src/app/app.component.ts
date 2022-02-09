import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Learning Pirate';

  constructor() {}

  ngOnInit(): void {
    $(window).on('load', function () {
      $('.pre-loader').delay(500).fadeOut('slow');
      $('body').removeClass('hid');
    });

    $(window).on('scroll', function (e) {
      var $el = $('.navbar');
      var isPositionFixed = $el.css('position') == 'fixed';
      if ($(this).scrollTop()! > 60 && !isPositionFixed) {
        $el.addClass('sticky');
        $el.css({
          background: '#000000',
          position: 'fixed',
          top: '0px',
          width: '100%',
        });
      }
      if ($(this).scrollTop()! < 60 && isPositionFixed) {
        $el.removeClass('sticky');
        $el.css({
          background: 'transparent',
          position: 'static',
          top: '0px',
        });
      }
    });

    $(function () {
      // // Back to top
      // $('.go-top').on('click', function () {
      //   $('html, body').animate(
      //     {
      //       scrollTop: '0',
      //     },
      //     1200
      //   );
      // });

      var $hamburger = $('.hamburger');
      var $navMenu = $('.nav-menu');
      var $navLink = $('.nav-link');

      $hamburger.on('click', () => {
        $hamburger.toggleClass('active');
        $navMenu.toggleClass('active');
      });

      $navLink.on('click', () => {
        $hamburger.removeClass('active');
        $navMenu.removeClass('active');
      });
    });
  }
}
