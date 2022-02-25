import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { HomeSectionFour, Testimony } from 'src/app/interfaces/home';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  // testimonies = [
  //   {
  //     id: 1,
  //     icon: '../../../../assets/images/iconSmall.png',
  //     name: 'Matt Burns',
  //     title: 'Founder, BentoHR',
  //     testimony:
  //       '“Learning Needs Lauren Waldman. Her Willingness To Challenge The Status Quo; Pairing Neuroscience With An Evidence-Based Approach To Enterprise Learning…”',
  //   },
  //   {
  //     id: 2,
  //     icon: '../../../../assets/images/iconSmall.png',
  //     name: 'Jane Doe',
  //     title: 'C.E.O, Orange Group',
  //     testimony:
  //       '“Learning Needs Lauren Waldman. Her Willingness To Challenge The Status Quo; Pairing Neuroscience With An Evidence-Based Approach To Enterprise Learning…”',
  //   },
  //   {
  //     id: 3,
  //     icon: '../../../../assets/images/iconSmall.png',
  //     name: 'Jude Omenka',
  //     title: 'COO, Etech Data Services',
  //     testimony:
  //       '“Learning Needs Lauren Waldman. Her Willingness To Challenge The Status Quo; Pairing Neuroscience With An Evidence-Based Approach To Enterprise Learning…”',
  //   },
  //   {
  //     id: 4,
  //     icon: '../../../../assets/images/iconSmall.png',
  //     name: 'Smith McBright',
  //     title: 'HR Manager, BentoHR',
  //     testimony:
  //       '“Learning Needs Lauren Waldman. Her Willingness To Challenge The Status Quo; Pairing Neuroscience With An Evidence-Based Approach To Enterprise Learning…”',
  //   },
  // ];

  activeTestimony: any;
  nextTestimony: any;
  nextTestimonyId: any;
  dataRefresher: any;

  visible = true;

  sectionFour: HomeSectionFour = {};
  sectionFourId = 'sectionFour';
  canEditSectionFour = false;
  chosenItemFour: any;

  testimonies: Testimony[] = [];

  constructor(private homeService: HomeService) {
    this.homeService
      .getById(this.sectionFourId)
      .subscribe((res: HomeSectionFour) => {
        this.sectionFour = res;
      });

    this.homeService.getTestimonies().subscribe((res: Testimony[]) => {
      this.testimonies = res;
    });
  }

  ngOnInit(): void {
    // this.activeTestimony = this.testimonies[0];
    // if (this.testimonies.length > 1) {
    //   this.nextTestimony = this.testimonies[1];
    // }
    this.refreshData();
  }

  // Fetch testimony every 3 seconds
  refreshData() {
    this.dataRefresher = setInterval(() => {
      // this.visible = false;
      this.nextTestimonyId = this.activeTestimony.id + 1;
      if (this.nextTestimonyId > this.testimonies.length) {
        this.activeTestimony = this.testimonies[0];
        if (this.testimonies.length > 1) {
          this.nextTestimony = this.testimonies[1];
        }
      } else {
        // this.nextSlide();
      }
      // this.visible = false;
      // this.nextSlide();
    }, 5000);
  }

  // nextSlide() {
  //   // this.visible = true;
  //   let testimony = this.testimonies.find(
  //     (el) => el.id == this.nextTestimonyId
  //   );
  //   this.activeTestimony = testimony;

  //   let id = this.nextTestimonyId + 1;
  //   if (id <= this.testimonies.length) {
  //     this.nextTestimony = this.testimonies.find((el) => el.id == id);
  //   } else {
  //     console.log('DONE');
  //     this.nextTestimony = this.testimonies[0];
  //   }

  //   // if (this.testimonies.length > 0) {
  //   //   this.testimonies.push(this.testimonies.shift()!);
  //   // }
  // }
}
