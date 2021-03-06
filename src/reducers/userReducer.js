import uuid from 'uuid/v4';

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, {
        name: action.user.name, 
        password: action.user.password, 
        id: uuid()}
      ]
    case 'REMOVE_USER':
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  }
} 