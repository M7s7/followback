<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/M7s7/followback">
    <img src="https://i.ibb.co/6BGCCgB/followback-logo.png">
  </a>

<h3 align="center">followback</h3>

  <p align="center">
    An app that fetches the common friends and mutually mentioned tweets between two Twitter users.
    <br />
    <a href="https://followback.fly.dev"><strong>View Demo on fly.io »</strong></a>
    <br />
    <br />
    <a href="https://github.com/M7s7/followback/issues">Report Bug or Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary align><b>Table of Contents</b></summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
      <ul>
        <li><a href="#limitations">Limitations</a></li>
      </ul>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About
<div align="center">
  <img src="https://i.ibb.co/ZSxcGrB/followback-demo.gif" width="80%"/>
</div>

Followback uses the Twitter API to get the following information about users:
* recent tweets (ie. last 7 days)
* 'friends' list (ie. accounts that the user follows).

Given two usernames, followback will return:
* whether or not the users follow each other
* a list of mutual friends between the two users (ie. accounts which both users follow)
* any recent tweets which one user mentioned the other, and vice versa.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
* [![React][React.js]][React-url] 
* [![Node][Node.js]][Node.js-url]
* [![Express][Express.js]][Express.js-url]
* [![Chakra][Chakra.ui]][Chakra.ui-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps.

1. Get a free user Access Token by signing up to the Twitter Developer Platform ([Getting Started Documentation](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api))
2. Clone the repo
   ```sh
   git clone https://github.com/M7s7/followback.git
   ```
3. Install NPM packages in the `frontend` and `server` folders
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
The app is now ready for deployment. Use `npm start` to launch the frontend, and `node index.js` to launch the server.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The 'About' section of this `readme` has a good demonstration of how the app works.

### Limitations
Given the stringent [rate limits for the Twitter API](https://developer.twitter.com/en/docs/twitter-api/rate-limits), only 7 unique requests can be made in any 15 minute interval. The API restrictions also mean that: 
* maximum friends list size for each user that followback can look through is **5,000**
* maximum mutual friends size that can be returned in list form is **100**
* maximum age of tweets searched is **7 days old**.

Occasionally, followback will provide a 'Something went wrong' error. This error may be caused by, among other things:
* the rate limit being reached
* an invalid username
* a suspended username.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Specific error codes to replace 'Something went wrong', to provide better troubleshooting
- [ ] Support for other social media platforms
- [ ] Pagination functionality with Twitter's API to increase the limit on friends searched and mutual friends returned
- [ ] Improved styling, including dark mode

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing
If you have a suggestion to improve this project, please fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Alternatively, open an issue with the tag "suggestion".

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Chakra.ui]: https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white
[Chakra.ui-url]: https://chakra-ui.com/
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
