import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
title='HTML';
per=70;
subtitle='70%';

title2='CSS';
per2=60;
subtitle2='60%';

title3='Angular';
per3=50;
subtitle3='50%';

  ngOnInit(): void {
  }

}
