export const UPDATE_NAME = 'UPDATENAME'
export const UPDATE_LASTNAME = 'UPDATE_LASTNAME'

export const updateName = (name,lastName) => ({ type: UPDATE_NAME, payload: {name,lastName} })