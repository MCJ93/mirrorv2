///  <reference types="@types/spotify-web-playback-sdk"/>
import { Component } from '@angular/core';
import { WindowService } from '../services/window';
import { TOKEN } from './spotifyToken';

@Component({
  selector: 'spotify',
  templateUrl: './spotify.component.html',
  providers: [WindowService],
  styleUrls: []
})
export class SpotifyPlayer {
  constructor(
    private window: WindowService
  ) {};

  ngOnInit() {
    window.onSpotifyWebPlaybackSDKReady = this.initializeSpotify;
  }

  private initializeSpotify() {
    const player = new Spotify.Player({
      name: 'Mirrorv2',
      getOAuthToken: cb => { cb(TOKEN); },
      volume: 0.5
    });

    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
      console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    player.connect();
  }
};
