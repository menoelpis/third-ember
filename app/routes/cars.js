import Ember from 'ember';

var cars = [
  {
    "id": 1,
    "make": "Honda",
    "model": "Accord",
    "year": "2007"
  },
  {
    "id": 2,
    "make": "Toyota",
    "model": "Camry",
    "year": "2002"
  },
  {
    "id": 3,
    "make": "Ford",
    "model": "F150 Raptor",
    "year": "2012"
  },
];

export default Ember.Route.extend({
  model: function() {
    return cars;
  }
});
