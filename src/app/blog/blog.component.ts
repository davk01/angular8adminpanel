import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {PostsService} from '../posts.service'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent  {

  constructor(private router: Router, public postsService: PostsService) { }


}
