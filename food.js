let food = {
  x: 5, 
  y: 5
}

export const drawFood = (gameBoard) => {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.x
  foodElement.style.gridColumnStart = food.y
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)

  return foodElement
}