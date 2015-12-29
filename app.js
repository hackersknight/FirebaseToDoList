app.items = [];

app.updateItems = function(snapshot) {
  this.items = [];
  snapshot.forEach(function(childSnapshot) {
    var item = childSnapshot.val();
    item.uid = childSnapshot.key();
    this.push('items', item);
  }.bind(this));
};