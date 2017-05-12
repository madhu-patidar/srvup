import { NgModule } 			from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoListComponent } 	from './video-list/video-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { VideoFormComponent } from './video-form/video-form.component';


const appRoutes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "videos",
		component: VideoListComponent,
	},
	{
		path: "search",
		component: SearchDetailComponent,
	},
	{
		path: "videos/:slug",
		component: VideoDetailComponent,
	},
	{
		path: "video/form",
		component: VideoFormComponent,
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(
		appRoutes
		)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}