import Ember from 'ember';

const baseUrl = "http://api.zoeycommerce.com/"

const {
  computed,
  get
} = Ember;

export default Ember.Component.extend({
  tshirt: null,

  imageUrl: computed('tshirt.id', 'colorWay', function() {
    const tshirtId = get(this, 'tshirt.id');
    const colorWay = get(this, 'colorWay');
    return `${baseUrl}products/${tshirtId}/image?color=${colorWay}`;
  }),
  selectedColorWay: null,
  colorWay: computed('selectedColorWay', 'firstColorWay', function() {
    const selectedColorWay = get(this, 'selectedColorWay');
    const firstColorWay = get(this, 'firstColorWay');
    return selectedColorWay || firstColorWay;
  }),
  firstColorWay: computed('tshirt.colorways', function() {
    const colorWays = get(this, 'tshirt.colorways');
    return colorWays[0];
  }),
  // didInsertElement() {
  //   const firstColor = get(this, 'tshirt.colorways') ? get(this, 'tshirt.colorways')[0] : '';
  //   this.set('colorWay', firstColor);
  // }
});
