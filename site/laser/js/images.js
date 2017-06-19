var menuClick = document.getElementById('menu');

console.log(menuClick);

menuClick.addEventListener('click', function(){
	if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
		return;
	}
	else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
		ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, "menu", null);
	}
	var images = document.querySelectorAll("#imageshow img");
	for (var i = 0; i < images.length; i++){
		if (event.target.id === 'zmotor'){  
			images[0].src = images[4].getAttribute('data-src');
		}
		else if(event.target.id === 'xmotor'){
			images[0].src = images[3].getAttribute('data-src');
		}
		else if(event.target.id === 'lens'){
			images[0].src = images[1].getAttribute('data-src');
		}
		else if(event.target.id === 'xmirror'){
			images[0].src = images[2].getAttribute('data-src');
		}
		else {
			images[0].src = images[0].getAttribute('data-src');
		}
	}
});