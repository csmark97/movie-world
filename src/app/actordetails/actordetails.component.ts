import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-actordetails',
  templateUrl: './actordetails.component.html',
  styleUrls: ['./actordetails.component.css']
})
export class ActordetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ActorService, private router: Router) { }

  ngOnInit() {
    this.getDetails(this.route.snapshot.params['id']);
  }

  movie: any
  credits: any

  isLoadingResults = true;

  getDetails(id) {
    this.api.getDetails(id)
      .subscribe(data => {
        this.movie = data;
        console.log(this.movie);
        this.isLoadingResults = false;
      });
  }
}
