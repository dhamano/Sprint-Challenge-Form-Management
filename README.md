# Sprint Challenge: Form Management

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored form management, custom hooks, and client-side authentication.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in advanced React techniques.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In the challenge for this Sprint, you will demonstrate proficiency by creating an application that has a registration page and let's you register a new user. Once a user is registered, you are returned a token that you can use in other calls to fetch data and render protected data to the DOM.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] Why are forms used so often in web applications and software?
		
		They are used for collecting data, for example, for authentication, to let people submit emails without exposing an email address, collecting data, or putting data into a database.

- [x] What advantages are there by using a forms library like Formik?

		It makes handling forms easier as it takes care of onChange handlers and using state to contol the input fields as well as onSubmit functionality. This all makes it quick to deploy new forms and, since it supports Yup, makes validating forms easy as well.

- [x] What is stateful logic?

		Stateful logic is login handled by state, whether it is class state or hooks.

- [x] What is a custom hook, and what does it mean to compose hooks together?

		A custom hook is a HOC that we create to have it do what we want it to do. In our example for class we had it check local storage and either save to it or retrieve data from it and then, depending on what it did, use that data to save to state.

- [x] Describe the process of retriving a token from a server and using that token in subsequent API calls.

		We send the user data such as authentication information to an authorization api and, if it is approved, the server returns a token which is a hash of information, back to our client which we will need to use to use to be able to grab data that is private. Like on facebook, you can only see your newsfeed and edit your proflie if you're authenticated and have that token stored on your browser.

## Project Set Up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add PM as collaborator on Github.
- [x] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [x] Create a new Branch locally: `git checkout -b <firstName-lastName>`.

- [x] Implement the project on this Branch, **committing progress & changes often.**
- [x] Push commits: `git push origin <firstName-lastName>`.
- [x] Navigate to the BE folder in this repository (this is where your server is located) from the command line, install the dependencies, and run `yarn start` or `npm start` to spin up the server provided for you.
- [x] In the terminal, navigate back to the main folder, then into the `client` folder.
- [x] Create your React app here.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] A registration form built with formik - include inputs for a `username` and a `password`
- [ ] Form validation using Yup
- [ ] A POST request made from the registration form to `http://localhost:6000/api/register` to add a user and retrieve a token - the request body should have the following shape:

```js
{
    username: "Your name",
    password: "password"
}
```

and the response object will look like this:

```js
{
    "error": "false",
    "message": "User created successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTYzNDc2NTc0LCJleHAiOjE1NjM0ODAxNzR9.pIkjFgRRbrrg8j38YGiWpMlw0wgTWRfZmIIMAeFLQcw"
}
```

- [ ] Write a custom hook that can set and retrieve this token to and from local storage

- [ ] A GET request made with the token to `http://localhost:6000/api/restricted/data` to retrieve protected data

- [ ] Map over the array of objects you recieve and render some or all of it's information to the DOM.

## Stretch Problems

1. Styling! Make your form pretty. Research pseudo elements and event selectors. Try to find interesting ways to present and layout the data you recieve from the back end.

1. Make a Login form. Compuse your Formik form in such a way that it can be extracted into a component and reused for both Register and Login.

1. Deep dive into validation. Can you make your register form check to see if a password is long enough? If it has special characters? Make two password fields for register and prevent the post request if the passwords don't match.
