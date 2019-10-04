import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  collapsed = true;
  @Output() featuredSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featuredSelected.emit(feature);
  }
}

