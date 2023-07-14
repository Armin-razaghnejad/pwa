import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  template:`
    <div class="flex flex-col items-center justify-center gap-2 h-full px-4 bg-slate-50">
      <h1 class="text-2xl font-medium">Can I Help You?</h1>
      <img src="/assets/welcome.png" width="335" height="335" alt="">
      <button [routerLink]="'app'" class="bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg text-white rounded-md text-base leading-9 w-full mt-6">Yup</button>
    </div>
  `,
  standalone:true,
  imports:[
    RouterLink
  ]
})

export class WelcomeComponent {
  
}