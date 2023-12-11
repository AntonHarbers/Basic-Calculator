# The Odin Project - Calculator

A basic calculator built with html, css an vanilla JS for the Odin Project.

[Live Link](https://antonharbers.github.io/Odin_Calculator/)

![Calculator Image](/images/repoImage.png)

## Folder Structure

```
    /.git               -> This git repository
    /image              -> Contains favicon and repo Image
    index.html          -> All the html for this project
    README.md           -> This README
    script.js           -> Contains all the calculator logic
    style.css           -> Contains project styles and animations
```

## Key Concepts

### Breaking up Functions into sub Functions

The way I chose to handle the user input was by assigning a function call to every button which would then go ahead and evaluate the resulting logic. This could all be done in a single function, but breaking the individual components into smaller sub functions helped keep the logic and code clean.

A good example of this would be the operate() function:

JS:

```
    const operate = (a, b, operator) => {
    switch (operator) {
        case '+':
        return add(a, b);
        case '-':
        return subtract(a, b);
        case 'x':
        return multiply(a, b);
        case '÷':
        return divide(a, b);
    }
    };

    const add = (a, b) => {
    return a + b;
    };

    const subtract = (a, b) => {
    return a - b;
    };

    const multiply = (a, b) => {
    return a * b;
    };

    const divide = (a, b) => {
    return a / b;
    };

```

Its easier on the eyes to look at our operate function and see some language being used instead of just variables and maths operators. The additional benefit is that if we were to extend the functionality of the calculator in general or change the way any of the currently implemented cases work, we can do this in a modular way where bug handling is easy and the code is kept clean.

### Keyframes

I wanted to implement an old school retro looking calculator for this project. One key feature I wanted was some blinking of lights and sort of glitching of the display as an ode to a simpler time. I managed to acheive this quite simply using the @keyframes directly in CSS as shown below:

Starting off with defining our blink keyframe:

CSS:

```
    @keyframes blink {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
```

This snippet just cycles our opacity on and off. Next we would use the animation CSS property to assign this animation to our element with ID of blink:

CSS:

```
    #blink {
        height: 3px;
        width: 3px;
        background-color: red;
        animation: blink 1s infinite; // right here
    }
```

This animation shorthand property accepts many parameters. In my case I just added the animation name (blink), the animation duration (1 second) and how often this animation should play (infinite).

This is a simple demonstration of the power that keyframes bring with them. One can imagine that complex animations can be created with relative ease if some more time were spent on it.

### Benefits of Switch Statements

My calculator implements a couple of switch statements to identify what to do with a given peace of data based on the contents of the data. I found that using switch statements helps keep the code clean and is much less messy than chaning a bunch of if else blocks together.

## Final Notes

A basic calculator is something we have all seen before but creating one from scratch was an interesting challenge. I learned how to organize text content in HTMl and how to handle a complex event using switch statements. It was fun creating my own style and animations to make the calculator look retro and unique. I would highly recommend this project for anyone getting into programming and web development as it helped to cement the workflow and concepts used.
