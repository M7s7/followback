# Followback

An app that fetches the common friends and mutually mentioned tweets between two Twitter users.
    <br />
    <a href="https://followback.fly.dev"><strong>View Demo on fly.io »</strong></a>
    <br />

## Description

Followback uses the Twitter API to get the following information about users:
* recent tweets (ie. last 7 days)
* 'friends' list (ie. accounts that the user follows).

Given two usernames, followback will return:
* whether or not the users follow each other
* a list of mutual friends between the two users (ie. accounts which both users follow)
* a list of any recent tweets which one user mentioned the other, and vice versa.

Followback is built using React and Express.js, and uses styled components from the Chakra UI library. 

<div align="center">
  <img src="https://i.ibb.co/ZSxcGrB/followback-demo.gif" width="50%"/>
</div>

## Getting Started

### Installing
1. Get a free user Access Token by signing up to the Twitter Developer Platform ([Getting Started Documentation](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api)).
2. Clone the repo:
   ```sh
   git clone https://github.com/M7s7/followback.git
   ```
3. Install dependencies in the `frontend` and `server` folders
   ```sh
   cd followback/frontend
   npm install
   cd ../server
   npm install
   ```
4. Create a `.env` file in the roots of both the `frontend` and `server` folders
5. Enter your access token in `.env` in the `server` folder:
   ```
   BEARER_TOKEN = 'ENTER_TOKEN';
   ```
6. Enter your base server address in `.env` in the `frontend` folder. For example:
   ```
   REACT_APP_SERVER_URL = "http://localhost:3001"
   ```
	
### Executing program
The app is now ready for deployment. Use `npm start` to launch the client and `node index.js` to launch the server.

## Roadmap

* Specific error codes to replace 'Something went wrong', to provide better troubleshooting
* Support for other social media platforms
* Pagination functionality with Twitter's API to increase the limit on friends searched and mutual friends returned
* Improved styling, including dark mode

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
