import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'page-dashboard-auction-details',
  templateUrl: './dashboard-auction-details.component.html',
  styleUrls: ['./dashboard-auction-details.component.scss']
})
export class DashboardAuctionDetailsComponent implements OnInit, OnDestroy  {
  detailsEditor: Editor = new Editor;
  termsEditor: Editor = new Editor;
  html = '';

  showDocuments: boolean = true;
  showDetails: boolean = true;
  showTerms: boolean = true;

  preview: any;
  docInput: any;
  newImage = <HTMLInputElement>document.getElementById('new-image')


  constructor() { }

  ngOnInit(): void {
    // this.preview = <HTMLInputElement>document.getElementById('doc-preview');
    // this.docInput = <HTMLInputElement>document.getElementById("doc-input");
  }

  ngOnDestroy(): void {
    this.detailsEditor?.destroy();
    this.termsEditor?.destroy();
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

  addDocClick() {
    this.preview = <HTMLInputElement>document.getElementById('doc-preview');
    this.docInput = <HTMLInputElement>document.getElementById("doc-input");
    this.docInput.click()
  }

  showHideSection(section: string) {
    switch (section) {
      case 'documents':
        this.showDocuments = !this.showDocuments
        break;
      case 'details':
        this.showDetails = !this.showDetails;
        break;
      case 'terms':
        this.showTerms = !this.showTerms;
        break;
    }
  }

}
