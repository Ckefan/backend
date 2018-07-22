export function bg(state=0,action){
  console.log(state,action,131213)
  switch(action.type){
    case 0:
      return state+1
    case 1:
      return state+2
    default:
      return 2
  }
}
export function changeBg(num=0){
  return {type:num}
}