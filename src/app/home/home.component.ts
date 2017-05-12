import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
//import { Http } from '@angular/http';
import { VideoService } from '../videos/videos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})

export class HomeComponent implements OnInit, OnDestroy {
	homeImageList = [
		//{image: "assets/images/nature/4.JPG", name: "image 4", slug: "video-1"},
		//{image: "assets/images/nature/5.jpg", name: "image 5", link: "video-1"},
		//{image: "assets/images/nature/5.jpg", name: "image 6", link: "video-1"}
	]
	todayDate;
	private req:any;
	
  constructor(private router:Router, private _video:VideoService) { }

  ngOnInit() {
	  this.req = this._video.list().subscribe(data=>{
	  	//console.log(data)
	  	data.filter(item =>{
	  		if(item.featured){
	  			this.homeImageList.push(item);
	  		}
	  	})
	  	//this.homeImageList = data.json();
	  })
  }

  ngOnDestroy(){
  	this.req.unsubscribe()
  }
  
  preventNormal(event:MouseEvent, image:any){
  	if(!image.prevented){
  		event.preventDefault()
  		//image.setAttribute("href", "/videos")
  		//image.link = "/videos"
  		//image.prevented = true
  		this.router.navigate(["./videos"])
  	}
  }

}
