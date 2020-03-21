import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable()
export class Globals {    

 serverlink:string = "http://localhost/coronaServer/";
 //serverlink:string = "coronaServer/"; 

 newsItem: any; 
 headline: any;

} 