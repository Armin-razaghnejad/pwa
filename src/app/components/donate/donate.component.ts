import { Component } from "@angular/core";
import { CvService } from "../me/me.service";
import { MatIconModule } from "@angular/material/icon";

@Component({
  template: `
    <div class="m-2 p-4 border border-slate-200 rounded-md">
      <p class="text-slate-700 border-b border-slate-200 mb-2 pb-2 font-medium flex gap-2 justify-center items-center">
        <mat-icon fontIcon="local_cafe" class="text-blue-500"></mat-icon>
        <span>Donate Me</span>
      </p>
      <a [href]="service.arminsData.donateLink " class="flex gap-2 items-center mb-2 border p-2 border-slate-200 rounded-md max-w-fit mx-auto">
        <mat-icon fontIcon="link" class="text-blue-500"></mat-icon>
        <span class="mt-1">Donate</span>
      </a>
    </div>
  `,
  standalone: true,
  imports: [
    MatIconModule
  ]
})

export class DonateComponent {
  constructor(public service: CvService) { }
}