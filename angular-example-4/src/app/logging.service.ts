import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }
  logStatusChange(status:string){
    console.log('服务状态'+status);
  }
}
