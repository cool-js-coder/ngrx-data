import { QuizeService } from '../../services/quize.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-quize',
  templateUrl: './edit-quize.component.html',
  styleUrls: ['./edit-quize.component.css'],
})
export class EditQuizeComponent implements OnInit {
  editPostForm: FormGroup;
  id: string;

  constructor(
    private PostService: QuizeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.PostService.getAll();
    this.editPostForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
    });

    this.id = this.route.snapshot.params['id'];
    this.PostService.entities$.subscribe((posts) => {
      if (posts.length) {
        const post = posts.find((post) => post.id === this.id);
        this.editPostForm.patchValue({
          title: post.title,
          description: post.description,
        });
      }
    });
  }

  onEditPost() {
    const postData = {
      ...this.editPostForm.value,
      id: this.id,
    };

    this.PostService.update(postData);
    this.router.navigate(['/quize']);
  }
}
