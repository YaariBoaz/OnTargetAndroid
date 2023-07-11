import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  @Input() route:string;

  constructor(private router:Router) { }

  ngOnInit() {}

  onBackPressed() {
    this.router.navigateByUrl(this.route).then(r => {});
  }
}
