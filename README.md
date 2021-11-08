# Kaaro Intern Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goal

For this challenge, you will mainly be working with the Comments component of this app. To complete the challenge
implement the following

1. Display the comments found in the database at `https://kaaro-intern-challenge.firebaseio.com/comments.json`. The comments should be formatted in the same way as the static comments. The commenter's username should link to `/users/username`

2. Implement an add comment form. On pressing the enter key, the typed in comment should be added to the database and also be displayed alongside the other comments. For example, this is how you would post a comment through curl

```
curl -X POST -d '
  {
    "username": "luigi",
    "text": "Lets a go"
  }
' 'https://kaaro-intern-challenge.firebaseio.com/comments.json'
```

**HINT: Be sure to check out all the comments in the app code, they will give you hints on where to start!**

## Using Git/Github

To install, first clone the repository by typing the following on the command line.

```
git clone https://github.com/kpandit1/kaaro-intern-challenge/
cd kaaro-intern-challenge
```

Next, create a branch with your name

```
git checkout -b '<your-name>'
```

Complete the coding challenge on this branch. When you're done, push your code to the repository.

```
git add .
git commit -m "Completed code"
git push --set-upstream origin <your-name>
```

Feel free to contact us to make sure your code made it to us!

## Installation

Make sure you have NPM installed on your system.

Once you've cloned the repository and created your branch as specified in the previous section, type

```
npm install
```

This will install the libraries you need to run the project.

## Running

Typing `npm start` will run the project in your browser.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
