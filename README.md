# Developing a Tetris Game - Catris
## Description
This is a classic [Tetris](https://tetris.com/play-tetris) game with a fun cat spin on it. The game was designed and implemented using HTML, CSS, and Javascript while attending the Software Engineering Immersive course at General Assembly.

I chose to recreate this game as it was one of the games which I loved playing in my childhood and it's still addictive even in adulthood. The tile-matching game was created in 1984 by a Soviet engineer, [Alexey Pajitnov](https://tetris.com/bios#alexey), who loved puzzles. He developed it purely out of interest and didn't intend to make money out of it. He was inspired by a puzzle game called "pentominoes," in which different wooden shapes made of five equal squares are assembled in a box.

A lot of things which programmers create are usually based on things which currently exist all around us. I feel that this is what programming is to me. Creating things for the joy of it or because you want to use something which someone has not made by being inspired by your surroundings.

## Project Brief
**MVP - Minimum Viable Product** 
- Built with HTML, CSS and JavaScript (jQuery is strongly optional)
- Use Javascript for DOM manipulation
- Hosted on Github pages
- Commits to Github frequently
- A README.md file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.
- Be displayed in the browser
- Have some kind of user interaction via mouseclick or keypress

**Stretch Goals (Not Mandatory)**
- Look into localstorage so you can save data to the user's browser

## Timeframe
1 month

## Technologies & Tools Used
- HTML
- CSS
- JavaScript
- Git & GitHub

## Deployment
The game is deployed on GitHub pages, and you can play the game here: https://chrysaliswoon.github.io/CatrisProject/

## High Concept
Different bricks called Tetriminos which are randomly generated will fall down. Players will use the arrow keys to rotate, move, and drop the Tetriminos. Players will attempt to clear as many lines as possible by completing horizontal rows of blocks without any empty spaces, but if the Tetriminos surpass the Skyline the game is over!

I looked at various versions of Tetris to see how I can structure the visuals and structure of it, and you can take a look at some references I took in the Idea Board folder.

## Wireframing & Prototype
Before creating the code for the game, I created a wireframe and prototype using Figma. This allowed me to identify the various visual components of the game which will affect my HTML and CSS codes, and which parts I would need to make interactive, which affects the JS portion of my codes.

## Game Architecture
In order to understand the various components which I will need to create, I first played a standard Tetris game and observed how the Tetrominoes moved, the size of the Tetris Board, and what are the different types of variables involved.

Afterwards, I deconstructed it and drew out the various components:



## Approach to Development
Using the plan and pseudocodes, I broke down the project into stages:
- **Step 1:** Generate the Tetris Board [Timeline: 1 week]
- **Step 2:** Generate the Tetrominoes [Timeline: 2 weeks]
- **Step 3:** Create the Game Logic [Timeline: 2 weeks]
- **Step 4** (Stretch Goal): Create different levels and point system [Timeline: 2 weeks]
- **Step 5** (Stretch Goal): Retrieve scores [Timeline: 1 week]

When I was coding out the project, I made it a habit to comment on my codes frequently as I was still learning and I tend to forget certain concepts or code blocks which I have done or used before. This also meant that I also committed to GitHub frequently to log all of the changes to the project so I can retrieve an older version if necessary.

As Tetris is a classic game which existed for quite a while, this meant that there might have been certain standards in terms of how the Tetris was formed, and how the Tetrominoes behaved. 

According to the current Tetris guidelines, the standard for how Tetrominoes behave is known as the [Super Rotation System (SRS)](https://tetris.fandom.com/wiki/SRS)

I also created notes and made a series of Medium articles which will give you insight into how I created the game:

**Part 1 (Planning):** https://medium.com/@chrysaliswoon/combining-html-css-js-tetris-project-part-i-planning-cbe524c97a63

**Part 2 (Creating the Visuals):**

**Part 3 (Creating the Tetrominoes):**

**Part 4 (Keyboard Input):**

**Part 5 (Collision Detection):**

**Part 6 (Tetromino Rotation):**


**Part 7 (Randomization of Tetrominoes):**

**Part 8 (Game Loop & Timer):**

**Part 9 (Line Clear):**

**Part 10 (Creating Levels & Game Over Feature):**

**Part 11 (Next Tetromino):**

**Part 12 (Creating High Scores):**


## Key Learnings
1. In order to rotate the Tetromino pieces, I learned that instead of creating different variations of the matrices and looping through them, an easier way would be to use the rotation matrix, which required knowledge of linear algebra. 

2. Through the project, I learned concepts and terms like JSON, Classes, Immutability, Destructuring and Proxy. 

3. With a project as complex as Tetris, it helps to separate the JS files for each main component so you can identify the errors and bugs. But at the same time, this meant that sometimes you might not know where a particular code is referencing it from.

4. We learned in class to use setInterval or setTimeout. However, for the Tetris game, I created a function called requestAnimationFrame() which paints a frame and reschedules itself. This is so we only see the Tetris block moving down when it is visible and it enables browser optimizations. This taught me that we might learn a concept, but depending on the usage, that concept might not be suitable for what we want.

## Future Developments / Improvements
As this is created for a project submission, there might be no future iterations of this. However, if there were, these would be the future developments/improvements I would create:

- Update the game visuals
- 

## Summary
As this was my first time creating a project in a very tight timeframe, it was considered extremely ambitious for me to recreate the Tetris game. 

However, the idea behind it was that by learning how others recreated the game, I would understand the logic flow behind it and how they linked the HTML, CSS and JS together. This would then allow me to complete create a game from scratch by myself. 

I also learn best by recreating someone's else work, deconstructing it, and then find a better way of going about it. 

My philosophy is, "Don't reinvent the wheel. Analyse and observe how the wheel works, the thought process behind creating it, the mechanics of it, and then deconstruct it, and make it better through reconstructing."


## References
As JS is relatively new to me and there were a lot of concepts that I had to get used to. In order to start the ball rolling on my project, I referenced various sources in terms of how they created their Tetris game, and adapated and modified them to be mine as much as possible.

- https://www.educative.io/courses/game-development-js-tetris
- https://michael-karen.medium.com/learning-modern-javascript-with-tetris-92d532bcd057
- https://www.youtube.com/watch?v=8zXlWbEgfiY&t=100s
