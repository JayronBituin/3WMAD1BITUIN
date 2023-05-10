// Get elements from the HTML
const gameBoard = document.getElementById('game-board');
const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
const bricks = document.querySelectorAll('.brick');

// Set up initial variables
let ballX = 300;
let ballY = 200;
let ballSpeedX = 5;
let ballSpeedY = 5;
let paddleX = 250;

// Move the ball and detect collisions
function moveBall() 
    // Update ball position
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    // Check for collisions with walls
    if (ballX <= 0 || ballX >= gameBoard.offsetWidth - ball.offsetWidth) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY <= 0) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY >= gameBoard.offsetHeight - ball.offsetHeight) {
        // Game over
        alert('Game Over!');
        location.reload();
    }

    // Check for collisions with paddle
