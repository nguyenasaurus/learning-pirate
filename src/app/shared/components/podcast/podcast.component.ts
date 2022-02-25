import { Component, OnInit } from '@angular/core';
import { Podcast } from 'src/app/interfaces/podcast';
import { StreamState } from 'src/app/interfaces/stream-state';
import { AudioService } from 'src/app/services/audio.service';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit {
  // podcastss = [
  //   {
  //     title: 'Come my way',
  //     subtitle: 'Episode 02: Making waves in the industry',
  //     author: 'TJ Wow Seminar',
  //     duration: '05:20',
  //     date: '03 Sept. 2021',
  //     icon: '../../../../assets/images/podcast/Rectangle 174-6.png',
  //     url: 'https://naijaloaded.store/wp-content/uploads/2021/10/Wande-Coal-Come-My-Way.mp3',
  //   },
  // ];

  currentIndex: any;
  state!: StreamState;
  currentFile: any = {};

  value: number = 0;
  currentHms = '00:00:00';
  destinationHms = '00:00:00';

  repeatThis = false;
  stopThis = false;
  shuffleThis = false;

  podcasts: Podcast[] = [];

  constructor(
    private audioService: AudioService,
    private podcastService: PodcastService
  ) {
    // listen to stream state
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });

    this.podcastService.getPodcasts().subscribe((res: Podcast[]) => {
      this.podcasts = res;
      this.currentFile.file = this.podcasts[0];
      this.currentFile.index = 0;
    });
  }

  ngOnInit(): void {
    // this.currentFile.file = this.podcastss[0];
    // this.currentFile.index = 0;

    this.audioService.stop();
    // this.playStream(this.currentFile.file.url);
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

    // if (this.value > 99 && this.repeatThis) {
    //   console.log('R');

    //   console.log(this.value);
    //   this.audioService.stop();
    //   this.playStream(this.currentFile.file.url);
    // } else if (this.value > 100 && !this.repeatThis) {
    //   console.log('N');

    //   this.next();
    // } else if (this.shuffleThis) {
    //   console.log('S');

    //   this.shuffle();
    // }
  }

  playStream(url: any) {
    this.audioService.playStream(url).subscribe((events) => {
      // listening for fun here
    });
  }

  openFile(file: any, index: any) {
    let chosenFile;
    if (this.repeatThis) {
      chosenFile = this.currentFile.file;
    } else {
      chosenFile = file;
      this.currentIndex = index;

      this.currentFile = { index, file };
    }
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
    this.currentIndex = null;
  }

  play(index: any) {
    this.stopThis = false;
    this.audioService.play();
    this.currentIndex = index;
  }

  stop() {
    this.stopThis = true;
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

  shuffle() {
    this.shuffleThis = true;
    let newIndex = Math.floor(Math.random() * this.podcasts.length);
    let chosen = this.podcasts[newIndex];

    this.openFile(chosen, newIndex);
  }
}
