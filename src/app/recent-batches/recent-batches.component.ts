import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as data from '../assets/projects.json';

@Component({
  selector: 'app-recent-batches',
  templateUrl: './recent-batches.component.html',
  styleUrls: ['./recent-batches.component.css']
})
export class RecentBatchesComponent implements OnInit {
  recentBrews: any = (data as any).default;

  constructor(){}

  ngOnInit(){
    console.log(data);
  }

}