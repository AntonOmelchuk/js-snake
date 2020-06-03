import { SNAKE_SPEED, updateSnake, drawSnake } from './snake.js'

const gameBoard = document.getElementById('game-board')

let lastRenderTime = 0

const main = currentTime => {
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

  if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
  console.log(secondsSinceLastRender)
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

const update = () => {
  gameBoard.innerHTML = ''
  updateSnake()
}

const draw = () => {
  drawSnake(gameBoard)
}
