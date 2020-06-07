import { snakeOnFood, expandSnake } from './snake.js'
import { randomFoodPosition } from './grid.js'

let food = { x: 5, y: 5 }

export const updateFood = () => {
  if(snakeOnFood(food)) {
    expandSnake()
    food = getFoodPosition()
  }
}

export const drawFood = (gameBoard) => {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.x
  foodElement.style.gridColumnStart = food.y
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)

  return foodElement
}


const getFoodPosition = () => {
  let newPosition
  while(newPosition == null || snakeOnFood(newPosition)) {
    newPosition = randomFoodPosition()
  }
  
  return newPosition
}