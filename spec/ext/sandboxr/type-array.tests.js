import {es5 as runner} from "./test-runner";

describe("Type: Array", () => {
	it("should create an array for an array literal", done => {
		runner.confirmBlock("Array.isArray([]);", done);
	});

	it("should have a length of 0 with empty array", done => {
		runner.confirmBlock("[].length==0;", done);
	});

	it("should add items to array literal", done => {
		runner.confirmBlock("var a = [1,2,3];a[2]==3;", done);
	});

	it("should set length based on array length", done => {
		runner.confirmBlock("var a = [1,2,3];a.length==3;", done);
	});

	describe("Array.prototype.push", () => {
		it("should add item to array", done => {
			runner.confirmBlock("var a = [1,2,3];a.push(4);a[3]==4;", done);
		});

		it("should update length", done => {
			runner.confirmBlock("var a = [1,2,3];a.push(4);a.length==4;", done);
		});

		it("should return the new length", done => {
			runner.confirmBlock("var a = [1,2,3];a.push(4)==4;", done);
		});
	});

	describe("Array.prototype.pop", () => {
		it("should return the last item from the array", done => {
			runner.confirmBlock("var a = [1,2,3];a.pop()==3;", done);
		});

		it("should update the length", done => {
			runner.confirmBlock("var a = [1,2,3];a.pop();a.length==2;", done);
		});

		it("should return undefined for an empty array", done => {
			runner.confirmBlock("[].pop()===undefined;", done);
		});

		it("should not affect length of empty array", done => {
			runner.confirmBlock("var a = [];a.pop();a.length==0", done);
		});
	});

	describe("Array.prototype.shift", () => {
		it("should return the first item in the array", done => {
			runner.confirmBlock("var a = [1,2,3];a.shift()==1;", done);
		});

		it("should remove the first item from the array", done => {
			runner.confirmBlock("var a = [1,2,3];a.shift();a[0]==2;", done);
		});

		it("should update the array length", done => {
			runner.confirmBlock("var a = [1,2,3];a.shift();a.length==2;", done);
		});

		it("should update the array indexes", done => {
			runner.confirmBlock("var a = [1,2,3];a.shift();a[2]===undefined;", done);
		});
	});

	describe("Array.prototype.unshift", () => {
		it("should insert the items to the beginning of the array", done => {
			runner.confirmBlock("var a = [1,2,3];a.unshift(-1, 0);a[1]==0", done);
		});

		it("should move the other items in the array", done => {
			runner.confirmBlock("var a = [1,2,3];a.unshift(-1, 0);a[2]==1;", done);
		});

		it("should return new length of array", done => {
			runner.confirmBlock("var a = [1,2,3];a.unshift(-1, 0)==5;", done);
		});

		it("should update length of array", done => {
			runner.confirmBlock("var a = [1,2,3];a.unshift(-1, 0);a.length==5;", done);
		});
	});

	describe("Array.prototype.slice", () => {
		it("should return a new array", done => {
			runner.confirmBlock("Array.isArray([1,2,3].slice(0, 3))", done);
		});

		it("should contain the items in the range", done => {
			runner.confirmBlock("var a = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'].slice(1, 3);a[1]=='Lemon';", done);
		});

		it("should contain only those items", done => {
			runner.confirmBlock("var a = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'].slice(1, 3);a.length==2;", done);
		});

		it("should extract until end if end is undefined", done => {
			runner.confirmBlock("var a = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'].slice(1);a.length==4;", done);
		});

		it("should extract the entire array if begin is undefined", done => {
			runner.confirmBlock("var a = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'].slice();a.length==5;", done);
		});

		it("should offset from the end if a negative begin", done => {
			runner.confirmBlock("var a = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'].slice(-2);a[0]=='Apple';", done);
		});

		it("should extract until up to end - negative end", done => {
			runner.confirmBlock("var a = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'].slice(0, -1);a.length==4;", done);
		});
	});

	describe("Array.prototype.splice", () => {
		it("should insert the item at the position specified", done => {
			runner.confirmBlock("var a = ['angel', 'clown', 'mandarin', 'surgeon'];var b=a.splice(2, 0, 'drum');a[2]=='drum' && a.length==5 && b.length==0;", done);
		});

		it("should remove count specified from array", done => {
			runner.confirmBlock("var a = ['angel', 'clown', 'drum', 'mandarin', 'surgeon'];var b=a.splice(3, 1);b.length==1 && a[3]=='surgeon';", done);
		});

		it("should insert new item in deleted position", done => {
			runner.confirmBlock("var a = ['angel', 'clown', 'drum', 'surgeon'];a.splice(2, 1, 'trumpet');a[2]=='trumpet';", done);
		});

		it("should insert all items, even if delete count is less", done => {
			runner.confirmBlock("var a = ['angel', 'clown', 'trumpet', 'surgeon'];var b=a.splice(0, 2, 'parrot', 'anemone', 'blue');b.length=2 && a.length==5 && a[0]=='parrot' && a[2]=='blue';", done);
		});

		it("should remove elements until end if delete count exceeds length", done => {
			runner.confirmBlock("var a = ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon'];var b=a.splice(3, Number.MAX_VALUE);b.length==2 && a.length==3;", done);
		});
	});

	describe("Array.prototype.concat", () => {
		it("should combine 2 arrays", done => {
			runner.confirmBlock("var a = ['a', 'b', 'c'];var b=a.concat([1, 2, 3]);b.length==6 && b[3]==1;", done);
		});

		it("should combine multiple arrays", done => {
			runner.confirmBlock("var num1 = [1, 2, 3],num2 = [4, 5, 6],num3 = [7, 8, 9];var a=num1.concat(num2,num3);a.length==9 && a[3]==4 && a[6]==7;", done);
		});

		it("should combine flatten arrays/values", done => {
			runner.confirmBlock("var a = ['a', 'b', 'c'];var b=a.concat(1, [2, 3]);b.length==6 && b[3]==1 && b[4]==2;", done);
		});
	});

	describe("Array.prototype.indexOf", () => {
		it("should return -1 if item is not found", done => {
			runner.confirmBlock("[1,2,3].indexOf(4)==-1;", done);
		});

		it("should return index if found", done => {
			runner.confirmBlock("[1,2,3].indexOf(2)==1;", done);
		});

		it("should search using fromIndex if supplied", done => {
			runner.confirmBlock("[1,2,3,2,1].indexOf(2, 2)==3", done);
		});
	});

	describe("Array.prototype.lastIndexOf", () => {
		it("should return last index if found", done => {
			runner.confirmBlock("[2, 5, 9, 2].lastIndexOf(2)==3;", done);
		});

		it("should return -1 if not found", done => {
			runner.confirmBlock("[2, 5, 9, 2].lastIndexOf(7)==-1;", done);
		});

		it("should use from index if supplied", done => {
			runner.confirmBlock("[2, 5, 9, 2].lastIndexOf(2, 2)==0;", done);
		});

		it("should offset for negative index if supplied", done => {
			runner.confirmBlock("[2, 5, 9, 2].lastIndexOf(2, -2)==0;", done);
		});

		it("should offset for negative index is below 0 -1 is returned", done => {
			runner.confirmBlock("[2, 5, 9, 2].lastIndexOf(2, -10)==-1;", done);
		});
	});

	describe("Array.prototype.join", () => {
		it("should join values with a comma if no separator is specified", done => {
			runner.confirmBlock("['Wind', 'Rain', 'Fire'].join()=='Wind,Rain,Fire'", done);
		});

		it("should join values with a no separator if empty string is specified", done => {
			runner.confirmBlock("['Wind', 'Rain', 'Fire'].join('')=='WindRainFire';", done);
		});

		it("should join values with separator if specified", done => {
			runner.confirmBlock("['Wind', 'Rain', 'Fire'].join('--')=='Wind--Rain--Fire'", done);
		});
	});

	describe("Array.prototype.forEach", () => {
		it("should iterate over the array", done => {
			runner.confirmBlock("var counter=0;[1,2,3].forEach(function() { counter++; });counter==3;", done);
		});

		it("should pass in expected arguments", done => {
			runner.confirmBlock("var a = [1,2,3], passed = true;a.forEach(function(value, index, arr) { passed = (passed && value == a[index] && arr === a); });passed==true;", done);
		});

		it("should use expected scope", done => {
			runner.confirmBlock("var a = [1,2,3], passed = true, scope = {};a.forEach(function(value, index, arr) { passed = (passed && this === scope); }, scope);passed==true;", done);
		});

		it("should skip missing values in sparse array", done => {
			runner.confirmBlock("var counter=0;var a = [1,2]; a[10] = 10;a.forEach(function() { counter++; });counter==3;", done);
		});
	});

	describe("Array.prototype.map", () => {
		it("should return the mapped values", done => {
			runner.confirmBlock("var a=[1,2,3].map(function (i) { return i * 2; });a.length==3 && a[0]==2 && a[2]==6;", done);
		});
	});

	describe("Array.prototype.filter", () => {
		it("should filter values from the array", done => {
			runner.confirmBlock("var a=[12, 5, 8, 130, 44].filter(function (v) { return v >= 10; });a.length==3 && a[0]==12 && a[1]==130;", done);
		});
	});

	describe("Array.prototype.every", () => {
		it("should return true for an empty array", done => {
			runner.confirmBlock("[].every(function () { return true; });", done);
		});

		it("should return true if all elements match predicate", done => {
			runner.confirmBlock("[1,2,3].every(function (v) { return v > 0; });", done);
		});

		it("should return false if any element does not match predicate", done => {
			runner.confirmBlock("!([-1,2,3].every(function (v) { return v > 0; }));", done);
		});
	});

	describe("Array.prototype.some", () => {
		it("should return false for an empty array", done => {
			runner.confirmBlock("!([].some(function() { return true; }));", done);
		});

		it("should return false if all items fail", done => {
			runner.confirmBlock("!([1,2,3].some(function(v) { return v < 0; }));", done);
		});

		it("should return true if any items passes", done => {
			runner.confirmBlock("[-1,2,3].some(function(v) { return v < 0; });", done);
		});
	});

	describe("Array.prototype.reduce", () => {
		it("should execute reduce callback", done => {
			runner.confirmBlock("var a=[0, 1, 2, 3].reduce(function(a, b) { return a + b; });a==6;", done);
		});

		it("should execute reduce callback with initial value if provided", done => {
			runner.confirmBlock("var a=[0, 1, 2, 3].reduce(function(a, b) { return a + b; }, -6);a==0;", done);
		});
	});

	describe("Array.prototype.reverse", () => {
		it("should reverse the items in the array", done => {
			runner.confirmBlock("var a=['one', 'two', 'three'].reverse();a[0]=='three' && a[2]=='one';", done);
		});

		it("should pass a reference to the same array back", done => {
			runner.confirmBlock("var a = ['one', 'two', 'three'];a.reverse() === a;", done);
		});
	});

	describe("Array.prototype.sort", () => {
		it("should return a reference to the array", done => {
			runner.confirmBlock("var a = [1,2,3];a === a.sort()", done);
		});

		it("should sort the array without a compare function", done => {
			runner.confirmBlock("var a=['cherries', 'apples', 'bananas'];a.sort();a[0]=='apples' && a[2]=='cherries';", done);
		});

		it("should sort by default converting to string", done => {
			runner.confirmBlock("var a = [1, 10, 21, 2];a.sort();a[0]==1 && a[1]==10 && a[3]==21;", done);
		});

		it("should sort using a comparer function if provided", done => {
			runner.confirmBlock("var a=[4, 2, 5, 1, 3];a.sort(function(a, b) { return a - b; });a[0]==1 && a[4]==5;", done);
		});
	});

	describe("Array.prototype.toString", () => {
		it("should return a string representation of the array", done => {
			runner.confirmBlock("['Jan', 'Feb', 'Mar', 'Apr'].toString()=='Jan,Feb,Mar,Apr';", done);
		});
	});
});
