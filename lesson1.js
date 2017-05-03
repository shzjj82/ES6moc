function test() {
	// var a = 2;
	// for (let i = 1; i < 3; i++) {
	// 	console.log(i);
	// 如果一段代码是用大括号包起来的 就是块级
	// let 申明的变量只在自己的块级作用域里有效
	// }
	// console.log(i);
	// 如果你的代码是使用ES6 代码强制开启了严格模式 "user strict";
	// 严格模式下 变量未申明 不能引用 否则就会报引用错误
	// let a = 1;
	// let a = 2;
	// find module './class/lesson1' 表示js未被正确编译
	// Duplicate declaration ‘a’ a变量被重复定义
};

function last() {
	const PI = 3.1415926;
	const K = {
			a: 1
		}
		// PI = 8;
		// Const 定义一个常量 const 申明时必须赋值(但不严谨)
		// PI不能修改
	K.b = 3;
	console.log(PI, K);
}
// test();
last()