# Spotify Clarify-ed

A social media React app that uses the Spotify API.

## Table of Contents
* [Introduction](#introduction)
* [Installation](#installation)
* [Functionalities](#functionalities)
* [Technologies](#technologies)
* [Project Status](#project-status)
* [Code Clarifications](#code-clarifications)

## Introduction
Spotify Clarify-ed unifies social media with Spotify to create an immersive listening experience, allowing users to discover other users and their tastes, message others, and post on forums.

![b](https://user-images.githubusercontent.com/73049480/172166807-fa1ad12d-e6d6-460f-acb4-0f25709241d2.PNG)
<p>Fig. 1: Spotify Clarify-ed login screen</p>

## Installation
To view the application, install the application locally. Run the following commands

In one terminal:
```
$ cd frontend
$ npm start
```
Open a new terminal:
```
$ cd api
$ npm start
```
Open http://localhost:3000 in a browser.

## Functionalities
Spotify Clarify-ed requires authentication using one’s spotify account, making it a more secure application. 

Spotify Clarify-ed displays a user's liked songs, top songs, and top artists, allowing users to select which of their top songs and artists are to be displayed on their public user profile page.
Users can also direct message other users and post in forums/message boards.

## Technologies

- React v18.1.0
- Node.js v16.14.1
- Express.js v4.16.1
- MaterialUI v5.8.2
- Firebase v9.8.2
- Axios v0.27.2

## Project Status
#### In Progress:
- Adding in user profile information, such as top artists and songs 
- Integrating headshots with top artist listings
- Adding design features to organize information

## Code Clarifications
- The ```fetchMessages()``` function sorts all messages returned by the API call by alphabetical order of the sorted order of the sender and receiver's username, then by the date the message was created.
- The ```fetchMessages()``` function also groups messages by checking if the sender and receivers are the same two people.
