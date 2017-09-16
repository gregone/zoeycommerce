import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [{
      id: 1,
      colorways: ['red', 'blue', 'green']
    }, {
      id: 2,
      colorways: ['black', 'gray']
    }]
  }
});
