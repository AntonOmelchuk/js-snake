import { SNAKE_SPEED, updateSnake, drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { updateFood, drawFood } from './food.js'
import { snakeOverBoard } from './grid.js'

const gameBoard = document.getElementById('game-board')

let lastRenderTime = 0
let gameOver = false

const main = currentTime => {
  if(gameOver) {
    return alert('Game Over')
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

  if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

const update = () => {
  gameBoard.innerHTML = ''
  updateSnake()
  updateFood()
  checkGameStatus()
}

const draw = () => {
  drawSnake(gameBoard)
  drawFood(gameBoard)
} 

const checkGameStatus = () => {
  if(snakeOverBoard(getSnakeHead()) || snakeIntersection()) {
    return gameOver = true
  }
}
