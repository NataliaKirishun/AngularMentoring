import { Component, OnInit } from '@angular/core';

import { HEADER_CONFIG } from 'src/app/config/header.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public logoPath: string;
  public logoText: string;

  ngOnInit() {
    this.logoPath = HEADER_CONFIG.LOGO_PATH;
    this.logoText = HEADER_CONFIG.LOGO_TEXT;
  }
}
