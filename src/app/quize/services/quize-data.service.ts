import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data'
import { Observable } from 'rxjs';
import { Quize } from '../model/quize';
import { map } from 'rxjs/operators';
import { Update } from '@ngrx/entity';

@Injectable()
export class QuizeDataService extends DefaultDataService<Quize> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Quize', http, httpUrlGenerator);
    }

    getAll(): Observable<Quize[]> {
        return this.http.get(`/posts.json`).pipe(
            map((data) => {
            const posts: Quize[] = [];
            for (let key in data) {
                posts.push({ ...data[key], id: key });
            }
            return posts;
            })
        );
    }

    add(post: Quize): Observable<Quize> {
        return this.http
          .post<{ name: string }>(
            `/posts.json`,
            post
          )
          .pipe(
            map((data) => {
              return { ...post, id: data.name };
            })
          );
      }
    
      update(post: Update<Quize>): Observable<Quize> {
        return this.http.put<Quize>(
          `/posts/${post.id}.json`,
          { ...post.changes }
        );
      }
    
      delete(id: string): Observable<string> {
        return this.http
          .delete(`/posts/${id}.json`)
          .pipe(
            map((data) => {
              return id;
            })
          );
      }
}