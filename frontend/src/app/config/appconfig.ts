import {Injectable} from '@angular/core';

@Injectable()
export class AppConfiguration {
  urls = {
    baseUrl: './',


    url: (name, parm1?, parm2?, parm3?) => {
      let url = this.urls.baseUrl + this.urls[name];
      if (parm1) {
        url += '/' + parm1;
      }
      if (parm2) {
        url += '/' + parm2;
      }
      if (parm3) {
        url += '/' + parm3;
      }

      return url;
    }
  };

  // put config variables here

  constructor() {
    this.urls.baseUrl = 'http://localhost:5050/';
    // this.urls.baseUrl = 'http://172.17.33.132/';
  }
}
