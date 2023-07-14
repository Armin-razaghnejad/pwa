import { Component } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";
import { RouterOutlet } from "@angular/router";

@Component({
  template: `
    <header class="border-b border-slate-200 p-2 bg-yellow-500">
      <menu-list></menu-list>
    </header>
    <section class="bg-slate-50 h-full">
     <router-outlet></router-outlet>
    </section>
  `,
  standalone: true,
  imports: [
    MenuComponent,
    RouterOutlet
  ]
})

export class MainComponent {}