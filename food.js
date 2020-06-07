import { snakeOnFood } from './snake.js'

let food = { x: 5, y: 5 }
const EXPANSION_RATE = 1

export const updateFood = () => {
  if(snakeOnFood(food)) {
    return food = {
      x: 10,
      y: 10
    }
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