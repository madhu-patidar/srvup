import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endPoint = "assets/json/videos.json"

@Injectable()
export class VideoService {

  constructor(private http:Http) { }

  list(){
  	return this.http.get(endPoint)
  	.map(response=>response.json())
  	.catch(this.handleError)
  }
  
  get(slug){
  	return this.http.get(endPoint)
  	.map(response=>{
  					let data = response.json().filter(item=>{
	  					if(slug == item.slug){
	  	     				return item
	  	     			}
	  	     		})
	  	     		console.log(data)
	  	     		return data
	})
  	.catch(this.handleError)
  }

  handleError(error:any, caught:any):any{
  	console.log(error, caught)
  }
}