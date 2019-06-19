import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class userDataService {
  constructor(private http: HttpClient) { }
  //https://api.github.com/repos/${username}/asteroids/languages`${this.apiUrl}/users`
   //apiUrl = 'https://api.github.com';
   user=[
  {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "repos": [
    {
        "id": 26899533,
        "node_id": "MDEwOlJlcG9zaXRvcnkyNjg5OTUzMw==",
        "name": "30daysoflaptops.github.io",
        "full_name": "mojombo/30daysoflaptops.github.io",
        "private": false,
        "owner": {
            "login": "mojombo",
        },
        "open_issues_count": 0,
        "forks": 2,
        "open_issues": 0,
        "watchers": 5,
		"languages":"css,Javascript"
	},
    {
        "id": 17358646,
        "node_id": "MDEwOlJlcG9zaXRvcnkxNzM1ODY0Ng==",
        "name": "asteroids",
        "full_name": "mojombo/asteroids",
        "private": false,
        "owner": {
            "login": "mojombo"
        },
        "forks": 13,
        "open_issues": 3,
        "watchers": 97,
        "default_branch": "master",
		"languages":"ruby,python"
    },
    {
        "id": 29941343,
        "node_id": "MDEwOlJlcG9zaXRvcnkyOTk0MTM0Mw==",
        "name": "benbalter.github.com",
        "full_name": "mojombo/benbalter.github.com",
        "private": false,
        "owner": {
            "login": "mojombo"
        },
        "open_issues_count": 0,
        "license": null,
        "forks": 6,
        "open_issues": 0,
        "watchers": 4,
        "default_branch": "master",
		"languages":"angular,Javascript"
    }],
  }]
//   ,
//   {
//     "login": "defunkt",
//     "id": 2,
//     "node_id": "MDQ6VXNlcjI=",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
//     "url": "https://api.github.com/users/defunkt",
//     "html_url": "https://github.com/defunkt",
//     "repos_url": "https://api.github.com/users/defunkt/repos"
//   },
//   {
//     "login": "pjhyett",
//     "id": 3,
//     "node_id": "MDQ6VXNlcjM=",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
//     "url": "https://api.github.com/users/pjhyett",
//     "html_url": "https://github.com/pjhyett",
//     "repos_url": "https://api.github.com/users/pjhyett/repos",
//   },
//   {
//     "login": "wycats",
//     "id": 4,
//     "node_id": "MDQ6VXNlcjQ=",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/4?v=4",
    
//     "url": "https://api.github.com/users/wycats",
//     "html_url": "https://github.com/wycats",
//     "repos_url": "https://api.github.com/users/wycats/repos"
//   },
//   {
//     "login": "ezmobius",
//     "id": 5,
//     "node_id": "MDQ6VXNlcjU=",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/5?v=4",
//     "url": "https://api.github.com/users/ezmobius",
//     "html_url": "https://github.com/ezmobius",
//     "repos_url": "https://api.github.com/users/ezmobius/repos"
//   },
//   {
//     "login": "ivey",
//     "id": 6,
//     "node_id": "MDQ6VXNlcjY=",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/6?v=4",
//     "url": "https://api.github.com/users/ivey",
//     "html_url": "https://github.com/ivey",
//     "repos_url": "https://api.github.com/users/ivey/repos"
//   },
//   {
//     "login": "evanphx",
//     "id": 7,
//     "node_id": "MDQ6VXNlcjc=",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/7?v=4",
//     "repos_url": "https://api.github.com/users/evanphx/repos",
//     "url": "https://api.github.com/users/evanphx",
//     "html_url": "https://github.com/evanphx"
//   },
//   {
//     "login": "vanpelt",
//     "id": 8,
//     "node_id": "MDQ6VXNlcjE3",
//     "avatar_url": "https://avatars1.githubusercontent.com/u/17?v=4",
//     "repos_url": "https://api.github.com/users/vanpelt/repos",
//     "url": "https://api.github.com/users/vanpelt",
//     "html_url": "https://github.com/vanpelt"
//   },
//   {
//     "login": "wayneeseguin",
//     "id": 9,
//     "node_id": "MDQ6VXNlcjE4",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/18?v=4",
//     "repos_url": "https://api.github.com/users/wayneeseguin/repos",
//     "url": "https://api.github.com/users/wayneeseguin",
//     "html_url": "https://github.com/wayneeseguin"
//   },
//   {
//     "login": "brynary",
//     "id": 10,
//     "node_id": "MDQ6VXNlcjE5",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/19?v=4",
//     "repos_url": "https://api.github.com/users/brynary/repos",
//     "url": "https://api.github.com/users/brynary",
//     "html_url": "https://github.com/brynary"
//   },
//   {
//     "login": "kevinclark",
//     "id": 11,
//     "node_id": "MDQ6VXNlcjIw",
//     "avatar_url": "https://avatars3.githubusercontent.com/u/20?v=4",
//     "repos_url": "https://api.github.com/users/kevinclark/repos",
//     "url": "https://api.github.com/users/kevinclark",
//     "html_url": "https://github.com/kevinclark"
//   },
//   {
//     "login": "technoweenie",
//     "id": 12,
//     "node_id": "MDQ6VXNlcjIx",
//     "avatar_url": "https://avatars3.githubusercontent.com/u/21?v=4",
//     "repos_url": "https://api.github.com/users/technoweenie/repos",
//     "url": "https://api.github.com/users/technoweenie",
//     "html_url": "https://github.com/technoweenie"
//   },
//   {
//     "login": "macournoyer",
//     "id": 13,
//     "node_id": "MDQ6VXNlcjIy",
//     "avatar_url": "https://avatars3.githubusercontent.com/u/22?v=4",
//     "url": "https://api.github.com/users/macournoyer",
//     "html_url": "https://github.com/macournoyer",
//     "repos_url": "https://api.github.com/users/macournoyer/repos",
//   },
//   {
//     "login": "takeo",
//     "id": 14,
//     "node_id": "MDQ6VXNlcjIz",
//     "avatar_url": "https://avatars3.githubusercontent.com/u/23?v=4",
//     "url": "https://api.github.com/users/takeo",
//     "html_url": "https://github.com/takeo",
//     "repos_url": "https://api.github.com/users/takeo/repos",
    
//   },
//   {
//     "login": "caged",
//     "id": 15,
//     "node_id": "MDQ6VXNlcjI1",
//     "avatar_url": "https://avatars3.githubusercontent.com/u/25?v=4",
//     "url": "https://api.github.com/users/caged",
//     "html_url": "https://github.com/caged",
//     "repos_url": "https://api.github.com/users/caged/repos",
//   },
//   {
//     "login": "topfunky",
//     "id": 16,
//     "node_id": "MDQ6VXNlcjI2",
//     "avatar_url": "https://avatars3.githubusercontent.com/u/26?v=4",
//     "url": "https://api.github.com/users/topfunky",
//     "html_url": "https://github.com/topfunky",
//     "repos_url": "https://api.github.com/users/topfunky/repos"
//   },
//   {
//     "login": "anotherjesse",
//     "id": 17,
//     "node_id": "MDQ6VXNlcjI3",
//     "avatar_url": "https://avatars3.githubusercontent.com/u/27?v=4",
//      "url": "https://api.github.com/users/anotherjesse",
//     "html_url": "https://github.com/anotherjesse",
//     "repos_url": "https://api.github.com/users/anotherjesse/repos"
//   },
//   {
//     "login": "roland",
//     "id": 18,
//     "node_id": "MDQ6VXNlcjI4",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/28?v=4",
//      "url": "https://api.github.com/users/roland",
//     "html_url": "https://github.com/roland",
//     "repos_url": "https://api.github.com/users/roland/repos"
//   },
//   {
//     "login": "lukas",
//     "id": 19,
//     "node_id": "MDQ6VXNlcjI5",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/29?v=4",
//     "repos_url": "https://api.github.com/users/lukas/repos",
//     "url": "https://api.github.com/users/lukas",
//     "html_url": "https://github.com/lukas"
//   },
//   {
//     "login": "fanvsfan",
//     "id": 20,
//     "node_id": "MDQ6VXNlcjMw",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/30?v=4",
//     "url": "https://api.github.com/users/fanvsfan",
//     "html_url": "https://github.com/fanvsfan",
//     "repos_url": "https://api.github.com/users/fanvsfan/repos",
//   },
//   {
//     "login": "tomtt",
//     "id": 21,
//     "node_id": "MDQ6VXNlcjMx",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/31?v=4",
//     "url": "https://api.github.com/users/tomtt",
//     "html_url": "https://github.com/tomtt",
//     "repos_url": "https://api.github.com/users/tomtt/repos",
 
//   },
//   {
//     "login": "railsjitsu",
//     "id": 22,
//     "node_id": "MDQ6VXNlcjMy",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/32?v=4",
//     "url": "https://api.github.com/users/railsjitsu",
//     "html_url": "https://github.com/railsjitsu",
//     "repos_url": "https://api.github.com/users/railsjitsu/repos",
  
//   },
//   {
//     "login": "nitay",
//     "id": 23,
//     "node_id": "MDQ6VXNlcjM0",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/34?v=4",
//     "repos_url": "https://api.github.com/users/nitay/repos",
//     "url": "https://api.github.com/users/nitay",
//     "html_url": "https://github.com/nitay"
//   },
//   {
//     "login": "kevwil",
//     "id": 24,
//     "node_id": "MDQ6VXNlcjM1",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/35?v=4",
//     "url": "https://api.github.com/users/kevwil",
//     "html_url": "https://github.com/kevwil",
//     "repos_url": "https://api.github.com/users/kevwil/repos"
//   },
//   {
//     "login": "KirinDave",
//     "id": 25,
//     "node_id": "MDQ6VXNlcjM2",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/36?v=4",
//     "url": "https://api.github.com/users/KirinDave",
//     "html_url": "https://github.com/KirinDave",
//     "repos_url": "https://api.github.com/users/KirinDave/repos",
//   },
//   {
//     "login": "jamesgolick",
//     "id": 26,
//     "node_id": "MDQ6VXNlcjM3",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/37?v=4",
//     "url": "https://api.github.com/users/jamesgolick",
//     "html_url": "https://github.com/jamesgolick",
//     "repos_url": "https://api.github.com/users/jamesgolick/repos"
//   },
//   {
//     "login": "atmos",
//     "id": 27,
//     "node_id": "MDQ6VXNlcjM4",
//     "avatar_url": "https://avatars3.githubusercontent.com/u/38?v=4",
//     "url": "https://api.github.com/users/atmos",
//     "html_url": "https://github.com/atmos",
//     "repos_url": "https://api.github.com/users/atmos/repos"
//   },
//   {
//     "login": "errfree",
//     "id": 28,
//     "node_id": "MDEyOk9yZ2FuaXphdGlvbjQ0",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/44?v=4",
//     "url": "https://api.github.com/users/errfree",
//     "html_url": "https://github.com/errfree",
//     "repos_url": "https://api.github.com/users/errfree/repos",
//   },
//   {
//     "login": "mojodna",
//     "id": 29,
//     "node_id": "MDQ6VXNlcjQ1",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/45?v=4",
//     "url": "https://api.github.com/users/mojodna",
//     "html_url": "https://github.com/mojodna",
//     "repos_url": "https://api.github.com/users/mojodna/repos"
//   },
//   {
//     "login": "bmizerany",
//     "id": 30,
//     "node_id": "MDQ6VXNlcjQ2",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/46?v=4",
//     "url": "https://api.github.com/users/bmizerany",
//     "html_url": "https://github.com/bmizerany",
//     "repos_url": "https://api.github.com/users/bmizerany/repos"
//   }
// ]
  //tempurl='./app/user.json'
  getUsers() {
    return of(this.user);
  }

  getUsercount() {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getUserrepo(username: any) {
    return this.http.get(`${this.apiUrl}/users/${username}/repos`);
  }

  getlanguages(username:any,repo:any){
    return this.http.get(`${this.apiUrl}/repos/${username}/${repo}/languages`);
  }
}
