import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
      desc: '<p>What Needs To Be Learned Vs What You Think Needs To Be Learned? Is It A Skill? Ability? Behavior? Knowledge? And How Does It Need To Be Transferred?</p> <p>I’m Going To Take A Deep Dive With You And Come Out With A Clear Picture Of What Learning Needs To Be Achieved And How We’re Going To Achieve That.</p>',
    },
    {
      id: 2,
      title: 'The Map',
      desc: '<p>A High-Level Outline Of The Components Of The Learning Journey Which Begins To Identify And Narrow Down The Incorporation Of Methodologies, Systems Integrations, Human Capital, Technology, And Any Additional Components That Are Unique To Your Organization.</p>',
    },
    {
      id: 3,
      title: 'The Design',
      desc: '<p>Time To Create The Micro-Components That Will Deliver Learning To The Brain For Optimized Memory Encoding And Retrieval.</p> <p>Strategically Designed With Science To Optimally Engage The Brain And Help Encode Learning Into Long-Term Memory, Exactly Where We Want It To Be.</p>',
    },
    {
      id: 4,
      title: 'Time to Learn',
      desc: '<p>A Great Design, Especially One Designed With Science, Can Only Achieve Results When It Is Clearly Understood And Executed With Precision.</p> <p>I Will Take You Through The Design, Methodologies, And Critical Areas To Monitor To Ensure That You Have A Successful Rollout And More Importantly Successful Learning.</p>',
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}
}
