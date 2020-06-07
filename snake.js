import { snakeDirection } from './direction.js'

export const SNAKE_SPEED = 2

const snakeBody = [
  { x: 11, y: 11 }
]

export const updateSnake = () => {
  for(let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  const direction = snakeDirection()
  console.log(direction)

  snakeBody[0].x += direction.x
  snakeBody[0].y += direction.y
}

export const drawSnake = gameBoard => {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.x
    snakeElement.style.gridColumnStart = segment.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

export const snakeOnFood = (position) => {
  return snakeBody.some(segment => {
    return segment.x === position.x && segment.y === position.y
  })
}
