import { snakeDirection } from './direction.js'

export const SNAKE_SPEED = 5

const snakeBody = [
  { x: 11, y: 11 }
]
let newSegment = 0

export const updateSnake = () => {
  newSegment > 0 && addSnakeSegment()

  for(let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  const direction = snakeDirection()

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

export const expandSnake = () => {
  return newSegment++
}

export const snakeOnFood = (position) => {
  return snakeBody.some(segment => {
    return segment.x === position.x && segment.y === position.y
  })
}

const addSnakeSegment = () => {
  snakeBody.push({...snakeBody[snakeBody.length - 1]})

  return newSegment = 0
}
