import { Injectable, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';

declare let videojs: any;

@Injectable({
  providedIn: 'root'
})

export class MediaplayerService implements OnInit { 

  vidObj: any;
  isPlaying: boolean = false;
  isPaused: boolean;
  isStopped: boolean;
  isBuffering: boolean;
  playerText: string;
  src: string = "https://corona-news.westream.cloud/coronaNews";
  playerId: any;

  setAndPlay(src): void {     
    this.vidObj.src({ src: src, type: 'audio/mp3'});
    this.vidObj.play();
    this.src = src;
  }

  play(): void {
    this.vidObj.play();
  }

  pause(): void {
    this.vidObj.pause();
  }

  stop(): void {
    this.vidObj.reset();
    this.isStopped = true;
    this.isPlaying = false;
    this.isPaused = false;
    this.isBuffering = false;
    this.playerText = "STOPPED";
  }

  onPlayerEnded(): void {
  }  

  constructor(private el: ElementRef) {
    const service = this;
    this.vidObj = new videojs(this.el);

    this.vidObj.on("timeupdate", function () {
      service.isPlaying = true;
      service.isPaused = false;
      service.isStopped = false;
      service.isBuffering = false;
      service.playerText = "";
    
    });

    this.vidObj.on("pause", function () {
      service.isPaused = true;
      service.isPlaying = false;
      service.isStopped = false;
      service.isBuffering = false;
      service.playerText = "PAUSED";
    
    });

    this.vidObj.on("waiting", function () {
      service.isBuffering = true;
      service.isPaused = false;
      service.isPlaying = false;
      service.isStopped = false;
      service.playerText = "";
    });

    this.vidObj.on("error", function () {
      service.isBuffering = false;
      service.isPaused = false;
      service.isPlaying = false;
      service.isStopped = false;
      service.playerText = "OFFLINE";
    });

    this.vidObj.on("emptied", function () {
      //console.log("emptied");
    
    });
  }

  ngOnInit() {
  }

}
