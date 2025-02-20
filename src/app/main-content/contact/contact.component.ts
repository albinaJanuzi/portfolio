import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  checkboxState: 'default' | 'checked' | 'hover' = 'default';

  toggleCheckbox() {
    this.checkboxState = this.checkboxState === 'checked' ? 'default' : 'checked';
  }

  onHover() {
    if (this.checkboxState !== 'checked') {
      this.checkboxState = 'hover';
    }
  }

  onLeave() {
    if (this.checkboxState !== 'checked') {
      this.checkboxState = 'default';
    }
  }
}
