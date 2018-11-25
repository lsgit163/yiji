import * as actionTypes from '../contants'

export function update(data){
  return{
    type:actionTypes.UPDATE_CITY,
    data
  }
}
