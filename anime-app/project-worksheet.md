# Project Overview

## Project Description

This project is an anime search and explore app that let's you search by title and render the data such as image, url and name of anime series. An external link will lead you to an external site to learn more about your selection. App capabilities include adding favorites to a list, search, browse.

## Wireframes

https://res.cloudinary.com/dh122sui4/image/upload/v1569854368/Screen_Shot_2019-09-30_at_10.32.30_AM_cevzrl.png

## API Snippet
https://kitsu.io/api/edge/library-entries/45553139
```
{
    "data": {
        "id": "45553139",
        "type": "libraryEntries",
        "links": {
            "self": "https://kitsu.io/api/edge/library-entries/45553139"
        },
        "attributes": {
            "createdAt": "2019-08-20T18:32:11.365Z",
            "updatedAt": "2019-08-20T18:32:11.365Z",
            "status": "current",
            "progress": 0,
            "volumesOwned": 0,
            "reconsuming": false,
            "reconsumeCount": 0,
            "notes": null,
            "private": false,
            "reactionSkipped": "unskipped",
            "progressedAt": "2019-08-20T18:32:11.365Z",
            "startedAt": "2019-08-20T18:32:11.365Z",
            "finishedAt": null,
            "rating": "0.0",
            "ratingTwenty": null
        },
        "relationships": {
            "user": {
                "links": {
                    "self": "https://kitsu.io/api/edge/library-entries/45553139/relationships/user",
                    "related": "https://kitsu.io/api/edge/library-entries/45553139/user"
                }
            },
            "anime": {
                "links": {
                    "self": "https://kitsu.io/api/edge/library-entries/45553139/relationships/anime",
                    "related": "https://kitsu.io/api/edge/library-entries/45553139/anime"
                }
            },
            "manga": {
                "links": {
                    "self": "https://kitsu.io/api/edge/library-entries/45553139/relationships/manga",
                    "related": "https://kitsu.io/api/edge/library-entries/45553139/manga"
                }
            },
            "drama": {
                "links": {
                    "self": "https://kitsu.io/api/edge/library-entries/45553139/relationships/drama",
                    "related": "https://kitsu.io/api/edge/library-entries/45553139/drama"
                }
            },
            "review": {
                "links": {
                    "self": "https://kitsu.io/api/edge/library-entries/45553139/relationships/review",
                    "related": "https://kitsu.io/api/edge/library-entries/45553139/review"
                }
            },
            "mediaReaction": {
                "links": {
                    "self": "https://kitsu.io/api/edge/library-entries/45553139/relationships/media-reaction",
                    "related": "https://kitsu.io/api/edge/library-entries/45553139/media-reaction"
                }
            },
            "media": {
                "links": {
                    "self": "https://kitsu.io/api/edge/library-entries/45553139/relationships/media",
                    "related": "https://kitsu.io/api/edge/library-entries/45553139/media"
                }
            },
            "unit": {
                "links": {
                    "self": "https://kitsu.io/api/edge/library-entries/45553139/relationships/unit",
                    "related": "https://kitsu.io/api/edge/library-entries/45553139/unit"
                }
            },
            "nextUnit": {
                "links": {
                    "self": "https://kitsu.io/api/edge/library-entries/45553139/relationships/next-unit",
                    "related": "https://kitsu.io/api/edge/library-entries/45553139/next-unit"
                }
            }
        }
    }
}
```

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Build React app set up router, react-dom, axios using npm
- Build components for my navigation menu -- collection, search, browse
- Fetch api and render on page
- Lifecycle 
- CSS media queries for responsive design

#### PostMVP EXAMPLE

- Save favorites list to local storage or cookies
- Add more CSS continue to design layout

## React Component Hierarchy
Main component: App.js
Components folder:
Collection.js
Search.js
Browse.js

App=>Nav=>Browse=>Search=>Collection

## Priority Matrix

https://res.cloudinary.com/dh122sui4/image/upload/v1569856772/20190930_110928_veq38z.jpg

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component     |                       Description                             | 
|      ---      |                       :---:                                   |  
| App           | This is the main component that renders all child components  |
| Header        | This will render the header include the nav                   | 
| Collection    | This will render the users list of added anime                |
| Search        | This will render the form to search for title of anime series |
| Browse        | This will render a list that will hold cards of anime series  |
| Footer        | This will render the footer include the nav                   | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|Header Footer|    L   | 1hr   | 2hr   |
|  Collection |    H   | 6hr   | 7hr   |
|  Search     |    H   | 6hr   | 8hr   |
|  Browse     |    H   | 6hr   | 8hr   |
|   App       |    H   | 8hr   | 10hr  | 
|   API       |    H   | 8hr   | 10hr  |
|  Router     |    H   | 6hr   | 8hr   |
|  CSS        |    M   | 5hr   | 7hr   |
| state/props |    H   | 8hr   | 10hr  |
| Total       |    H   | 54hr  | 70hr  | 


## Additional Libraries
Axios - will be used for ajax request for api

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object