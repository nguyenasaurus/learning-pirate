import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  title = 'Media';

  menu = [
    { title: 'Articles', id: 1 },
    { title: 'Podcasts', id: 2 },
    { title: 'Conferences', id: 3 },
  ];
  activeMenuId = 1;

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}

  changeMedia(item: any) {
    this.activeMenuId = item.id;
  }
}
