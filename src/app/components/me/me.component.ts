import { Component } from "@angular/core";
import { CvService } from "./me.service";
import { PassedTimePipe } from "src/app/pipes/passedDate.pipe";
import { DatePipe, KeyValuePipe, NgFor } from "@angular/common";

@Component({
  templateUrl: './me.component.html',
  standalone: true,
  imports:[
    PassedTimePipe,
    DatePipe,
    NgFor,
    KeyValuePipe
  ]
})

export class MeComponent {
  constructor(public service: CvService){}
}