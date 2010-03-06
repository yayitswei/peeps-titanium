Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({  
    title:'Peeps you should contact',
    backgroundColor:'#fff',
    url:'overdue.js'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'contacts',
    window:win1
});

var win2 = Titanium.UI.createWindow({  
    title:'Upcoming birthdays',
    backgroundColor:'#fff',
    url:'birthday.js'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'birthdays',
    window:win2
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();

var messageWin = Titanium.UI.createWindow({
	height:30,
	width:250,
	bottom:70,
	borderRadius:10,
	touchEnabled:false
});