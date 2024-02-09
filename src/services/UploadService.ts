import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMAGE_CROP_SIZE, api } from 'src/settings';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = api;
  }

  uploadFile(formData: any): Observable<any> {
    return this.http.post<any>(`${this.url}/upload/upload.php`, formData);
  }

  deleteFile(fileName: string): Observable<any> {
    return this.http.get<any>(`${this.url}/upload/delete.php?file=${fileName}`);
  }

  public onUplaod = (files: FileList | null, item: any, key: string) => {
    if (!files || files.length === 0) {
      return;
    }
    Array.from(files).forEach((file: any) => {
      if (file.size < 200000000) this.uploadOriginal(file,item,key);
      else this.resizeImage(file,item,key);
    });
  };

  uploadOriginal(file: any,item: any, key: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'name',
      `tybo.${file.name.split('.')[file.name.split('.').length - 1]}`
    ); // file extention
    this.uploadFile(formData).subscribe((response) => {
      if (response && response.length > 15 && item) {
        const uri = `${this.url}/upload/${response}`;
        item[key] = uri;
        console.log(item);
        
      } else {
        alert('File too big');
      }
    });
  }

  resizeImage(file: any,item: any, key: string) {
    if (file.type.match(/image.*/) && file.type !== 'image/gif') {
      const reader = new FileReader();
      reader.onload = (readerEvent: any) => {
        const image = new Image();
        image.onload = (imageEvent) => {
          // Resize the image
          const canvas = document.createElement('canvas');
          const maxSize =  IMAGE_CROP_SIZE;
          let width = image.width;
          let height = image.height;
          if (width > height) {
            if (width > maxSize) {
              height *= maxSize / width;
              width = maxSize;
            }
          } else {
            if (height > maxSize) {
              width *= maxSize / height;
              height = maxSize;
            }
          }
          canvas.width = width;
          canvas.height = height;
          canvas.getContext('2d')?.drawImage(image, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg');
          const resizedImage = this.dataURLToBlob(dataUrl);
          let extention = 'iio.jpg';
          if (file.type === 'image/gif') {
            extention = 'iio.gif';
          }
          let fileOfBlob = new File([resizedImage], extention);
          // upload
          let formData = new FormData();
          formData.append('file', fileOfBlob);
          formData.append('name', 'iio');
          this.uploadFile(formData).subscribe((response) => {
            if (response && response.length > 15) {
                const uri = `${this.url}/upload/${response}`;
                item[key] = uri;
                console.log(item);
            }
          });
        };
        image.src = readerEvent.target.result.toString();
      };
      reader.readAsDataURL(file);
    }
  }
  dataURLToBlob(dataURL: any) {
    const BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) === -1) {
      // tslint:disable-next-line: no-shadowed-variable
      const parts = dataURL.split(',');
      // tslint:disable-next-line: no-shadowed-variable
      const contentType = parts[0].split(':')[1];
      // tslint:disable-next-line: no-shadowed-variable
      const raw = parts[1];

      return new Blob([raw], { type: contentType });
    }

    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;

    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

}
