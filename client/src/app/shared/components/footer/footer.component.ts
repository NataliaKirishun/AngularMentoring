import { Component, OnInit } from '@angular/core';

import { FOOTER_CONFIG } from 'src/app/config/footer.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  public footerContent: string;

  ngOnInit() {
    this.footerContent = FOOTER_CONFIG.FOOTER_CONTENT;
  }
}
