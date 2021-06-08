import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrls: ['./reach.component.css']
})
export class ReachComponent implements OnInit {

  name:any;
  contact:any;
  email:any;

  constructor(private form:FormBuilder, private service:DataserviceService) { }

    register = this.form.group({
      name:['',[Validators.required]],
      contact:['',[Validators.required,Validators.pattern('[7-9]{1}[0-9]{9}')]],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });

    public errMsg = {
      name:[
        {type:'required', message:'Enter only characters..!'}
    ],
    contact: [
      { type: 'required', message: 'This field can not be blank' },
      { type: 'pattern', message: 'Please enter a valid mobile no' }
    ],
    email: [
      { type: 'required', message: 'This field can not be blank' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ]};

    async registered(){
      let data = {
        name:this.register.get('name').value,
        contact:this.register.get('contact').value,
        email:this.register.get('email').value
      }
      console.log('Value',JSON.stringify(data));
      this.service.getData(data).subscribe(e => {
        console.log(e);
      })
    }

  ngOnInit(): void {
  }

  
}
