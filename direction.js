let direction = { x: 0, y: 0 }
let lastDirection

window.addEventListener('keydown', e => {
  switch(e.key) {
    case 'ArrowUp':
      if(lastDirection?.x !== 0) return
      return direction = {
        x: -1, y: 0
      }
    case 'ArrowDown':
      if(lastDirection?.x !== 0) return
      return direction= {
        x: 1, y: 0
      }
    case 'ArrowRight':
      if(lastDirection?.y !== 0) return 
      return direction = {
        x: 0, y: 1
      }
    case 'ArrowLeft':
      if(lastDirection?.y !== 0) return
      return direction = {
        x: 0, y: -1
      }
  }
})

export const snakeDirection = () => {
  lastDirection = direction

  return direction
}
