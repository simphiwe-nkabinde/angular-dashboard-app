import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-dashboard-auction-item',
  templateUrl: './dashboard-auction-item.component.html',
  styleUrls: ['./dashboard-auction-item.component.scss']
})
export class DashboardAuctionItemComponent implements OnInit {

  showImages: boolean = true;
  preview: any;
  imageInput: any;
  newImage = <HTMLInputElement>document.getElementById('new-image')

  constructor() {}

  ngOnInit(): void {
    this.preview = <HTMLInputElement>document.getElementById('img-preview');
    this.imageInput = <HTMLInputElement>document.getElementById("image-input");
  }

  handleFiles(event: any) {
    let file = event.target.files[0]

    const div: any = document.createElement("div");
    const para: any = document.createElement("p");
    const img: any = document.createElement("img");

    img.classList.add("preview-thumbnail");
    img.file = file;
    img.style.width = '8rem';
    img.style.height = '8rem';
    img.style.margin = '5px';
    img.style.border = '1px #dee2e6 solid';
    img.style.borderRadius = '5px';
    img.style.padding = '5px';

    para.innerText = `${file.name}`;
    para.style.width = '8rem';
    para.style.fontSize = '10px';
    para.style.color = '#9e9e9e';

    div.style.alignText = 'center'

    div.appendChild(img);
    div.appendChild(para);
    this.preview.appendChild(div)

    const reader = new FileReader();
    reader.onload = ((aImg) => {
       return (event: any) => { aImg.src = event.target.result; }; 
      })(img);
    reader.readAsDataURL(file);
  }

  addImageClick() {
    this.imageInput.click()
  }

  toggleImagesDisplay() {
    this.showImages = !this.showImages
  }
}
