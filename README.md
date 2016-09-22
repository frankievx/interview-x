#Overview
This project is using an Angular 1.5 frontend with a Node/Express and MySQL backend.

KnexJS is used as a wrapper over the database and allows me to build schemas and seed the database easily while also 
a providing simple JS language to make queries.

The development environment uses webpack dev middleware and webpack hot middleware.

The production environment runs a webpack production build and outputs the bundle.js into the dist folder.

The frontend UI uses angular material design with alot taken from material design table. 

I've never used material design with angular before. I've also never used webpack with angularjs so although it took
some time I think it was worth it in the long run.

The App allows you to sign up a new admin, login as the admin, logout, and add matches as long as you are logged in.
Immediately, without being an administrator, current standings are visible to the public and separated into Live Matches,
Future Matches, and Past Matches. 

#Live Demo
A live demo of the production build for this app can be found at http://54.175.172.43/. I didn't really have time to set up an nginx web server on AWS, if I did I may have been able to set it up with a domain.

#Running The Project
If you would like to run the app you can do it in four easy steps.

1. Make sure you have the latest versions of NodeJS and MySQL installed with MySQL server running.
2. Enter your MySQL CLI and run "CREATE DATABASE <dbname>;"
3. Add a secret.js file into the server/ directory which exports and object similar to this
{
	user: <MySQL username>,
	password: <MySQL password>,
	database: <Name of the DB you created in MySQL>,
	secret: <randomstring>
}
	This is for the KnexJS database connection and sessions.
4. Finally, run "npm install" which will build a production version of the application and start the Node server.
If you want to run in the development environment you can run "npm start" after installing. Then visit localhost:3000.

# Enjoy!

# interview-x
Please fork the repo and do a pull request with your changes

# Overview
I administer a soccer league and I'd like a web application to track team names and match scores.  

# Project Scope and Requirements

* As an admin I need to enter the team names, the final score and match date
* As a public user, I need to see the league standings
* Project needs to be created using node.js with MySQL backend and Angular 1.* frontend
* Please make at least 3 commits to github
* Optional: host your website and database with AWS

