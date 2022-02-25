import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';

export interface CarouselModel {
  url?: string;
  title?: string;
  subtitle?: string;
  desc?: string;
  date?: string;
}

@Component({
  selector: 'app-event-carousel',
  templateUrl: './event-carousel.component.html',
  styleUrls: ['./event-carousel.component.scss'],
})
export class EventCarouselComponent implements OnInit, AfterViewInit {
  @Input() items?: CarouselModel[];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 5000;

  @ViewChild('carouselContainer', { static: true })
  carouselContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('carousel', { static: true })
  carousel?: ElementRef<HTMLDivElement>;

  baseZIndex = 50;
  scaleRation = 10;
  middleIndex: any;
  isAnimating: boolean = false;
  prevSlideFinished: boolean = false;

  selectedIndex = 3;

  constructor() {}

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  initCarousel() {
    if (this.carousel && this.carousel.nativeElement) {
      gsap.to(this.carousel.nativeElement.children, {
        duration: 0,
        top: '10%',
        left: '20%',
        transform: 'translate(-20% -20%)',
      });
      this.middleIndex = Math.ceil(
        this.carousel.nativeElement.childNodes.length / 2
      );
      const midElement =
        this.carousel.nativeElement.children[this.middleIndex - 1];
      gsap.to(midElement, {
        duration: 0,
        zIndex: this.baseZIndex,
        width: '650px',
      });
      this.positionLeftNodes(this.middleIndex);
      this.positionRightNodes(this.middleIndex);
    }
  }

  positionLeftNodes(midIndex: number) {
    let countingForwards = 0;
    let tempZIndex = 0;
    for (let i = midIndex - 1; i >= 0; i--) {
      tempZIndex -= 1;
      countingForwards++;
      const leftNodes = this.carousel?.nativeElement.children[i - 1];
      if (leftNodes) {
        gsap.to(leftNodes, {
          duration: 0,
          zIndex: tempZIndex,
          x: -(80 * countingForwards),
          scale: `0.${this.scaleRation - countingForwards}`,
        });
      }
    }
  }

  positionRightNodes(midIndex: number) {
    const carouselLength = this.carousel?.nativeElement.children.length;
    let countingForwards = 0;
    let tempZIndex = this.baseZIndex;
    for (let i = midIndex; i < carouselLength!; i++) {
      countingForwards++;
      tempZIndex -= 1;
      const rightNodes = this.carousel?.nativeElement.children[
        i
      ] as HTMLDivElement;
      if (rightNodes) {
        gsap.to(rightNodes, {
          duration: 0,
          zIndex: tempZIndex,
          x: 80 * countingForwards,
          scale: `0.${this.scaleRation - countingForwards}`,
        });
      }
    }
  }

  ngAfterViewInit() {
    this.initCarousel();
  }

  next() {
    this.isAnimating = true;
    this.prevSlideFinished = false;

    // Dynamically changing element positions
    if (this.middleIndex! > 1) {
      this.moveLeftSideAlongWithMainElement();
      this.moveRemainingRightSide();
    }
  }

  get noMoreElements(): boolean {
    return (
      this.carousel?.nativeElement.children[this.middleIndex! + 1] === undefined
    );
  }

  moveLeftSideAlongWithMainElement() {
    for (let i = 0; i <= this.middleIndex!; i++) {
      const element = this.carousel?.nativeElement.children[
        i
      ] as HTMLDivElement;
      const prevElement = this.carousel?.nativeElement.children[
        i - 1
      ] as HTMLDivElement;
      // getting current style values
      const currentTranslateXValue = gsap.getProperty(element, 'translateX');
      const currZIndex = gsap.getProperty(element, 'zIndex');
      const currentScale = gsap.getProperty(element, 'scale');

      if (currZIndex === this.baseZIndex) {
        // we found main element, move this to right side and decrease z-index
        gsap.to(element, {
          duration: 0.3,
          zIndex: typeof currZIndex === 'number' && ((currZIndex - 1) as any),
          x: 80,
          scale: '0.9',
        });
        // update previous element z-index to be main
        gsap.to(prevElement, {
          duration: 0.3,
          zIndex: this.baseZIndex,
        });
        // update middle index
        this.middleIndex = i;
      } else {
        gsap.to(element, {
          duration: 0.3,
          zIndex: typeof currZIndex === 'number' && ((currZIndex + 1) as any),
          x:
            typeof currentTranslateXValue === 'number' &&
            ((currentTranslateXValue + 80) as any),
          scale:
            typeof currentScale === 'number' &&
            (parseFloat((currentScale + 0.1).toFixed(1)) as any),
        });
      }
    }
  }

