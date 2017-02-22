const coordinates = (state = [], action) => {
  switch (action.type) {
    case 'FIND_COORDINATES':
      return [...state, action.address];
    default:
      return state
  }
}
