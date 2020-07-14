function add(x, y, z) {
	return x + y + z;
}

function partiallyApply(func, x, y) {
	return function (z) {
		return func(x, y, z);
	};
}

let add5 = partiallyApply(add, 5, 3);

console.log(add5(2));
