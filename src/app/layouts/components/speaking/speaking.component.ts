import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.scss'],
})
export class SpeakingComponent implements OnInit {
  title = 'Speaking';

  breadcrumbTitle =
    '<div class="bc-title"><h3 class="white-color">Ready to ignite the brains of <span>your audience?</span></h3></div>';

  testimonials = [
    {
      id: 1,
      title: 'Toronto Change Days',
      event: 'conference',
      desc: '<p>That was truly one of the most unique conference sessions I have ever participated in. I felt like a tourist on a gallery walk through our amazing brains. Thank you Lauren, for a such a memorable session!</p>',
      icon: '../../../../assets/images/speaking/Image 11.png',
    },
    {
      id: 2,
      title: 'Spark the Change Conference',
      event: 'conference',
      desc: '<p>Lauren’s session brought to light some amazing truths and misconceptions we’ve all had around learning. I appreciated how she tied in learning as a legacy and the ways we could start implementing a legacy into our organization. Great takeaways.</p>',
      icon: '../../../../assets/images/speaking/Image 12.png',
    },
    {
      id: 3,
      title: 'ACMP Global Conference',
      event: 'conference',
      desc: '<p>Fascinating topic and extremely engaging discussion! One of my favorites. Helpful foundation in how people learn.</p>',
      icon: '../../../../assets/images/speaking/Image 13.png',
    },
  ];

  audiences = [
    'Discover why focus and attention could be your best resource to facilitate unlearning and create long term change.',
    'Understand the order in which we bring things from the subconscious to the conscious to produce change.',
    'Be given some simple methods you can implement to monitor and measure if the behavioral and skill changes you desire are actually happening.',
  ];

  audienceDiscover = [
    'How to train our brains to evolve our beliefs and behaviors and become better learners (and humans).',
    'Practices and applications to shift our learning habits.',
    'How the brain changes and grows when we learn and create memories',
  ];

  interactive = [
    'Take a journey into the brain making some stops at some pretty cool areas which regulate things like our memory, emotions, habits and so much more.',
    'See how the brain communicates and the physical process of learning and forming memories.',
    'Leave with strategic tips to increase your ability to learn more effectively and optimally',
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}
}
