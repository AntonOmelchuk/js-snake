export const SNAKE_SPEED = 2
const SNAKE_BODY = [{ x: 11, y: 11 }]

export const updateSnake = () => console.log('update snake')

export const drawSnake = gameBoard => {
  SNAKE_BODY.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.x
    snakeElement.style.gridColumnStart = segment.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}
