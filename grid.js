const GRID_SIZE = 21

export const randomFoodPosition = () => {
  return { 
    x: Math.floor(Math.random() * GRID_SIZE + 1),
    y: Math.floor(Math.random() * 21 + 1)
  }
}

export const snakeOverBoard = (snakeHead) => {
  return snakeHead.x < 0 || snakeHead.x > GRID_SIZE ||
         snakeHead.y < 0 || snakeHead.y > GRID_SIZE
}
