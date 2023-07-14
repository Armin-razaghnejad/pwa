import { Component } from "@angular/core";
import { CvService } from "../me/me.service";
import { MatIconModule } from "@angular/material/icon";

@Component({
  template: `
    <div class="m-2 p-4 border border-slate-200 rounded-md">
      <p class="text-center text-slate-700 border-b border-slate-200 mb-2 pb-2 font-medium"> Contact To Me </p>
      <a [href]="'mailTo:' + service.arminsData.email " class="flex gap-2 items-center mb-2">
        <mat-icon fontIcon="email" class="text-4xl w-9 h-9 text-red-500"></mat-icon>
        <span class="mt-1 text-xs">{{service.arminsData.email}}</span>
      </a>
      <a [href]="service.arminsData.linkedIn " class="flex gap-2 items-center">
        <mat-icon fontIcon="link" class="text-4xl w-12 h-9 text-blue-500"></mat-icon>
        <span class="mt-1 text-xs">{{service.arminsData.linkedIn}}</span>
      </a>
    </div>
  `,
  standalone: true,
  imports: [
    MatIconModule
  ]
})

export class ContactComponent {
  constructor(public service: CvService) { }
}