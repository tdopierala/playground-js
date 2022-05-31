const data = { title: 'Custom Post', body: 'This is a custom post' };

// * Calls for version 1.0 (ES5)
/*
const http = new easyHTTP();

http.get('http://jsonplaceholder.typicode.com/posts', callbackFunc);

http.post('http://jsonplaceholder.typicode.com/posts', data, callbackFunc);

http.put('http://jsonplaceholder.typicode.com/posts/1', data, callbackFunc);

http.delete('http://jsonplaceholder.typicode.com/posts/1', callbackFunc);

function callbackFunc(error, response) {
	if(error) console.log(error);
	else console.log(response);
}
 */

// * Calls for version 2.0 (ES6) and version 3.0 (ES7)

const http = new EasyHTTP();

http
	.get('http://jsonplaceholder.typicode.com/posts')
	.then((data) => console.log(data))
	.catch((error) => console.log(error));

http
	.post('http://jsonplaceholder.typicode.com/posts', data)
	.then((data) => console.log(data))
	.catch((error) => console.log(error));

http
	.put('http://jsonplaceholder.typicode.com/posts/1', data)
	.then((data) => console.log(data))
	.catch((error) => console.log(error));

http
	.delete('http://jsonplaceholder.typicode.com/posts/1', data)
	.then((data) => console.log(data))
	.catch((error) => console.log(error));
