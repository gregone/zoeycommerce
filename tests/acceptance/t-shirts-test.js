import { test } from 'qunit';
import moduleForAcceptance from 'zoeycommerce/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | t shirts');

test('visiting /t-shirts', function(assert) {
  visit('/t-shirts');

  andThen(function() {
    assert.equal(currentURL(), '/t-shirts');
  });
});
