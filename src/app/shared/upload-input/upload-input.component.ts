import { Component, Input } from '@angular/core';
import { UploadService } from 'src/services/UploadService';

@Component({
  selector: 'app-upload-input',
  templateUrl: './upload-input.component.html',
  styleUrls: ['./upload-input.component.scss'],
})
export class UploadInputComponent {
  @Input() imageKey = '';
  @Input() parentItem:any = {};
  constructor(private uploadService: UploadService){}
  onFileChange(files: FileList | null) {
    this.uploadService.onUplaod(files, this.parentItem, this.imageKey);
  }
}
