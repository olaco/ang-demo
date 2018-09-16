import { Directive, HostListener, HostBinding } from '@angular/core';
// does not work with header

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleopen() {
    this.isOpen = !this.isOpen;
  }



}
