import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    //@HostListener('document:click', ['$event']) toogleOpen() {
    @HostListener('click') toogleOpen() {
        this.isOpen = !this.isOpen;
    }

    //constructor(private elRef: ElementRef) {}
}