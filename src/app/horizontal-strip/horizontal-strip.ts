import { Component, Input,OnChanges,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-horizontal-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-strip.html',
  styleUrl: './horizontal-strip.css'
})
export class HorizontalStripComponent implements OnInit {
  @Input() block: any;
  loading = true;

  ngOnInit(): void {
    // задержка, чтобы успел показаться loader
    setTimeout(() => {
      if (this.block?.data?.length > 0) {
        this.loading = false;
      }
    }, 100); // 100 мс — визуально даст шанс показать крутилку
  }
}