mocha.setup('bdd');
function saveUser(user, callback) {
  $.post('/users', 
  {
    first: user.firstname,
    last: user.lastname
  }, 
  callback);
}
describe('saveUser', function() {
  it('should send correct parameters to the expected URL', function() {

    //We'll stub $.post same as before
    var post = sinon.stub($, 'post');

    //We'll set up some variables to contain the expected results
    var expectedUrl = '/users';
    var expectedParams = {
      first: 'Expected first name',
      last: 'Expected last name'
    };
    //We can also set up the user we'll save based on the expected data
    var user = {
      firstname: expectedParams.first,
      lastname: expectedParams.last
    }
    saveUser(user, function(){} );
    post.restore();
    sinon.assert.calledWith(post, expectedUrl, expectedParams);
  });
});

mocha.run();