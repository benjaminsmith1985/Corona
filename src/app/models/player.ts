import { ElementRef } from '@angular/core';


declare let videojs: any;

export class Player {
 
    vidObj: any;
    element: ElementRef;
    isPlaying: boolean;
    isPaused: boolean;
    isStopped: boolean;
    isBuffering: boolean;
    playerText: string;
    progressPercentage: number;
    src: string;
    class: string;

    setAndPlay(src): void { 
        console.log('se');
        this.vidObj.src({ src: src, type: 'audio/mp3' });
        this.vidObj.play();
    }

    play(): void {
        this.vidObj.play();
    }

    pause(): void {
        this.vidObj.pause();
    }

    isAudio(): void {
        this.class = 'audioplayer';
    }

    isVideo(): void {
        this.class = "videoplayer";
    }

    stop(): void {
        this.vidObj.reset();
        this.isStopped = true;
        this.isPlaying = false;
        this.isPaused = false;
        this.isBuffering = false;
        this.playerText = "STOPPED";
    }

    setCurrentTime(percentage): void {
        var time = (percentage * this.vidObj.duration()) / 100;
        console.log(time); 
        this.vidObj.currentTime(time);
        this.vidObj.progressPercentage = percentage;
    }

    onPlayerEnded(): void {
        console.log('ended');
    }



    constructor(private el: ElementRef) {
        const service = this;
        this.vidObj = new videojs(this.el);

        this.vidObj.one("timeupdate", function () {
            // this.muted(false);
        });

        this.vidObj.on("timeupdate", function () {
            service.isPlaying = true;
            service.isPaused = false;
            service.isStopped = false;
            service.isBuffering = false;
            service.progressPercentage = (100 / this.duration()) * this.currentTime();
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
            console.log("error");
        });

        this.vidObj.on("emptied", function () {
            console.log("emptied");
        });
    }
} 