import { Component, OnInit } from '@angular/core';
import { Conference } from 'src/app/interfaces/conference';
import { ConferenceService } from 'src/app/services/conference.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss'],
})
export class ConferenceComponent implements OnInit {
  conferences: Conference[] = [];

  constructor(private conferenceService: ConferenceService) {
    this.conferenceService.getConferences().subscribe((res: Conference[]) => {
      this.conferences = res;
    });
  }

  ngOnInit(): void {}
}
