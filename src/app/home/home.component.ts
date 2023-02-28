import { Lexer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  messages:string[] = [];
  services:string[] = [];
  feedbackEnabled: boolean = false;

  constructor(private predict: GetDataService ) { }

  ngOnInit(): void {
    this.GetTime();
  }

  GetData() {
    this.predict.getData().subscribe((data)=>{
      this.messages = data.messages;
      this.feedbackEnabled = data.feedbackEnabled;
      this.services = data.services;

      if(this.messages == data.messages && this.services == data.services) {
        alert("Sem novos dados")
      } else alert("Novos dados carregados");
    })
  }

  GetTime() {
    this.GetData()
    setInterval(() => {
      this.GetData()
    }, 30000)
  }

}
