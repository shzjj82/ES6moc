{
	let regex = new RegExp('xyz', 'i');
	let regex2 = new RegExp(/xyz/i);
	console.log(regex.test('xyz123'), regex2.test('xyz123'));
	let regex3 = new RegExp(/xyz/ig, 'i');
	console.log(regex3.flags);
}

{
	let s = 'bbb_bb_b';
	let a1 = /b+/g;
	let a2 = /b+/y;
	console.log('one:', a1.exec(s), a2.exec(s));
	console.log('two:', a1.exec(s), a2.exec(s));
	// y g 都是全局匹配 g修饰符从下一个匹配成功 y修饰符从匹配后成功匹配的
}