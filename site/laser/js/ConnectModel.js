var ConnectModel = new Object();

//--------------------------------------

ConnectModel.connected = false;
ConnectModel.myID = -1;
ConnectModel.myType = "";
ConnectModel.connectController = null;

ConnectModel.TYPE_BROADCASTER = "TYPE_BROADCASTER";
ConnectModel.TYPE_LISTENER = "TYPE_LISTENER";

//--------------------------------------

ConnectModel.EVENT_MOUSE_CLICK = "click";

ConnectModel.EVENT_to_ID_ELEMENT = "EVENT_to_ID_ELEMENT";
ConnectModel.EVENT_to_CLASS_NAME_ELEMENT = "EVENT_to_CLASS_NAME_ELEMENT";

ConnectModel.setEvent = function(originalEvent, eventType, targetType, targetName, targetInsideId) {
	if (ConnectModel.connected && ConnectModel.connectController) {
		ConnectModel.connectController.setEvent(originalEvent, eventType, targetType, targetName, targetInsideId);
	}
}

ConnectModel.badEvent = function(event) {
	if (event && event.fromServer) {
		return false;
	}
	return true;
}

//--------------------------------------