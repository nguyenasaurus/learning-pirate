import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import {
  SpeakingSectionFour,
  SpeakingSectionOne,
  SpeakingSectionThree,
  SpeakingSectionTwo,
} from 'src/app/interfaces/speaking';
import { SpeakingService } from 'src/app/services/speaking.service';

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

  slides = [
    {
      url: '../../../../assets/images/speaking/favour.png',
      title: 'iDesignX Live 2021',
      date: 'February 24 - 25, 2021',
      subtitle: 'Conference',
      desc: '<p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.</p> </p>Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy.</p>',
    },
    {
      url: './../../../assets/images/speaking/Graphic.png',
      title: 'iDesignX Live 2021',
      date: 'February 24 - 25, 2021',
      subtitle: 'Conference',
      desc: '<p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.</p> </p>Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy.</p>',
    },
    // {
    //   url: '../../../../assets/images/speaking/idx.png',
    //   title: 'iDesignX Live 2021',
    //   date: 'February 24 - 25, 2021',
    //   subtitle: 'Conference',
    //   desc: '<p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.</p> </p>Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy.</p>',
    // },
    {
      url: '../../../../assets/images/speaking/Spark.png',
      title: 'iDesignX Live 2021',
      date: 'February 24 - 25, 2021',
      subtitle: 'Conference',
      desc: '<p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.</p> </p>Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy.</p>',
    },
    {
      url: '../../../../assets/images/speaking/Spark2.png',
      title: 'iDesignX Live 2021',
      date: 'February 24 - 25, 2021',
      subtitle: 'Conference',
      desc: '<p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.</p> </p>Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy.</p>',
    },
    {
      url: '../../../../assets/images/speaking/Spark2.png',
      title: 'iDesignX Live 2021',
      date: 'February 24 - 25, 2021',
      subtitle: 'Conference',
      desc: '<p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.</p> </p>Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy.</p>',
    },
    {
      url: '../../../../assets/images/speaking/ss.png',
      title: 'iDesignX Live 2021',
      date: 'February 24 - 25, 2021',
      subtitle: 'Conference',
      desc: '<p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.</p> </p>Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy.</p>',
    },
  ];

  sectionOne: SpeakingSectionOne = {};
  sectionOneId = 'seactionOne';
  canEditSectionOne = false;

  sectionTwo: SpeakingSectionTwo = {};
  sectionTwoId = 'sectionTwo';
  canEditSectionTwo = false;
  chosenItemTwo: any;

  sectionThree: SpeakingSectionThree = {};
  sectionThreeId = 'secctionThree';
  canEditSectionThree = false;
  chosenItemThree: any;

  sectionFour: SpeakingSectionFour = {};
  sectionFourId = 'sectionFour';
  canEditSectionFour = false;
  chosenItemFour: any;

  constructor(
    private titleService: Title,
    private speakingService: SpeakingService
  ) {
    this.titleService.setTitle(this.title);

    this.speakingService
      .getById(this.sectionOneId)
      .subscribe((res: SpeakingSectionOne) => {
        this.sectionOne = res;
      });

    this.speakingService
      .getById(this.sectionTwoId)
      .subscribe((res: SpeakingSectionTwo) => {
        this.sectionTwo = res;
      });

    this.speakingService
      .getById(this.sectionThreeId)
      .subscribe((res: SpeakingSectionThree) => {
        this.sectionThree = res;
      });

    this.speakingService
      .getById(this.sectionFourId)
      .subscribe((res: SpeakingSectionFour) => {
        this.sectionFour = res;
      });
  }

  ngOnInit(): void {}

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
  };

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {}

  breakpoint(e: any) {}

  afterChange(e: any) {}

  beforeChange(e: any) {}
}
