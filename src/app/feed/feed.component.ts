import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit,AfterViewInit {
  feedItems = [
    {
      type:FeedItemType.Video,
      url:'https://www.youtube.com/embed/bmeRROzi_4k',
      title:'Test Fire of 43 Machine Guns - One Take, No Edits',
      description: 'GOING WILD BABY!!!'
    },
    {
      type:FeedItemType.Video,
      url:'https://www.youtube.com/embed/oFA7Obs6hpc',
      title:'Shooters Gauntlet 2022',
      description:'Shoot it like ya want'
    },
    {
      type:FeedItemType.Video,
      url:'https://www.youtube.com/embed/d6LcElih67w',
      title: 'Gun Store Etiquett',
      description: 'what NOT to do in a gun shop'
    },
    {
      type:FeedItemType.Video,
      url:'https://www.youtube.com/embed/wmvFkasjmMw',
      title: 'ANTIMATTER INDUSTRIES SCOPE SWITCH - TRAVIS HALEY ',
      description: 'look at that beautiful thing'
    },
    {
      type:FeedItemType.Video,
      url:'https://www.youtube.com/embed/gpOHWy7RQYM',
      title: 'Gun Quieter Than a Bow and Arrow',
      description: 'Shhhhh'
    },
    {
      type:FeedItemType.Video,
      url:'https://www.youtube.com/embed/UGN4OSmX2Rc'
    },
    {
      type:FeedItemType.Video,
      url:'https://www.youtube.com/embed/Xfp93YScZXs',
      title: 'shooting like a boss!',
      description: 'Girls just wanna have fun'
    },
    {
      type:FeedItemType.Video,
      url:'https://www.youtube.com/embed/KE5-x3eu8wY',
      title: '50 Cal Barrett for the first time!',
      description: 'BOOOOOM!'
    },
    {
      type:FeedItemType.Video,
      url:'https://www.youtube.com/embed/dmtJOJHBsRU',
      title: 'girl and gun,military police,women military',
      description: 'How to wear it'
    },
    {
      type:FeedItemType.Video,
      url:'https://www.youtube.com/embed/YujsE547CFk',
      title: 'Gun Training at the Shooting Range',
      description: ' Behind the Scenes'

    },
    {
      type: FeedItemType.Image,
      url:'assets/feed/feed1.jpg'
    },
    {
      type: FeedItemType.Image,
      url:'assets/feed/feed2.jpg'
    },
    {
      type: FeedItemType.Image,
      url:'assets/feed/feed3.jpg'
    },
    {
      type: FeedItemType.Image,
      url:'assets/feed/feed4.jpg'
    },
    {
      type: FeedItemType.Image,
      url:'assets/feed/feed5.jpg'
    },
    {
      type: FeedItemType.Image,
      url:'assets/feed/feed6.jpg'
    },
    {
      type: FeedItemType.Image,
      url:'assets/feed/feed7.jpg'
    },
    {
      type: FeedItemType.Image,
      url:'assets/feed/feed8.jpg'
    },
    {
      type:FeedItemType.Ad,
      title:'9mm LUGER 115 GRAIN FMJ 100 ROUND',
      url:'assets/feed/Ad1.jpg'
    },
    {
      type:FeedItemType.Ad,
      title:'9mm FEDERAL 115 GRAIN FMJ 100 ROUND',
      url:'assets/feed/Ad2.jpg'
    },
    {
      type:FeedItemType.Ad,
      url:'assets/feed/Ad3.jpg',
      title:'GLOCK replacement handle'
    },
    {
      type:FeedItemType.Ad,
      url:'assets/feed/Ad4.jpg',
      title:'BARND NEW M4',
    }
  ];

  constructor(public _sanitizer: DomSanitizer,private ref: ChangeDetectorRef) {
    this.shuffle(this.feedItems);
  }

  ngOnInit() {}


  shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    this.feedItems =  array;
  }

  ngAfterViewInit(): void {
      this.ref.detach()

  }
}
export  enum FeedItemType{
  Video,
  Image,
  Ad
}
