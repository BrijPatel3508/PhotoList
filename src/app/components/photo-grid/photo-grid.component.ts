import { Component, OnInit, ViewChild } from '@angular/core';
import { IPhoto } from 'src/app/interfaces/photo.interface';
import { MasterDataService } from 'src/app/services/master-data.service';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit {

  photos: Promise<IPhoto[]>;
  photosToCompare: IPhoto[] = [];

  constructor(
    private masterDataService: MasterDataService
  ) { }

  ngOnInit(): void {
    this.photos = this.masterDataService.getPhotos();
  }

  onAction(photo: IPhoto) {
    if (photo.isComparing) {
      const photoIndex = this.photosToCompare.findIndex(photoToCompare => photoToCompare.id === photo.id);
      this.photosToCompare.splice(photoIndex, 1);
      this.photosToCompare = [...this.photosToCompare];
    } else {
      this.photosToCompare = [...this.photosToCompare, photo];
    }
    photo.isComparing = !photo.isComparing;
  }

}
