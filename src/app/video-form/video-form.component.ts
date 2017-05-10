import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'

@Component({
  selector: 'video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.css']
})
export class VideoFormComponent implements OnInit {
	routeSub:any;
	data:any;
	
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.routeSub = this.route.params.subscribe(params=>{
	  this.data = params		
  		})
  }

  formSubmit(event, formData){
  		let videoName = formData.value['q'];
  		let link = formData.value['slug'];
  		let embedId = formData.value['embedId']
  		
  		this.router.navigate(["/videos"])
  }
}
