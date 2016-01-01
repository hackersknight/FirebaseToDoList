(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  
})(document);
app.firebaseURL = 'https://yourappname.firebaseio.com';
app.firebaseProvider = 'google';

app.items = [ ];

app.updateItems = function(snapshot) {
  this.items = [];
  snapshot.forEach(function(childSnapshot) {
    var item = childSnapshot.val();
    item.uid = childSnapshot.key();
    this.push('items', item);
  }.bind(this));
};

app.addItem = function(event) {
  event.preventDefault(); // Don't send the form!
  this.ref.push({
    done: false,
    text: app.newItemValue
  });
  app.newItemValue = '';
};

app.toggleItem = function(event) {
  this.ref.
    child(event.model.item.uid).
    update({done: event.model.item.done});
};

app.deleteItem = function(event) {
  this.ref.child(event.model.item.uid).remove();
};

app.onFirebaseError = function(event) {
  this.$.errorToast.text = event.detail.message;
  this.$.errorToast.show();
};
app.onFirebaseLogin = function(event) {
  this.ref = new Firebase(this.firebaseURL + '/user/' + 
                                                  event.detail.user.uid);
  this.ref.on('value', function(snapshot) {
    app.updateItems(snapshot);
  });
};
