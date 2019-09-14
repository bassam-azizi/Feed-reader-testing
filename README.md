# Feed Reader Testing
## Table of Contents

- [Project Overview](#Project)
- [Technologies used in this project](#Technologies)
- [Project structure](#Structure)
- [Usage](#Usage)

# Project Overview

+ This project is part of udacity's fourth project task, in the fend programs, and it's about testing the functionality of an asynchrounous web application that load some feeds and expose them as header lines, and in everytime there is a load that load new feeds and change theese header's content, You just can imagine't as a modern electornic news platform.

# Technologies used in this project

+ In order to get to the best resultat and to test all of the features of this applications under the best practise and most professional workflow: JavaScript, JQuery, Node.js, Jasmine testing framework and the build system Gulp.


# The project structure

- This project contain two basic important folder: src & dist ;
- The src folder, contain all the project files before automatisation.
- The dist folder, contain all the project files after automatisation, and which are ready for the web.
- Automatisation are runned through the build system "Gulp".
- The module installed in gulp and required for task in the gulpfile are:
    + gulp-uglify : To compress and minify files written in JavaScript.
    + gulp-postcss : We use this with prefixer, cssnano and browserlist.
    + gulp autoprefixer : For an automatic add/remove vendor prefixes .
    + gulp-cssnano : To minify and transform styles with javaScript.
    + gulp-babel : To compile code written in EC6 to EC5 for some old browsers.
    + browser-Sync : To the work flow faster, so We can see our changes directly on the browser and to set the server's basic index or directory.

- In the test process, We used Jasmine framework.
- the test process was out of gulp buildsystem.
- The resultat of the spec will be logged in the browser under the feed applications.

- The test spec contain many functions that test many basic functionality and features inside the feed application.
- the test files contain 13 specs, Every specs contain one of the functionality of the application.


# Usage :

## Getting Started 
- These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
- Wether you're going to run this project of an server or on a local machine, You need to have Node.js installed on the disk.

## Instalation
- To install this project:
    1. clone this repository on your server or on your local machine  .
    2. Open CMD, and navigate to the root folder of the cloned repository .
    3. Check that you have node.js installed, by excuting this command ``` npm --v ``` .
    4. Then after checking node, Just excute the command ``` gulp ``` and hit enter .
    5. This could take some times because the automatisation process + The server initialisation.
    6. After the gulp automatisation, the application will be runned on your default browser automatically in live manner.
    7. check the terminal log message, for the adress IP of the project.

## Running the tests
- The Test is written under the jasmine framework, and it test the important functionality of the application that were written inside the app.js file inside the js folder.
- The Test file is inside the spec folder under the jasmine folder, and the name of it is " feedreader.js ".
- The test file contain 13 spec categorized inside 4 test suite.  
- This jasmine test is invoked in the index.html file, and the resultat of this test is runned and showed on the browser along with the applications.


