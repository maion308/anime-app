# anime-app
discover, search your favorite anime series

# Project Overview

## Project Description

This project is an anime search and explore app that let's you search by title and render the data such as image, url and name of anime series. An external link will lead you to an external site to learn more about your selection. App capabilities include adding favorites to a list, search, browse.

## Wireframes

https://res.cloudinary.com/dh122sui4/image/upload/v1569854368/Screen_Shot_2019-09-30_at_10.32.30_AM_cevzrl.png

## API Snippet
https://kitsu.io/api/edge/library-entries/45553139
```
https://kitsu.io/api/edge/library-entries/45553139/anime
App.js:19 
{data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
config: {url: "https://kitsu.io/api/edge/library-entries/45553139/anime", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
data:
data:
attributes:
abbreviatedTitles: (4) ["Yugioh", "Yuu Gi Ou! Zexal", "Yu-Gi-Oh! Zeal", "Yu-Gi-Oh! Zexal"]
ageRating: "PG"
ageRatingGuide: "Teens 13 or older"
averageRating: "60.21"
canonicalTitle: "Yu☆Gi☆Oh! Zexal"
coverImage: {tiny: "https://media.kitsu.io/anime/cover_images/5995/small.jpg", small: "https://media.kitsu.io/anime/cover_images/5995/small.jpg", large: "https://media.kitsu.io/anime/cover_images/5995/small.jpg", original: "https://media.kitsu.io/anime/cover_images/5995/original.png", meta: {…}}
coverImageTopOffset: 170
createdAt: "2013-02-20T17:32:41.171Z"
endDate: "2012-09-24"
episodeCount: 73
episodeLength: 21
favoritesCount: 22
nextRelease: null
nsfw: false
popularityRank: 2275
posterImage: {tiny: "https://media.kitsu.io/anime/poster_images/5995/tiny.jpg?1408457139", small: "https://media.kitsu.io/anime/poster_images/5995/small.jpg?1408457139", medium: "https://media.kitsu.io/anime/poster_images/5995/medium.jpg?1408457139", large: "https://media.kitsu.io/anime/poster_images/5995/large.jpg?1408457139", original: "https://media.kitsu.io/anime/poster_images/5995/original.jpg?1408457139", …}
ratingFrequencies: {2: "63", 3: "0", 4: "80", 5: "0", 6: "76", 7: "2", 8: "174", 9: "4", 10: "195", 11: "4", 12: "288", 13: "5", 14: "276", 15: "4", 16: "124", 17: "3", 18: "53", 19: "1", 20: "127"}
ratingRank: 7764
showType: "TV"
slug: "yu-gi-oh-zexal"
startDate: "2011-04-11"
status: "finished"
subtype: "TV"
synopsis: "Yu☆Gi☆Oh! Zexal follows the adventures of Yuuma Tsukumo in his hometown, the futuristic city of Heartland. Yuuma is an amateur duelist who wants to become the world's greatest Duel Monsters champion, having learned the basics of dueling from his father who disappeared long ago under mysterious circumstances. Always pushing himself to the limit in order to prove himself, Yuuma soon finds himself outmatched when dueling a bully to recover his friend's stolen cards. Just as hope seems lost, a mysterious spirit named Astral appears and helps Yuuma to win the duel.
↵Astral explains that his memories have been lost and split into 99 cards called Numbers that have been scattered all over the world. These Numbers are extremely dangerous; each card has a will of its own and can possess any duelist who uses it by bringing out the deepest, and often darkest, desires of that person's heart. Seeing that Astral is a skilled duelist and wanting to better himself, Yuuma reluctantly agrees to assist Astral in recovering the Numbers. But Yuuma and Astral are not the only Number Hunters out there and many of the other parties seeking these powerful cards have much more malicious desires than recovering lost memories."
tba: null
titles: {en: "Yu-Gi-Oh! Zexal", en_jp: "Yu☆Gi☆Oh! Zexal", en_us: "Yu-Gi-Oh! Zexal", ja_jp: "遊☆戯☆王ZEXAL"}
totalLength: 169
updatedAt: "2019-09-30T18:00:05.128Z"
userCount: 3140
youtubeVideoId: "7bkEzfNgjlE"
__proto__: Object
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
|Header Footer|    L   | 1hr   | 2hr   | 	2hr
|  Collection |    H   | 6hr   | 7hr   | 	5hr
|  Search     |    H   | 6hr   | 8hr   |	5hr
|  Browse     |    H   | 6hr   | 8hr   |	5hr
|   App       |    H   | 8hr   | 10hr  | 	5hr
|   API       |    H   | 8hr   | 10hr  |	5hr
|  Router     |    H   | 6hr   | 8hr   |	1hr
|  CSS        |    M   | 5hr   | 7hr   |	2hr
| state/props |    H   | 8hr   | 10hr  |	4hr
| Total       |    H   | 54hr  | 70hr  | 	34hr


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