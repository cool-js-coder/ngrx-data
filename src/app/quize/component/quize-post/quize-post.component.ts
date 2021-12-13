import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {QuizeService} from '../../services/quize.service';
import { Quize } from '../../model/quize';

@Component({
  selector: 'app-quize-post',
  templateUrl: './quize-post.component.html',
  styleUrls: ['./quize-post.component.css'],
})
export class QuizePostComponent implements OnInit {
  addPostForm: FormGroup;
  constructor(private router: Router, private quizeService: QuizeService) {}

  ngOnInit(): void {
    this.addPostForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
    });
  }

  onAddPost() {
    const post: Quize = this.addPostForm.value;
    this.quizeService.add(post).subscribe((data) => {
      this.router.navigate(['/quize']);
    });
  }
}
