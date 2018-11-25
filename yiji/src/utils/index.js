import * as Key from "./key.js"

export function setupDefaultCity(cityName){
  localStorage.setItem(Key.LOCAL_CITY,encodeURIComponent(cityName));
}

export function getDefaultCity(key){
  var value = localStorage.getItem(key)
  if(!value){
    return value;
  }
  return decodeURIComponent(value);
}

export function clearCity(){
  localStorage.clear();
}
