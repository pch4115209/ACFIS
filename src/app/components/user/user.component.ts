import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  users:User[];
  isEdit: boolean ; false;

  constructor(private dataService: DataService) {
      console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.name = 'World!!!!';
    this.age = 25;
    this.email = 'test@example.com';
    this.address = {
        street: '11 Test st',
        city: 'Test',
        state: 'SA'
    }

    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];

    this.dataService.getUsers().subscribe((users) => {
        this.users = users;
    })
  }

  onClick(){
      this.name = 'Peter';
      this.hobbies.push('Play basketball');
  }

  addHobby(hobby){
      this.hobbies.unshift(hobby);
      return false;
  }

  removeHobby(index){
      this.hobbies.splice(index, 1);
      return false;
  }

  toggleEdit(){
     this.isEdit = !this.isEdit;
  }
}

interface Address{
    street: string,
    city: string,
    state: string
}


interface User{
    id: number,
    name: string,
    username: string,
    email:  string,
    address: string,
    phone: string
}