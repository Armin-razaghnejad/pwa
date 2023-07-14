import { Component } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  template: `
    <header class="border-b border-slate-200 p-2 bg-yellow-500">
      <menu-list></menu-list>
    </header>
    <section class="bg-slate-100 h-full">
      <img src="/assets/IMG_4624.png" alt="" srcset="">
      <div class="bg-slate-600 h-full relative -mt-3 pt-12 flex items-center flex-col">
        <div class="flex gap-4">
          <div class="bg-white rounded-md w-36 h-36 flex flex-col items-center justify-center gap-4">
            <mat-icon fontIcon="assignment_ind" class="text-4xl w-9 h-9 text-blue-600"></mat-icon>
            <span>Experience: <span class="font-medium">4 Years</span></span>
          </div>
          <div class="bg-white rounded-md w-36 h-36 flex flex-col items-center justify-center gap-4">
            <mat-icon fontIcon="assignment_ind" class="text-4xl w-9 h-9 text-blue-600"></mat-icon>
            <span>Experience: <span class="font-medium">4 Years</span></span>
          </div>
        </div>
        <div class="flex gap-4 mt-4">
          <div class="bg-white rounded-md w-36 h-36 flex flex-col items-center justify-center gap-4">
            <mat-icon fontIcon="assignment_ind" class="text-4xl w-9 h-9 text-blue-600"></mat-icon>
            <span>Experience: <span class="font-medium">4 Years</span></span>
          </div>
          <div class="bg-white rounded-md w-36 h-36 flex flex-col items-center justify-center gap-4">
            <mat-icon fontIcon="assignment_ind" class="text-4xl w-9 h-9 text-blue-600"></mat-icon>
            <span>Experience: <span class="font-medium">4 Years</span></span>
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true,
  imports: [
    MenuComponent,
    MatIconModule
  ]
})

export class DashboardComponent {

}