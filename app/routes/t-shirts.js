import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 1,
      name: 'Zoey',
      colorways: ['red', 'blue', 'green']
    }, {
      id: 2,
      name: 'Tomster',
      colorways: ['black', 'gray']
    },{
      id: 3,
      name: 'Hipster Zoey',
      colorways: ['red', 'blue', 'green']
    }, {
      id: 4,
      name: 'Hipster Tomster',
      colorways: ['black', 'gray']
    }]
  }
});
