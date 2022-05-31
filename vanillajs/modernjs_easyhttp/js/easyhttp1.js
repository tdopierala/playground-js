/**
 * EeasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 1.0
 * @author tdopierala
 * @license MIT
 *
 */

function easyHTTP() {
	this.http = null; // new XMLHttpRequest();
}

// make http get request
easyHTTP.prototype.get = function (url, callback) {
	// console.log('calling get method');

	this.http = new XMLHttpRequest();

	this.http.open('GET', url, true);

	let self = this;
	this.http.onload = function () {
		if (self.http.status === 200) {
			callback(null, self.http.responseText);
		} else {
			callback('Error: ' + self.http.status);
		}
	};

	this.http.send();
};

// make http post request
easyHTTP.prototype.post = function (url, data, callback) {
	// console.log('calling post method');

	this.http = new XMLHttpRequest();

	this.http.open('POST', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');

	let self = this;
	this.http.onload = function () {
		callback(null, self.http.responseText);
	};

	this.http.send(JSON.stringify(data));
};

// make http put request
easyHTTP.prototype.put = function (url, data, callback) {
	// console.log('calling put method');

	this.http = new XMLHttpRequest();

	this.http.open('PUT', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');

	let self = this;
	this.http.onload = function () {
		callback(null, self.http.responseText);
	};

	this.http.send(JSON.stringify(data));
};

// make http delete request
easyHTTP.prototype.delete = function (url, callback) {
	// console.log('calling delete method');

	this.http = new XMLHttpRequest();

	this.http.open('DELETE', url, true);

	let self = this;
	this.http.onload = function () {
		if (self.http.status === 200) {
			callback(null, self.http.responseText);
		} else {
			callback('Error: ' + self.http.status);
		}
	};

	this.http.send();
};
