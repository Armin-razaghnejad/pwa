import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  template: `
    <ul class="flex gap-2 justify-center">
      <ng-container *ngFor="let item of menuItems">
        <li [routerLink]="[item.path]" class="cursor-pointer font-medium hover:bg-white leading-9 px-2 rounded-md transition-colors duration-150 text-sm">
          {{item.name}}
        </li>
      </ng-container>
    </ul>
  `,
  selector: 'menu-list',
  imports: [
    NgFor,
    RouterLink
  ],
  standalone: true
})

export class MenuComponent {
  menuItems = [
    {
      path: '/app', name:'Home'
    },
    {
      path: 'me', name:'About Me'
    },
    {
      path: 'contact', name:'Contact'
    },
    {
      path: 'donate', name:'Donate'
    }
  ]
}