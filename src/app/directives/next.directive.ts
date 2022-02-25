import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]',
})
export class NextDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  nextFunc() {
    var elm =
      this.el.nativeElement.parentElement.parentElement.children[0].children[0];
    var item = elm.getElementsByClassName('item');
    var currentItem = item[item.length - 1];
    currentItem.classList.add('active');
    console.log(currentItem);

    elm.append(item[0]);
  }
}
