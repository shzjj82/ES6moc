{
	let a, b, rest;
	// let a=1,b=2
	[a, b] = [1, 2];
	console.log(a, b);
}

{
	let a, b, rest;
	[a, b, ...rest] = [1, 2, 3, 4, 5, 6];
	console.log(a, b, rest);
}

{
	let a, b;
	({
		a,
		b
	} = {
		a: 1,
		b: 2
	});
	console.log(a, b);
}

{
	let a, b, c, rest;
	[a, b, c = 3] = [1, 2];
	// c=3 是设置默认值
	// 当未设置c=3时 则等于undefined
	console.log(a, b, c);
}

{
	let a = 1;
	let b = 2;
	[a, b] = [b, a];
	// ES6的解构赋值特别使用变量交换
	console.log(a, b);
}

{
	function f() {
		return [1, 2];
	}
	// 非ES6时需要重新申明一个变量 用于接受函数返回值 并用索引来获取返回值 而ES6很有效的简化了这个步骤
	let a, b;
	[a, b] = f();
	console.log(a, b);
}

{
	function f() {
		return [1, 2, 3, 4, 5];
	}
	let a, b, c;
	[a, , , b] = f();
	console.log(a, b);
}

{
	function f() {
		return [1, 2, 3, 4, 5];
	}
	let a, b, c;
	[a, ...b] = f();
	console.log(a, b);
	// 不确定函数返回的数组长度是多少 我只关心第一个元素 后面的放入一个数组 用于遍历使用
}

// 块级作用域 把变量隔离 不存在变量重复申明


{
	let o = {
		p: 42,
		q: true
	};
	let {
		p,
		q
	} = o;
	console.log(p, q);
	//  对象解构赋值 左侧是一个对象 右侧也是一个对象 是根据key value的形式去赋值的
}

{
	let {
		a = 10, b = 5
	} = {
		a: 3
	};
	console.log(a, b);
}

{
	let metaData = {
		title: 'abc',
		test: [{
			title: 'test',
			desc: 'description'
		}]
	}
	let {
		title: esTitle,
		test: [{
			title: cnTitle
		}]
	} = metaData;
	console.log(esTitle, cnTitle);
}