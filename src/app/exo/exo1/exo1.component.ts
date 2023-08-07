import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-chronometre',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit, OnDestroy {
  timerRunning: boolean = false;
  timerValue: number = 0;
  timerDisplay: string = '00:00';
  timerSubscription: Subscription | undefined;

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startTimer() {
    this.timerRunning = true;
    this.timerSubscription = interval(1000).subscribe(() => {
      this.timerValue++;
      this.updateTimerDisplay();
    });
  }

  pauseTimer() {
    this.timerRunning = false;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  resetTimer() {
    this.timerRunning = false;
    this.timerValue = 0;
    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    const minutes = Math.floor((this.timerValue % 3600) / 60);
    const seconds = this.timerValue % 60;

    this.timerDisplay = this.formatTime(minutes) + ':' + this.formatTime(seconds);
  }

  formatTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }
}