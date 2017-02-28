export const isAuthorized = usersList => usersList.some(items => items.isSelected)

export const getUserId = usersList => {
  const currentUser = usersList.filter(items => items.isSelected)
  const userId = currentUser[0].id  
  return userId
}

// export const validateFile = (typeFile, validFileExtensions) => (
//   validFileExtensions.some(item => item === typeFile)
// ) 

export const imagePath = path => `/images/${path}`

export const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min