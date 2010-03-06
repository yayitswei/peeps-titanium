var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
  var contacts = eval(this.responseText);

  for (var i = 0; i < contacts.length; i++) { 
    contacts[i].title = contacts[i].name + " (" + contacts[i].birthday + ")";
  }
    
  // create table view
  var tableview = Ti.UI.createTableView({
    data:contacts
  });
  
  // add table view to the window
  Ti.UI.currentWindow.add(tableview);

};

// open the client
xhr.open('GET','http://dawn.kicks-ass.org/contacts/birthdays.json');

// send the data
xhr.send();
