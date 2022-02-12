import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { StreamState } from 'src/app/interfaces/stream-state';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit {
  podcasts = [
    {
      title: 'The Days of Change:',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174.png',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      title: 'CanvassHR:',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-1.png',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    },
    {
      title: 'Uncancelled and Unplugged:',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-2.png',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    },
    {
      title: 'One Degree Shift: Spotify',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-3.png',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      title: 'One Degree Shift: Apple Music',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-4.png',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    },
    {
      title: 'The Catalyst:',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-5.png',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    },
    {
      title: 'The Days of Change:',
      subtitle: 'Episode 02: Making waves in the industry',
      author: 'TJ Wow Seminar',
      duration: '05:20',
      date: '03 Sept. 2021',
      icon: '../../../../assets/images/podcast/Rectangle 174-6.png',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    },
  ];

  nowPlaying = {
    title: 'The Days of Change:',
    subtitle: 'Episode 02: Making waves in the industry',
    author: 'TJ Wow Seminar',
    duration: '05:20',
    date: '03 Sept. 2021',
    icon: '../../../../assets/images/podcast/Rectangle 174.png',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  };

  currentIndex: any;
  state!: StreamState;
  currentFile: any = {};

  value: number = 0;
  currentHms = '00:00:00';
  destinationHms = '00:00:00';

  constructor(private audioService: AudioService) {
    // listen to stream state
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  ngOnInit(): void {
    this.currentFile.file = this.podcasts[0];
    this.currentFile.index = 0;

    this.audioService.stop();
    this.playStream(this.currentFile.file.url);
  }

  // Compute percentage played
  getPercentagePlayed(currentTime: any, destinationTime: any) {
    //hms = Hour Minutes Seconds
    this.currentHms = currentTime;
    this.destinationHms = destinationTime;

    // split it at the colons
    let c = this.currentHms.split(':');
    let d = this.destinationHms.split(':');

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    let cSeconds = +c[0] * 60 * 60 + +c[1] * 60 + +c[2];
    let dSeconds = +d[0] * 60 * 60 + +d[1] * 60 + +d[2];

    let val = Math.round((cSeconds / dSeconds) * 100);
    this.value = val;
  }

  playStream(url: any) {
    this.audioService.playStream(url).subscribe((events) => {
      // listening for fun here
    });
  }

  openFile(file: any, index: any) {
    this.currentIndex = index;

    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
    this.currentIndex = null;
  }

  play(index: any) {
    this.audioService.play();
    this.currentIndex = index;
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.podcasts[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.podcasts[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.podcasts.length - 1;
  }

  togglePlay() {
    $('.play-pause').on('click', function () {
      $('.play-pause').removeClass('active');
      $(this).addClass('active');
    });
  }
}
