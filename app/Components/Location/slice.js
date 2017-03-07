var array = [{id: 1, name: 'Bob'}, {id: 2, name:'Eureka'}, {id: 3, name: 'Cassiopeia'}, {id:4, name: 'George'}]
var needed = {id: 2, name: 'Eureka'}

function spliceArray(array) {
  if(array[i].id === needed[i].id) {
    arrray.splice(needed[i], 1)
  }
  return array;
}


iterate through array; if the id of array[i] === id of needed object,
splice(i, 1)
