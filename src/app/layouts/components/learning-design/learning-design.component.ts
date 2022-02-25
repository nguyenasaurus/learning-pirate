import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
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

  processes = [
    {
      id: 1,
      title: 'The Analysis',
      desc: "<p>What needs to be learned vs what you think needs to be learned? Is it a skill? ability? behavior? knowledge? and how does it need to be transferred?</p><p>I'm going to take a deep dive with you and come out with a clear picture of what learning needs to be achieved and how we're going to achieve that.</p>",
    },
    {
      id: 2,
      title: 'The Map',
      desc: '<p>A high-level outline of the components of the learning journey which begins to identify and narrow down the incorporation of methodologies, systems integrations, human capital, technology, and any additional components that are unique to your organization.</p>',
    },
    {
      id: 3,
      title: 'The Design',
      desc: '<p>Time to create the micro-components that will deliver learning to the brain for optimized memory encoding and retrieval.</p> <p>Strategically designed with science to optimally engage the brain and help encode learning into long-term memory, exactly where we want it to be.</p>',
    },
    {
      id: 4,
      title: 'Time to Learn',
      desc: '<p>A great design, especially one designed with science, can only achieve results when it is clearly understood and executed with precision.</p> <p>I will take you through the design, methodologies, and critical areas to monitor to ensure that you have a successful rollout and more importantly successful learning.</p>',
    },
  ];

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
  }

  ngOnInit(): void {}
}
