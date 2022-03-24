import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  LdProcesses,
  LearningNeedSectionOne,
  LearningNeedSectionTwo,
} from 'src/app/interfaces/learning-design';
import { LearningDesignService } from 'src/app/services/learning-design.service';

@Component({
  selector: 'app-learning-design',
  templateUrl: './learning-design.component.html',
  styleUrls: ['./learning-design.component.scss'],
})
export class LearningDesignComponent implements OnInit {
  title = 'Learning Design';

  breadcrumbTitle =
    '<div class="bc-title"><h3 class="white-color">Design learning that works with the process of the brain. <span>Not against it.</span></h3></div>';

  processes: LdProcesses[] = [];

  sectionOne: LearningNeedSectionOne = {};
  sectionOneId = 'sectionOne';
  canEditSectionOne = false;

  sectionTwo: LearningNeedSectionTwo = {};
  sectionTwoId = 'sectionTwo';
  canEditSectionTwo = false;
  chosenItemTwo: any;

  constructor(
    private titleService: Title,
    private learningDesignService: LearningDesignService
  ) {
    this.titleService.setTitle(this.title);

    this.learningDesignService
      .getById(this.sectionOneId)
      .subscribe((res: LearningNeedSectionOne) => {
        this.sectionOne = res;
      });

    this.learningDesignService
      .getById(this.sectionTwoId)
      .subscribe((res: LearningNeedSectionTwo) => {
        this.sectionTwo = res;
      });

    this.learningDesignService
      .getProcesses()
      .subscribe((res: LdProcesses[]) => {
        this.processes = res;
      });
  }

  ngOnInit(): void {}
}
