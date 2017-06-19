function ConnectController() {
	var _this = this;
	
	_this.camera = null;
	_this.controls = null;
	_this.lookAtVector3 = null;
	_this.lastEventMessage = null;
	
	_this.connector = null;
	_this.lastMessages = [null, null, null, null, null, null, null, null, null, null];
	
	_this.init = function () {
		_this.destructor();
		
		ConnectModel.myID = Math.random();
		_this.getMyType();
		ConnectModel.connectController = _this;
		
		_this.connector = new Connector();
		_this.connector.Event_connected = _this.onConnect;
		_this.connector.Event_disconnected = _this.onDisconnect;
		_this.connector.Event_data = _this.onConnectorData;
		_this.connector.init();
	}
	
	_this.setCamera = function (camera) {
		if (camera) {
			_this.camera = camera;
		}
	}
	
	_this.setControls = function (controls) {
		if (controls) {
			_this.controls = controls;
		}
	}
	
	_this.updateLastMessages = function (mes) {
		var clone = JSON.parse(JSON.stringify(mes));
		if (clone.event == "lookAt") {
			_this.lastMessages[0] = null;
			_this.arrayMove(_this.lastMessages, 1, 0);
			_this.lastMessages[1] = clone;
		}
		else if (clone.event == "simpleEvent") {
			_this.lastMessages[2] = null;
			_this.arrayMove(_this.lastMessages, 3, 2);
			_this.arrayMove(_this.lastMessages, 4, 3);
			_this.arrayMove(_this.lastMessages, 5, 4);
			_this.arrayMove(_this.lastMessages, 6, 5);
			_this.arrayMove(_this.lastMessages, 7, 6);
			_this.arrayMove(_this.lastMessages, 8, 7);
			_this.arrayMove(_this.lastMessages, 9, 8);
			_this.lastMessages[9] = clone;
		}
	}
	
	_this.arrayMove = function (arr, fromIndex, toIndex) {
		var element = arr[fromIndex];
		arr.splice(fromIndex, 1);
		arr.splice(toIndex, 0, element);
	}
	
	_this.setEvent = function (originalEvent, eventType, targetType, targetName, targetInsideId) {
		if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
			var obj = new Object();
			obj.eventType = eventType;
			obj.targetType = targetType;
			obj.targetName = targetName;
			obj.targetInsideId = targetInsideId;
			
			if (originalEvent && originalEvent.target) {
				obj.targetId = originalEvent.target.id;
			}
			
			obj.event = "simpleEvent";
			
			if (_this.lastEventMessage) {
				if (JSON.stringify(_this.lastEventMessage) == JSON.stringify(obj)) {
				}
				else {
					_this.lastEventMessage = obj;
					_this.sendNewMessage(_this.lastEventMessage);
					_this.updateLastMessages(obj);
				}
			}
			else {
				_this.lastEventMessage = obj;
				_this.sendNewMessage(_this.lastEventMessage);
				_this.updateLastMessages(obj);
			}
		}
	}
	
	_this.onCameraPositionChange = function (event) {
		if (_this.camera && (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER)) {
			var obj = new Object();
			obj.x = _this.camera.position.x;
			obj.y = _this.camera.position.y;
			obj.z = _this.camera.position.z;
			
			obj.event = "lookAt";
			
			if (_this.lookAtVector3) {
				if (JSON.stringify(_this.lookAtVector3) == JSON.stringify(obj)) {
				}
				else {
					_this.lookAtVector3 = obj;
					_this.sendNewMessage(_this.lookAtVector3);
					_this.updateLastMessages(obj);
				}
			}
			else {
				_this.lookAtVector3 = obj;
				_this.sendNewMessage(_this.lookAtVector3);
				_this.updateLastMessages(obj);
			}
		}
	}
	
	_this.setNewUser = function () {
		var obj = new Object();
		obj.myID = ConnectModel.myID;
		obj.myType = ConnectModel.myType;
		
		obj.event = "newUser";
		
		_this.sendNewMessage(obj);
	}
	
	_this.deleteNewBroadcaster = function () {
		var obj = new Object();
		obj.myID = ConnectModel.myID;
		obj.myType = ConnectModel.myType;
		
		obj.event = "deleteNewBroadcaster";
		
		_this.sendNewMessage(obj);
	}
	
	_this.getMyType = function () {
		var type = _this.getTypeFromURL();
		if (type) {
			if (type.toLowerCase() == "broadcaster") {
				ConnectModel.myType = ConnectModel.TYPE_BROADCASTER;
			}
			else if (type.toLowerCase() == "listener") {
				ConnectModel.myType = ConnectModel.TYPE_LISTENER;
			}
		}
	}
	
	_this.getTypeFromURL = function () {
		return _this.getParameterByName("type");
	}
	
	_this.getParameterByName = function getParameterByName(name, url) {
		if ((!url) && window && window.location) {
			url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) {
			return null;
		}
		if (!results[2]) {
			return '';
		}
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	_this.destructor = function () {
		if (_this.connector) {
			_this.connector.destructor();
			_this.connector = null;
		}
		
		_this.lastMessages = [null, null, null, null, null, null, null, null, null, null];
		
		ConnectModel.connectController = null;
		ConnectModel.connected = false;
		ConnectModel.myID = -1;
		ConnectModel.myType = "";
	
		_this.camera = null;
		_this.controls = null;
		_this.lookAtVector3 = null;
		_this.lastEventMessage = null;
	}
	
	_this.onConnect = function () {
		ConnectModel.connected = true;
		_this.setNewUser();
	}
	
	_this.onDisconnect = function () {
		_this.destructor();
		var str = "socket.io closed. \nRestore socket.io and reload the page.";
		alert(str);
	}
	
	_this.onConnectorData = function (data) {
		var obj = null;
		try {
			obj = JSON.parse(data);
		}
		catch (err) {
		}
		if (obj) {
			_this.parseConnectorData(obj);
		}
	}
	
	_this.parseConnectorData = function (obj) {
		if (obj.event == "newUser") {
			if (obj.myID != ConnectModel.myID) {
				if (ConnectModel.myType == ConnectModel.TYPE_LISTENER) {
					if (obj.myType == ConnectModel.TYPE_LISTENER) {
						// else one listener
					}
					else if (obj.myType == ConnectModel.TYPE_BROADCASTER) {
						// broadcaster coming
					}
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					if (obj.myType == ConnectModel.TYPE_LISTENER) {
						// listener for me, send last status to new listener
						if (_this.lastMessages) {
							for (var i = 0; i < _this.lastMessages.length; i++) {
								var mes = _this.lastMessages[i];
								if (mes) {
									mes.forId = obj.myID;
									_this.sendNewMessage(mes);
								}
							}
						}
					}
					else if (obj.myType == ConnectModel.TYPE_BROADCASTER) {
						// else one  broadcaster - delete it
						_this.deleteNewBroadcaster();
					}
				}
			}
		}
		else if ((obj.id != ConnectModel.myID) && (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER)) {
			if (obj.event == "deleteNewBroadcaster") {
				_this.destructor();
				var str = "Other broadcaster in the network. \nPlease turn off the other broadcasters and reload the page. \nNow you will be disconnected.";
				alert(str);
			}
		}
		else if ((obj.id != ConnectModel.myID) && (ConnectModel.myType == ConnectModel.TYPE_LISTENER)) {
			if ((obj.forId != undefined) && (obj.forId != null)) {
				if (obj.forId != ConnectModel.myID) {
					return;
				}
			}
			if ((obj.event == "lookAt") && _this.camera) {
				_this.camera.position.set(obj.x, obj.y, obj.z);
				if (_this.controls) {
					_this.controls.update();
				}
			}
			else if (obj.event == "simpleEvent") {
				_this.createNewEvent(obj);
			}
		}
	}
	
	_this.createNewEvent = function (obj) {
		if (document && obj && obj.targetType && obj.targetName && obj.eventType) {
			var element = null;
			if (obj.targetType == ConnectModel.EVENT_to_ID_ELEMENT) {
				element = document.getElementById(obj.targetName);
			}
			else if (obj.targetType == ConnectModel.EVENT_to_CLASS_NAME_ELEMENT) {
				element = document.getElementsByClassName(obj.targetName);
			}
			if (element && (obj.targetInsideId != undefined) && (obj.targetInsideId != null)) {
				if (element[obj.targetInsideId]) {
					element = element[obj.targetInsideId];
				}
			}
			
			if (element) {
				_this.eventFire(element, ConnectModel.EVENT_MOUSE_CLICK, obj.targetId);
			}
		}
	}
	
	_this.eventFire = function (el, etype, targetId) {
		if (el && document) {
			if (el.fireEvent) {
				el.fireEvent('on' + etype);
			}
			else {
				var evObj = document.createEvent('Events');
				evObj.fromServer = true;
				evObj.initEvent(etype, true, false);
				evObj.targetId = targetId;
				el.dispatchEvent(evObj);
			}
		}
	}
	
	_this.sendNewMessage = function (data) {
		if (data && _this.connector) {
			if (typeof data === 'object') {
				var clone = JSON.parse(JSON.stringify(data));
				clone.id = ConnectModel.myID;
				clone.type = ConnectModel.myType;
				_this.connector.sendNewMessage(JSON.stringify(clone));
			}
		}
	}
}	