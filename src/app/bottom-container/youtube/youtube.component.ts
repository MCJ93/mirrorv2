import { Component, OnInit } from '@angular/core';
import { vidId } from './vidId';

let apiLoaded = false;

@Component({
  templateUrl: './youtube.component.html',
  selector: 'youtube',
})
export class YoutubePlayer implements OnInit {
  playerVars = {
    autoplay: 1,
    controls: 0
  }
  vidId = vidId;

  ngOnInit() {
    if (!apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'http://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
}
