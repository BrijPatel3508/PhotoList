import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhoto } from '../interfaces/photo.interface';
import { environment } from 'src/environments/environment';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async getPhotos() {
    return await this.httpClient.get<IPhoto[]>(`${environment.getPhotosAPI}`)
      .pipe(
        retry(3),
        map(response => {
          return response.map(r => {
            return { ...r, isComparing: false }
          })
        })
      ).toPromise();
  }
}
