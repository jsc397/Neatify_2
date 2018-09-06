# Neatify

## Project Premise

Clean writing = Easy reading.
Who has time to read lines of text anymoore?
Say what you want quickly and keep your audience focused.

Writing, just like coding, is a skill that must be practiced.
Use Neatify to practice keeping your writing as DRY as your code.

## User story

As a beginner writer, I want to practice editing and de-cluttering my writing, so that I can convey a clean, clear message. I want to be able to submit my solutions and share with other writers to get input and feedback.

## Wireframing

### **Models**

User:
username = "string"
email = "string"
password = "string"
input = "string"

Solution:
content = "string"
createdAt
author = user
comments

Comment:
content = "string"
createdAt
author

#### **Planning** :

#### - Pseudocode

1. User should be able to sign-up with his/her email and password
2. Once the User signs up, he/she can access all of the problems
3. User can click on a problem, and type a solution into the input box
4. Then the User solution will get saved to the database and displayed on the Problem show page

## Production Environment

- Tech Stack: MEHN (MongoDB, Express.js, Handlebars, Node.js)
  - To run this app in production, please clone this repository :
  ```bash
  $ cd Neatify2
  $ npm run install
  $ code .
  ```

## Deployment

- This app is deployed using Heroku : Please visit [this](https://neatify2.herokuapp.com/) link for the deployed site
