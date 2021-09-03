import GuitarCollector from './GuitarCollector';

const guitarList = new GuitarCollector();

const myGibson = {
  make: 'Gibson',
  model: 'SG',
  color: 'black',
  year: 1985
}

const myTele = {
  make: 'Fender',
  model: 'Telecaster',
  color: 'grey',
  year: 1995
}

///////////////////////////////////////////////////////////////////

// Add guitars
guitarList.addGuitar(myGibson);
guitarList.addGuitar(myTele);

// All guitars
console.log('all guitars ===========')
console.log(guitarList.getAllGuitars());

// Get 1 guitar
console.log('1 guitars ===========')
console.log(guitarList.getGuitarByIdx(1));

// Update one
const updatedGuitar = guitarList.updateGuitarByIdx(1, { color: 'sunburst', year: 1997 });

// All guitars
console.log('all guitars after update ==========')
console.log(guitarList.getAllGuitars());

export default {};
