import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch-comp',
  templateUrl: './stopwatch-comp.component.html',
  styleUrl: './stopwatch-comp.component.css'
})
export class StopwatchCompComponent {
  time: number = 0;
  interval: any;
  running: boolean = false;
  timestamps: string[] = [];

  startStopwatch() {
    if (!this.running) {
      const startTime = Date.now() - this.time; // Continue from where it left off
      this.interval = setInterval(() => {
        this.time = Date.now() - startTime; // Calculate elapsed time in milliseconds
      }, 10); // Update every 10ms for better accuracy
      this.running = true;
    }
  }

  stopStopwatch() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }

  resetStopwatch() {
    this.stopStopwatch();
    this.time = 0;
    this.timestamps = [];
  }

  recordTimestamp() {
    if (this.running) {
      const formattedTime = this.formatTime(this.time);
      this.timestamps.push(formattedTime);
    }
  }

  formatTime(time: number): string {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10); // Two decimal places for milliseconds
     return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}.${this.pad(milliseconds, 2)}`;
  }
  
  pad(num: number, size: number = 2): string {
    let s = '0' + num;
    return s.slice(-size);
  }
}
