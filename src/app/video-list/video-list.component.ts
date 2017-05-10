import { Component, OnInit, OnDestroy, Input } from '@angular/core';
//import { DomSanitizer } from '@angular/platform-browser';
import { VideoService } from '../videos/videos.service';


@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {
	title = "Video List";
	someItem = "Hi There"
	todayDate;
	private req: any;
	videoList: [any];

	@Input() videoName:string;
	@Input() slug:string;
	@Input() embedId:string;



	// Using pipe

	constructor( private _video: VideoService) { }

  ngOnInit() {
	  this.todayDate = new Date()
	  this.req = this._video.list().subscribe(data=>{
	  	console.log(this.videoName)
	  	console.log(this.embedId)
	  	this.videoList = data as any;
	  })
  }

  ngOnDestroy(){
  	this.req.unsubscribe()
  }

  getEmbedUrl(item){
  	return 'https://www.youtube.com/embed/'+ item.embed;
  }

}











	// videoList = ["item 1", "item 2", "item 3"]
//	videoList = [
//				{
//				name: "item 1",
//				slug: "item-1",
//				embed:  `6wD4V0rvlDI`,
//				},
//				{
//				name: "item 2",
//				slug: "item-2",
//				embed: `6wD4V0rvlDI`,
//				},
//				{
//				name: "item 3",
//				slug: "item-3",
//				embed:  `6wD4V0rvlDI`,
//				}
//	]
	// constructor(private sanitizer: DomSanitizer) { }
 	// ngOnInit() {
 	//		this.todayDate = new Date()
 //		}
  //	getEmbedUrl(item){
  	//return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+ item.embed)
	//}

	//}