import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {PostsService, Post } from '../posts.service'

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: Post
  constructor(private route: ActivatedRoute, private postsService: PostsService ) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      console.log(params)
      this.post = this.postsService.getById(params.id)
    })
  }

}
