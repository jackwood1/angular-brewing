import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class BatchService {
  batches = [];

  constructor(
    private http: HttpClient
  ) {}

  addBatch(product) {
    this.batches.push(product);
  }

  getBatches() {
    return this.batches;
  }

  clearbatches() {
    this.batches = [];
    return this.batches;
  }

  getRecentBatches() {
    return this.http.get('/assets/projects.json');
  }
}