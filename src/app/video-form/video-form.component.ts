import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { Http } from '@angular/http';


@Component({
  selector: 'video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.css']
})

export class VideoFormComponent implements OnInit {
	routeSub:any;
	data:any;
  embedId = "";
  videoName = "";
  slug = "";
	public listVideos = [
      {name:"",embedId:""}
   ];
  constructor(private route: ActivatedRoute, private router: Router, private http:Http) { }
 
  ngOnInit() {
  this.routeSub = this.route.params.subscribe(params=>{
	  this.data = params		
  		})
  }

  onAddItem(videoName, embedId){
      this.listVideos.push({name:videoName.value, embedId:embedId.value}); 
      this.embedId = '';
      this.videoName = '';
      this.slug = '';
   }

   onRemoveItem(index){
     if(confirm('Are you sure you want to delete this?')){
      this.listVideos.splice(index, 1); 
     }
   }

  formSubmit(){
  		//let videoName = formData.value['q'];
  		//let link = formData.value['slug'];
  		this.router.navigate(["/video/form"])
  }

   getEmbedUrl(item){
    return 'https://www.youtube.com/embed/'+ item.embedId;
  }
}