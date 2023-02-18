import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http: HttpClient) {}
  ngOnInit(){
  }

  submitForm(value: any): void {
    // this.http
    //   .post('http://127.0.0.1:8000/api/api_1', value)
    //   .subscribe({
    //     next: (response) => console.log(response),
    //     error: (error) => console.log(error),
    //   });
    if(value.name != '' && value.email != '' && value.number != '' && value.msg != '' ){
      alert('Hey ' + value.name + ', Thank yo for contacting Us.... Your Email: ' + value.email + ', Mobile Number: ' + value.number + ', Message is: ' + value.msg);
    }
  }

}
