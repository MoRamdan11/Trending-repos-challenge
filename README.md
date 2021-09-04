# Trending-repos-challenge
It's a small webApp that list the most starred Github repos that were created in the last 30 days and view these repos details: <br />
* Repository name
* Repository description
* Number of stars for the repo.
* Number of issues for the repo.
* Username and avatar of the owner
our web-app is Responsive for all devices (Desktop, Landscape tablets, small tablets and Mobiles).

## Libraries 
* React.js:<br/>
It’s a a JavaScript library. React is fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing.<br/>
React.js uses virtual DOM which re-renders only the updated part not the whole page.
* Redux & React-Redux:<br/>
it's a state management. I used it to handle states of app like the current page and number of pages that appears in pagination.<br/>
React components by default are blind to eachother but using redux they can coonect with each other and our app become more dynamic.<br/>
Installation: 1- yarn add redux  2- yarn add react-redux
* AXIOS:<br/>
It's a JavaScript library used for making HTTP requests. I used it in our app to fetch Github APIS.<br />
Installation: yarn add axios
* Moment.js:<br/>
It's a JavaScript library used for time and dates. I used it to calculate the duartion of the repo.<br/>
Installation: yarn add moment

## How to run App in your localhost
* open git bash or hyber terminal in your device then, write `git clone https://github.com/MoRamdan11/Trending-repos-challenge.git` in your device 
* open the project folder in Visual Studio Code
* open VS-Code terminal and write `yarn install` to install all packages
* write `yarn start` and project will be openend in your localhost
