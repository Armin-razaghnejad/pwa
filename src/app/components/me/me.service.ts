import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class CvService {
  arminsData = {
    fullName: 'Armin Razaghnejad',
    startProgramming: 1546300800000,
    birthDate: 887920200000,
    fields: 'Software engineer',
    location: 'Karaj-Iran',
    phone: '09366934432',
    donateLink: 'https://payping.ir/@arminrazaghnejad@gmail.com',
    address: 'Karaj - Golshahr - west Golzar',
    email: 'arminrazaghnejad@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/armin-razaghnejad-a71a1920b',
    skills: {
      'Front-end':{
        'frameworks': [
          'Angular', 'jQuery', 'Vue'
        ],
        'libraries': [
          'Tailwind', 'Material', 'NgRx'
        ]
      },
      'Back-end':{
        'frameworks': [
          'Express', 'Fastify', 'NestJs'
        ],
        'Databases': [
          'MySQL', 'PostgreSQL', 'MongoDb'
        ]
      },
      anotherSkils:{
        'Content Management Systems': 'WordPress',
        'Containerization': 'Docker',
        'Version Control': 'Git',
        'Testing': 'jest & jasmin'
      }
    },
    workExpreience: [
      {
        coName:'ArzDigital', field:'Fullstack Developer', startDate:'1608508800000', endDate: ''
      },
      {
        coName:'BesharatCard', field:'Front-end Developer', startDate:'1558467000000', endDate: '1608508800000'
      },
      {
        coName:'24Talk', field:'Front-end Developer', startDate:'1553113800000', endDate: '1558467000000'
      }
    ],
    education: 'Math Diploma'
  }
}