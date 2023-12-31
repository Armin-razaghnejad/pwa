import { Component } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from "@angular/common";
import { PassedTimePipe } from "src/app/pipes/passedDate.pipe";
import { CvService } from "../me/me.service";

@Component({
  template: `
   <div class="h-full flex flex-col">
    <div class="h-60">
      <img src="/assets/IMG_4624.png" alt="" srcset="">
    </div>
    <div class="bg-slate-600 grow relative -mt-2 pt-12 flex items-center flex-col">
      <div class="flex gap-4">
        <div class="bg-white rounded-md w-36 h-36 flex flex-col items-center justify-center gap-4">
          <mat-icon fontIcon="assignment" class="text-4xl w-9 h-9 text-blue-600"></mat-icon>
          <span class="font-medium">{{ service.arminsData.startProgramming | passedTime }} Experience</span>
        </div>
        <div class="bg-white rounded-md w-36 h-36 flex flex-col items-center justify-center gap-4">
          <mat-icon fontIcon="date_range" class="text-4xl w-9 h-9 text-lime-600"></mat-icon>
          <span class="font-medium">{{service.arminsData.birthDate | date:'Y/M/d'}}</span>
        </div>
      </div>
      <div class="flex gap-4 mt-4">
        <div class="bg-white rounded-md w-36 h-36 flex flex-col items-center justify-center gap-4">
          <mat-icon fontIcon="work" class="text-4xl w-9 h-9 text-amber-600"></mat-icon>
          <span class="font-medium">{{service.arminsData.fields}}</span>
        </div>
        <div class="bg-white rounded-md w-36 h-36 flex flex-col items-center justify-center gap-4">
          <mat-icon fontIcon="location_on" class="text-4xl w-9 h-9 text-violet-600"></mat-icon>
          <span class="font-medium">{{service.arminsData.location}}</span>
        </div>
      </div>
    </div>
   </div>
  `,
  standalone: true,
  imports: [
    MatIconModule,
    DatePipe,
    PassedTimePipe
  ]
})

export class DashboardComponent {

  constructor(public service: CvService) { }

}