import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-horizontal-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-strip.html',
  styleUrl: './horizontal-strip.css'
})

export class HorizontalStripComponent implements OnInit, AfterViewInit {
  @Input() block: any;
  loading = true;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  showLeft = false;
  showRight = true;

  ngOnInit(): void {
    setTimeout(() => {
      if (this.block?.data?.length > 0) {
        this.loading = false;
      }
    }, 100);
  }

  ngAfterViewInit(): void {
    this.updateButtons();
  }

  scrollLeft(): void {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });

    setTimeout(() => this.updateButtons(), 300);
  }

  scrollRight(): void {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });

    setTimeout(() => this.updateButtons(), 300);
  }

  updateButtons(): void {
    const container = this.scrollContainer.nativeElement;
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    this.showLeft = scrollLeft > 0;
    this.showRight = scrollLeft < maxScrollLeft - 10;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateButtons();
  }
}