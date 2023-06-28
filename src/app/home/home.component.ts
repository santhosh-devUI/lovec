import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loveCalculateForm!:FormGroup
  a:any
  b:any
count:number=0
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
this.loveCalculateForm=this.fb.group({
  name:['',[Validators.required]],
  partnerName:['',[Validators.required]]
})
  }
myName(event:any){
  this.count=0
this.a=event
}
  myPartnerName(event:any){
    this.count=0
    this.b=event
  }
  calculateLove(){
    if(this.loveCalculateForm.valid){
const firstPerson=this.a.split('').map((char:any)=>char.charCodeAt(0)).reduce((current:any,previous:any)=>previous+current)/this.a.length
const seconndPerson=this.b.split('').map((char:any)=>char.charCodeAt(0)).reduce((current:any,previous:any)=>previous+current)/this.b.length
let result=Math.trunc(100-Math.abs(firstPerson-seconndPerson)*5)

    if(this.count==result){

    }else{
      let projectcount: any = setInterval(() => {
        this.count++;
        if (this.count == result) {
          clearInterval(projectcount);
        }
      }, 10);
    }
  }else{
    alert('please enter the names')
  }
  }
}
