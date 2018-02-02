const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TOD':
      return state.map(todp =>)
      (todo.id === action.id) ? (...todo, completed: )
  }
}
