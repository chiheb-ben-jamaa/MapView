
import { Injectable } from '@angular/core';

@Injectable()

export class Contact {

 

  public  static contact_array = [


    {
      "posts": [
        {
          "id": 1,
          "title": "json-server",
          "author": "typicode"
        },
        {
          "id": 2,
          "title": "json-server1",
          "author": "typicode"
        },
        {
          "id": 3,
          "title": "json-server",
          "author": "typicode"
        }
      ],
      "comments": [
        {
          "id": 1,
          "body": "some comment",
          "postId": 1
        }
      ],
      "profile": {
        "name": "typicode"
      }
    }


];



  constructor(){}
  


public static api_array=[
  
  {
    "posts": [
      {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
      },
      {
        "id": 2,
        "title": "json-server1",
        "author": "typicode"
      },
      {
        "id": 3,
        "title": "json-server2",
        "author": "typicode"
      }
    ],
    "comments": [
      {
        "id": 1,
        "body": "some comment",
        "postId": 1
      }
    ],
    "profile": {
      "name": "typicode"
    }
  }


];

  

}
