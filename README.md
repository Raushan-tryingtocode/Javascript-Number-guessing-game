# 🔢 Number Guessing Game

A robust, logic-based console game built with **Vanilla JavaScript**. This project focuses on **Input Sanitization**, **Control Flow**, and **State Management**—core fundamentals required for high-scale open-source contributions.



## 🚀 Overview
The application generates a random number within a user-defined range and challenges the player to guess it. It provides real-time feedback and tracks the total number of attempts.

## 🛠️ Technical Implementation
* **Dynamic Randomization**: Leverages `Math.random()` and `Math.floor()` to generate unpredictable game states.
* **Input Sanitization**: Implements `isNaN()` checks and range-bound logic to handle edge cases and invalid user data.
* **Loop Architecture**: Utilizes a `while(running)` loop pattern to manage the game life-cycle effectively.
* **Clean Code Standards**: Uses ES6+ block-scoped variables (`let` and `const`) to prevent global scope pollution.

## 📂 Project Structure
* `index.html`: Browser entry point.
* `index.js`: Core game logic and UI interaction.

## 🕹️ How to Play
1. Clone this repository.
2. Open the `index.html` file in any modern web browser.
3. Follow the browser prompts to find the hidden number!

---
*This project is part of my technical roadmap for GSoC/Outreachy 2026. Currently focusing on mastering JavaScript architecture and clean coding practices.*
