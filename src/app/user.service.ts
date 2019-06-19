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
  },
  {
    "login": "defunkt",
    "id": 2,
    "node_id": "MDQ6VXNlcjI=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
    "url": "https://api.github.com/users/defunkt",
    "html_url": "https://github.com/defunkt",
    "repos": [
    {
        "id": 1861402,
        "node_id": "MDEwOlJlcG9zaXRvcnkxODYxNDAy",
        "name": "ace",
        "full_name": "defunkt/ace",
        "private": false,
        "owner": {
            "login": "defunkt"
        },
        "forks": 5,
        "open_issues": 0,
        "watchers": 14,
        "default_branch": "master",
		"languages":"Html,css"
    },
    {
        "id": 3594,
        "node_id": "MDEwOlJlcG9zaXRvcnkzNTk0",
        "name": "acts_as_textiled",
        "full_name": "defunkt/acts_as_textiled",
        "private": false,
        "owner": {
            "login": "defunkt"
        },
        "forks": 34,
        "open_issues": 4,
        "watchers": 115,
        "default_branch": "master",
		"languages":"PHP"
    }]
}
,
  {
    "login": "pjhyett",
    "id": 3,
    "node_id": "MDQ6VXNlcjM=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
    "url": "https://api.github.com/users/pjhyett",
    "html_url": "https://github.com/pjhyett",
    "repos":[
    {
        "id": 4061,
        "node_id": "MDEwOlJlcG9zaXRvcnk0MDYx",
        "name": "auto_migrations",
        "full_name": "pjhyett/auto_migrations",
        "private": false,
        "owner": {
            "login": "pjhyett"
        },
        "forks": 39,
        "open_issues": 1,
        "watchers": 146,
        "default_branch": "master",
		"languages":"Coffeescript"
    },
    {
        "id": 112071,
        "node_id": "MDEwOlJlcG9zaXRvcnkxMTIwNzE=",
        "name": "blackjax",
        "full_name": "pjhyett/blackjax",
        "private": false,
        "owner": {
            "login": "pjhyett"
        },
        "open_issues_count": 0,
        "license": null,
        "forks": 10,
        "open_issues": 0,
        "watchers": 9,
        "default_branch": "master",
		"languages":"java"
    }]
   },
  {
    "login": "wycats",
    "id": 4,
    "node_id": "MDQ6VXNlcjQ=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/4?v=4",
    "url": "https://api.github.com/users/wycats",
    "html_url": "https://github.com/wycats",
    "repos":[
    {
        "id": 1119731,
        "node_id": "MDEwOlJlcG9zaXRvcnkxMTE5NzMx",
        "name": "abbot-from-scratch",
        "full_name": "wycats/abbot-from-scratch",
        "private": false,
        "owner": {
            "login": "wycats"
        },
        "forks": 4,
        "open_issues": 1,
        "watchers": 8,
        "default_branch": "master",
		    "languages":"Typescript"
    },
    {
        "id": 911701,
        "node_id": "MDEwOlJlcG9zaXRvcnk5MTE3MDE=",
        "name": "abbot-ng",
        "full_name": "wycats/abbot-ng",
        "private": false,
        "owner": {
            "login": "wycats"
        },
        "open_issues_count": 0,
        "license": null,
        "forks": 2,
        "open_issues": 0,
        "watchers": 2,
        "default_branch": "master",
		    "languages":"javascript"        
    }]
   },
  {
    "login": "ezmobius",
    "id": 5,
    "node_id": "MDQ6VXNlcjU=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/5?v=4",
    "url": "https://api.github.com/users/ezmobius",
    "html_url": "https://github.com/ezmobius",
    "repos_url": "https://api.github.com/users/ezmobius/repos"
  },
  {
    "login": "ivey",
    "id": 6,
    "node_id": "MDQ6VXNlcjY=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/6?v=4",
    "url": "https://api.github.com/users/ivey",
    "html_url": "https://github.com/ivey",
    "repos_url": "https://api.github.com/users/ivey/repos"
  },
  {
    "login": "evanphx",
    "id": 7,
    "node_id": "MDQ6VXNlcjc=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/7?v=4",
    "repos_url": "https://api.github.com/users/evanphx/repos",
    "url": "https://api.github.com/users/evanphx",
    "html_url": "https://github.com/evanphx"
  },
  {
    "login": "vanpelt",
    "id": 8,
    "node_id": "MDQ6VXNlcjE3",
    "avatar_url": "https://avatars1.githubusercontent.com/u/17?v=4",
    "repos_url": "https://api.github.com/users/vanpelt/repos",
    "url": "https://api.github.com/users/vanpelt",
    "html_url": "https://github.com/vanpelt"
  },
  {
    "login": "wayneeseguin",
    "id": 9,
    "node_id": "MDQ6VXNlcjE4",
    "avatar_url": "https://avatars0.githubusercontent.com/u/18?v=4",
    "repos_url": "https://api.github.com/users/wayneeseguin/repos",
    "url": "https://api.github.com/users/wayneeseguin",
    "html_url": "https://github.com/wayneeseguin"
  },
  {
    "login": "brynary",
    "id": 10,
    "node_id": "MDQ6VXNlcjE5",
    "avatar_url": "https://avatars0.githubusercontent.com/u/19?v=4",
    "repos_url": "https://api.github.com/users/brynary/repos",
    "url": "https://api.github.com/users/brynary",
    "html_url": "https://github.com/brynary"
  }]
  
  getUsers() {
    return of(this.user);
  }

  // getUsercount() {
  //   return this.http.get(`${this.apiUrl}/users`);
  // }
  // getUserrepo(username: any) {
  //   return this.http.get(`${this.apiUrl}/users/${username}/repos`);
  // }

  // getlanguages(username:any,repo:any){
  //   return this.http.get(`${this.apiUrl}/repos/${username}/${repo}/languages`);
  // }
}
