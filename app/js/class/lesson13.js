{
	// promise 解决回调地狱问题
	let ajax = function(callback) {
		console.log('执行');
		setTimeout(function() {
			callback && callback.call();
		}, 1000)
	}

	ajax(function() {
			console.log('timeout1');
		})
		// promis 功能上是一样的；影响后期的维护 很难阅读
}

{
	let ajax = function(callback) {
		console.log('执行');
		return new Promise(function(resolve, rejact) {
			setTimeout(function() {
				resolve();
			}, 2000);
		})
	}

	ajax().then(function() {
		console.log('promise', 'timeout2');
	});
}

{
	// 多个回调执行!!
	let ajax = function(callback) {
		console.log('执行3');
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve();
			}, 1000)
		})
	}

	ajax().then(function() {
		console.log('第一次回调', 'timeout3')
		return new Promise(function(resolve, rejact) {
			setTimeout(function() {
				resolve();
			}, 1000);
		});
	}).then(() => console.log('第二次回调', "timeout3"));
}

{
	let ajax = function(num) {
		console.log('执行4');
		return new Promise(function(resolve, rejact) {
			if (num > 5) {
				resolve();
			} else {
				throw Error('出错了');
			}
		})
	}

	ajax(5).then(function() {
		console.log('log', 6)
	}).catch(function(error) {
		console.log('catch', error);
	})
}

{
	//所有图片加载玩再加载页面
	function loadingImg(src) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = function() {
				resolve(img);
			}
			img.onerror = function(err) {
				rejact(err);
			}
		})
	}

	function showImgs(imgs) {
		imgs.forEach(function(img) {
			document.body.appendChild(img)
		})
	}

	Promise.all([
		loadingImg("http://i4.buimg.com/567571/dflef0720bea6832.png"),
		loadingImg("http://i4.buimg.com/567571/2b07ee25b08930ba.png"),
		loadingImg("http://i4.buimg.com/567571/5eb8190d6b2alc9c.png"),
	]).then(showImgs)

	// Promise.all([]) 把多个promise实例当作一个实例
}

{
	//所有图片加载玩再加载页面
	function loadingImg(src) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = function() {
				resolve(img);
			}
			img.onerror = function(err) {
				rejact(err);
			}
		})
	}

	function showImgs(img) {
		let p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	}

	Promise.race([
		loadingImg("http://i4.buimg.com/567571/dflef0720bea6832.png"),
		loadingImg("http://i4.buimg.com/567571/2b07ee25b08930ba.png"),
		loadingImg("http://i4.buimg.com/567571/5eb8190d6b2alc9c.png"),
	]).then(showImgs)

	// Promise.race 先到先得
}