  moveRemainingRightSide() {
    const length = this.carousel?.nativeElement.children.length;
    // style values
    for (let i = this.middleIndex!; i < length!; i++) {
      const element = this.carousel?.nativeElement.children[
        i
      ] as HTMLDivElement;
      const currentTranslateXValue = gsap.getProperty(element, 'translateX');
      const currZIndex = gsap.getProperty(element, 'zIndex');
      const currentScale = gsap.getProperty(element, 'scale');

      gsap.to(element, {
        duration: 0.3,
        zIndex: typeof currZIndex === 'number' && ((currZIndex - 1) as any),
        x:
          typeof currentTranslateXValue === 'number' &&
          ((currentTranslateXValue + 80) as any),
        scale:
          typeof currentScale === 'number' &&
          (parseFloat((currentScale - 0.1).toFixed(1)) as any),
        onComplete: () => (this.isAnimating = false) as any,
      });
    }
  }

  moveRemainingRightSidePrev() {
    let tempZIndex = this.baseZIndex;
    const length = this.carousel?.nativeElement.children.length!;
    for (let i = this.middleIndex + 1; i < length; i++) {
      const element = this.carousel?.nativeElement.children[
        i
      ] as HTMLDivElement;
      const currentTranslateXValue = gsap.getProperty(element, 'translateX');
      const currentScale = gsap.getProperty(element, 'scale');
      tempZIndex--;

      gsap.to(element, {
        duration: 0.3,
        zIndex: tempZIndex,
        x:
          typeof currentTranslateXValue === 'number' &&
          ((currentTranslateXValue - 80) as any),
        scale:
          typeof currentScale === 'number' &&
          (parseFloat((currentScale + 0.1).toFixed(1)) as any),
      });
    }
  }

  prev() {
    this.isAnimating = true;
    this.moveLeftSideAlongWithMainElementPrev();
    this.moveRemainingRightSidePrev();
  }

  moveLeftSideAlongWithMainElementPrev() {
    for (let i = this.middleIndex; i >= 0; i--) {
      // /Temp variables
      const element = this.carousel?.nativeElement.children[
        i
      ] as HTMLDivElement;
      const nextElement = this.carousel?.nativeElement.children[
        i + 1
      ] as HTMLDivElement;
      // Style variables
      const currentTranslateXValue = gsap.getProperty(element, 'translateX');
      const currZIndex = gsap.getProperty(element, 'zIndex');
      const currentScale = gsap.getProperty(element, 'scale');

      if (currZIndex === this.baseZIndex) {
        // We found main element, move this to the left side and assign z-index
        gsap.to(element, {
          duration: 0.3,
          zIndex: -1,
          x:
            typeof currentTranslateXValue === 'number' &&
            ((currentTranslateXValue - 80) as any),
          scale:
            typeof currentScale === 'number' &&
            (parseFloat((currentScale - 0.1).toFixed(1)) as any),
        });
        // Update next element z-index to be main
        gsap.to(nextElement, {
          duration: 0.3,
          zIndex: this.baseZIndex,
          x:
            typeof currentTranslateXValue === 'number' &&
            (currentTranslateXValue as any),
          scale:
            typeof currentScale === 'number' &&
            (parseFloat(currentScale.toFixed(1)) as any),
        });
        this.middleIndex = i + 1;
      } else
        gsap.to(element, {
          duration: 0.3,
          zIndex: typeof currZIndex === 'number' && ((currZIndex - 1) as any),
          x:
            typeof currentTranslateXValue === 'number' &&
            ((currentTranslateXValue - 80) as any),
          scale:
            typeof currentScale === 'number' &&
            (parseFloat((currentScale - 0.1).toFixed(1)) as any),
          onComplete: () => {
            this.isAnimating = false;
            if (this.noMoreElements) {
              this.prevSlideFinished = true;
            } else {
              this.prevSlideFinished = false;
            }
          },
        });
    }
  }

  // Set Active Item
  setActiveItem(item: any, index: number) {
    this.selectedIndex = index;
  }

  // Changes every 3 seconds
  autoSlideImages() {
    setInterval(() => {
      // this.onNextClick();
    }, this.slideInterval);
  }

  // Set dot indicator on click
  selectedImage(index: number) {
    this.selectedIndex = index;
  }

  // end

  // onPrevClick() {
  //   if (this.selectedIndex === 0) {
  //     this.selectedIndex - this.items.length - 1;
  //   } else {
  //     this.selectedIndex--;
  //   }
  // }

  // onNextClick() {
  //   if (this.selectedIndex === this.items.length - 1) {
  //     this.selectedIndex = 0;
  //   } else {
  //     this.selectedIndex++;
  //   }
  // }
}
