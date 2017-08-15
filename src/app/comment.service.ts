import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {

  
  comments = [
  {title: 'greating', author:'me'},
  {title: 'help', author:'meyself'},
  {title: 'JUST DO IT', author:'I'}
  ];

  getComments() {
    return this.comments;
  }

  constructor() { }

}
