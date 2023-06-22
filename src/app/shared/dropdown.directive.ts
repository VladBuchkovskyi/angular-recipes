import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false

  // This approach is hiding list just on clicking the dropdown
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen
  // }

  // If we want to close dropdown list by clicking anywhere
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}

}
