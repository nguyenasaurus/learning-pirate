import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit {
  play = false;

  podcasts = [
    {
      title: 'The Days of Change:',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174.png',
    },
    {
      title: 'CanvassHR:',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-1.png',
    },
    {
      title: 'Uncancelled and Unplugged:',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-2.png',
    },
    {
      title: 'One Degree Shift: Spotify',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-3.png',
    },
    {
      title: 'One Degree Shift: Apple Music',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-4.png',
    },
    {
      title: 'The Catalyst:',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-5.png',
    },
    {
      title: 'The Days of Change:',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-6.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  playPause() {
    this.play = !this.play;

    if (this.play) {
      console.log(this.play);

      let audio = new Audio();
      audio.src =
        '../../../../assets/podcast/The Blessing with Kari Jobe Cody Carnes Live From Elevation Ballantyne Elevation Worship.mp3';
      audio.load();
      audio.play();
    } else {
      console.log(this.play);

      let audio = new Audio();
      audio.src =
        '../../../../assets/podcast/The Blessing with Kari Jobe Cody Carnes Live From Elevation Ballantyne Elevation Worship.mp3';
      audio.load();
      audio.pause();
    }
  }
}
