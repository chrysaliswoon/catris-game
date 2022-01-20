# Developing a Tetris Game - Catris

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

<br>

## Description
This is a classic [Tetris](https://tetris.com/play-tetris) game with a fun cat spin on it. The game was designed and implemented using HTML, CSS, and Javascript while attending the Software Engineering Immersive course at General Assembly.

I chose to recreate this game as it was one of the games which I loved playing in my childhood and it's still addictive even in adulthood. The tile-matching game was created in 1984 by a Soviet engineer, [Alexey Pajitnov](https://tetris.com/bios#alexey), who loved puzzles. He developed it purely out of interest and didn't intend to make money out of it. He was inspired by a puzzle game called "pentominoes," in which different wooden shapes made of five equal squares are assembled in a box.

A lot of things which programmers create are usually based on things which currently exist all around us. I feel that this is what programming is to me. Creating things for the joy of it or because you want to use something which someone has not made by being inspired by your surroundings.

<br>

## High Concept
Different bricks called Tetriminos which are randomly generated will fall down. Players will use the arrow keys to rotate, move, and drop the Tetriminos. Players will attempt to clear as many lines as possible by completing horizontal rows of blocks without any empty spaces, but if the Tetriminos surpass the Skyline the game is over!

I looked at various versions of Tetris to see how I can structure the visuals and structure of it, and you can take a look at some references I took in the Idea Board folder.

<br>

## Deployment
The game is deployed on GitHub pages, and you can play the game here: https://chrysaliswoon.github.io/CatrisProject/

<br>

## How To Play
Instructions and gameplay image were taken from the [official Tetris website](https://tetris.com/play-tetris/?utm_source=top_nav_link&utm_medium=webnav&utm_campaign=playNow_btm_tst&utm_content=text_play_now
)
The goal of Tetris is to score as many points as possible by clearing horizontal lines of Blocks. The player must rotate, move, and drop the falling Tetriminos inside the Matrix (playing field). Lines are cleared when they are filled with Blocks and have no empty spaces.

As lines are cleared, the level increases and Tetriminos fall faster, making the game progressively more challenging. If the Blocks land above the top of the playing field, the game is over.

![Tetris Instruction](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/TetrisKeyboard.png?raw=true)

<br>

## Ideation Sketch
Before creating the code for the game, I drew out the different components of the game and everything I knew and could observe about the game mechanics. This allowed me to identify the various visual components of the game which will affect my HTML and CSS codes, and which parts I would need to make interactive, which affects the JS portion of my codes.

![Code Framework](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Project%201%20Tetris%20Plan-2.jpg?raw=true)

<br>

## Game Architecture
In order to understand the various components which I will need to create, I first played a standard Tetris game and observed how the Tetrominoes moved, the size of the Tetris Board, and what are the different types of variables involved.

Afterwards, I deconstructed it and drew out the various components:

![Components of Tetris](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Project%201%20Tetris%20Plan-1%20.jpg?raw=true)

I used a grid paper to identify how big the board and Tetrominoes should be. 

<br>

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

**Part 2 (Creating the Visuals):** https://medium.com/@chrysaliswoon/combining-html-css-js-tetris-project-part-2-creating-the-visuals-7ec41d3cde0c 

**Part 3 (Creating the Tetrominoes):** 

**Part 4 (Keyboard Input):**

**Part 5 (Collision Detection):**

**Part 6 (Tetromino Rotation):**

**Part 7 (Randomization of Tetrominoes):**

**Part 8 (Game Loop & Timer):**

**Part 9 (Line Clear):**

**Part 10 (Creating Levels & Game Over Feature):**

**Part 11 (Next Tetromino):**


<br>

## Key Learnings
1. Through the project, I learned concepts and terms like JSON, Classes, Immutability, Destructuring and Proxy. 

2. In order to rotate the Tetromino pieces, I found out that instead of creating different variations of the matrices and looping through them, an easier way would be to use the rotation matrix, which required knowledge of linear algebra. 

3. With a project as complex as Tetris, it helps to separate the JS files for each main component so you can identify the errors and bugs. But at the same time, this meant that sometimes you might not know where a particular code is referencing it from if you don't label your functions and variables in a way which makes sense. Commenting on your codes will also help you identify what a particular section of code does, making it easier to debug.

4. We learned in class to use setInterval or setTimeout. However, for the Tetris game, I created a function called requestAnimationFrame() which paints a frame and reschedules itself. This is so we only see the Tetris block moving down when it is visible and it enables browser optimizations. This taught me that we might learn a concept, but depending on the usage, that concept might not be suitable for what we want.

<br>

## Breakdown & Analysis of the Codes
Below is a breakdown and analysis of some of the codes which I have categorised according to the concepts we have covered in class.

### Week 1: Conditionals, Booleans, Loop
A Boolean is a system of logical thought developed by the English mathematician George Boole. We use a number of operators to determine whether a condition is true or false.

![Conditional-main.js file](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Conditionals.png?raw=true)

The above code uses a While loop which executes the statement as long as the test condition is true. 

The test condition for this code can be read as ""If the user presses the space key then...". 

If this test condition is true, the Tetris block will do a hard drop and go to the bottom of the grid while making sure it is within the dimensions of the Tetris board.

### Week 1: Arrays 
An array is a data structure, and like a number or string, you can assign an array to a variable. An array is a list. All list items go between square brackets.

![Array-constants.js file](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Arrays.png?raw=true)

For the Tetris game, we used a few arrays, two of which is determining the colors and shapes of the Tetris block. 

For the shapes, any number that is more than 0 indicates that the particular section will be colored. The numbers 1-7 represents the different colors it will create for each shape. 

### Week 2: Functions & Scope
Using functions is another application of DRY. Don't Repeat Yourself. With a function, you can store code that can be used conveniently as many times as you wish, without having to rewrite the code each time. We always use const to declare the functions. Functions should only do one thing.

![Functions/Scope-main.js file](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Functions,%20Scope.png?raw=true)

Scope is the restriction of where in your code your variables can be accessed. If you try to access a variable outside of its scope, it will not be defined. In general, you want scope to be restricted. You only want your variables accessible to specific safe zones.


### Week 2: Pseudocode & Objects
Pseudo code is the process of taking a larger solution and breaking it down into the programmable steps without actually writing any code.

![Pseudocode-constants.js file](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Pseudocode(1).png?raw=true)
![Pseudocode(2)-constants.js file](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Pseudocode(2).png?raw=true)

In JavaScript, objects are what we use to represent key-value pairs. Arrays are declared using the square brackets const arr = []; while Objects are declared using the curly braces const obj = {}. Objects contain key-value pairs. They are are the properties of the object.

![Objects-constants.js](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Objects.png?raw=true)

### Week 3: Callbacks
A function that takes another function an argument is called a higher order function. The function that is being passed in is called a callback.

![Callbacks(1)-main.js](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Callbacks(1).png?raw=true)
![Callbacks(2)-main.js](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Callbacks(2).png?raw=true)
![Callbacks(3)-main.js](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Callbacks(3).png?raw=true)

### Week 3: Object Oriented Programming (OOP) & Classes
A class is a blueprint or template for similar objects, and we can add data and functionality to it. When creating a class, it's custom to capitalize the first letter of the variable, so we know it's a class. This follows customs in other programming languages.

![Classes(1)-board.js](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Classes(1).png?raw=true)
![Classes(2)-main.js](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Classes(1).png?raw=true)

### Week 5: Event Bubbling
When elements are nested within the DOM, the DOM needs a way to decide which elements ought to trigger an event.

![EventBubbling-main.js](https://github.com/chrysaliswoon/CatrisProject/blob/main/Notes%20&%20Resources/Event%20Bubbling.png?raw=true)
<br>

## Future Developments / Improvements
As this is created for a project submission, there might be no future iterations of this. However, if there were, these would be the future developments/improvements I would implement:

- Update the game visuals to make it more cat-themed and visually appealing.
- Recreate the game with shorter and more efficient codes independently.
- Create a hold section where players can store a Tetris block to be used later.
- Program the Pause, Rotate Left and Hold button.
- Create a Start screen with instructions.

<br>

## Summary
As this was my first time creating a project in a very tight timeframe, it was considered extremely ambitious for me to recreate the Tetris game. 

However, the idea behind it was that by learning how others recreated the game, I would understand the logic flow behind it and how they linked the HTML, CSS and JS together. This would then allow me to create a game from scratch. 

I also learn best by recreating someone's else work, deconstructing it, and then find a better way of going about it. 

My philosophy is, "Don't reinvent the wheel. Analyse and observe how the wheel works, the thought process behind creating it, the mechanics of it, and then deconstruct it, and make it better through reconstructing."

<br>

## References
As JS is relatively new to me and there were a lot of concepts that I had to get used to. In order to start the ball rolling on my project, I referenced various sources in terms of how they created their Tetris game, and adapated and modified them to be mine as much as possible.

- [Game Development - JS Tetris](https://www.educative.io/courses/game-development-js-tetris)
- [Learning Modern JS with Tetris](https://michael-karen.medium.com/learning-modern-javascript-with-tetris-92d532bcd057)
- [Building TETRIS - Game Development Tutorial](https://www.youtube.com/watch?v=8zXlWbEgfiY&t=100s)
- [Tetris SRS Mechanism Explained](https://www.youtube.com/watch?v=UdYri9Kx6Zs)

## Game Asset Atrributions
The game assets in this project does not belong to me. All rights belong to the original artists and owners. Below are the links to the game assets used in this project:

- [Pixel Background](https://data.whicdn.com/images/299174311/original.gif)
- [Paw Icon](https://www.flaticon.com/free-icon/pawprint_6316837?term=paw&page=1&position=73&page=1&position=73&related_id=6316837&origin=tag)


