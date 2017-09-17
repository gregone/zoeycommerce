import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('tshirt-image', 'Unit | Component | tshirt image', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {

  // Creates the component instance
  let component = this.subject();
  // Renders the component to the page

  const fakeTshirt = {
    id: 1,
    name: 'Zoey',
    colorways: ['red', 'blue', 'green']
  };

  component.set('tshirt', fakeTshirt);
  assert.equal(component.get('imageUrl'), 'http://api.zoeyxcommerce.com/products/1/image?color=red');
  component.set('colorWay', 'blue');
  assert.equal(component.get('imageUrl'), 'http://api.zoeyxcommerce.com/products/1/image?color=blue');
});
