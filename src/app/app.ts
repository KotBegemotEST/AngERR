import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HorizontalStripComponent } from './horizontal-strip/horizontal-strip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HorizontalStripComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  frontPageData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee')
      .subscribe(res => {
        this.frontPageData = res?.data?.category?.frontPage?.filter((b: any) => b.highTimeline) || [];
      });
  }
}
