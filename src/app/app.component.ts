import { Component, OnInit } from '@angular/core';
import { userDataService } from './user.service'
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: any[], field: string): any[] {
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: Array<any> = [];
  repo:Array<any>=[];
  usersc:Array<any>=[];
  dropdown=1;
  language:Array<any>=[];
  count=0;
  isDesc: boolean = false;
  column: string = 'login';
  p: number = 1;
  order = "login";
ascending = true;
  sortarr=[{'id':1,name:'Sort by Name(A - Z)'},
  {'id':2,name:'Sort by Name(Z - A)'}]
  
  constructor(private userService: userDataService) {
  }
  ngOnInit() {
   // $('.collapse').collapse();
    this.userService.getUsers().subscribe((res:any) => {
      this.users = res;
    console.log(typeof(this.users))
    });
    this.userService.getUsercount().subscribe((res:any)=>{
      this.usersc=res
      this.count=this.usersc.length
    })
  }
 getrepo(user){
   this.repo=[];
   this.userService.getUserrepo(user).subscribe((res:any)=>{
      this.repo.push(res);
      //console.log(this.repo)
      this.getlanguage(user,res)
 })
 }
getlanguage(user,rep){
  this.language=[];
    for(let j=0;j<rep.length;j++){
   this.userService.getlanguages(user,rep[j].name).subscribe((res:any)=>{
  this.language.push(res);
  console.log("la"+this.language)
   })
   }
   }
// setSearch(text,dd){
//   if(text==undefined && dd!=undefined){
//     if(dd==1)
//    this.sort(this.column);
//    else{
//      this.isDesc=true;
//      this.sort(this.column);
//    }
//   }
//   if(text!=undefined){

//   }
// }
sort(){
  console.log("asa"+this.dropdown)
  if(this.dropdown==1)
  this.ascending=true;
  else
  this.ascending=false;
}

// sort(property) {
//     this.isDesc = !this.isDesc; //change the direction    
//     this.column = property;
//     let direction = this.isDesc ? 1 : -1;

//     this.users.sort(function (a, b) {
//       if (a[property] < b[property]) {
//         return -1 * direction;
//       }
//       else if (a[property] > b[property]) {
//         return 1 * direction;
//       }
//       else {
//         return 0;
//       }
//     });
//   };
}
