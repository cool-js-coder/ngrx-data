import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quize } from '../../model/quize';
import { QuizeService } from '../../services/quize.service';
import { QuizeBase } from '../../services/quize-base';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends QuizeBase implements OnInit {
  quize$: Observable<Quize[]>;
  constructor(private queryService: QuizeService) {
    super();
   }

  ngOnInit(): void {
    this.queryService.getAll()
    
    this.loader([this.queryService.loaded$])
    this.quize$ = this.queryService.entities$;
    
    console.log(this.quize$);
  }

  onDeletePost(event: Event, id: string) {
    event.preventDefault();
    if (confirm('Are you sure you want to delete the post')) {
      this.queryService.delete(id);
    }
  }
}
