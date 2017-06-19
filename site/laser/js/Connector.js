function Connector() {
	var _this = this;
	
	_this.Event_connected = null;
	_this.Event_disconnected = null;
	_this.Event_data = null;
	
	_this.socket = null;
	
	_this.init = function () {
		_this.socket = io();
		if (_this.socket) {
			_this.socket.on('chat message', _this.onSocketData);
			_this.socket.on('disconnect', _this.onSocketDisconnect);
				
			if (_this.Event_connected) {
				_this.Event_connected();
			}
		}
	}
	
	_this.onSocketDisconnect = function (event) {
		if (_this.Event_disconnected) {
			_this.Event_disconnected();
		}
	}
	
	_this.onSocketData = function (data) {
		if ((data!= null) && (data.length > 0)) {
			if (_this.Event_data) {
				_this.Event_data(data);
			}
		}
	}
	
	_this.sendNewMessage = function (data) {
		if (_this.socket && (data != null) && (data.length > 0)) {
			_this.socket.emit('chat message', data);
		}
	}
	
	_this.destructor = function () {
		if (_this.socket) {
			_this.socket.disconnect();
		}
	}
}