//Create a function that reverses a string:
//'Hi My name is Dmitry' should be:
//'yrtimD si eman yM iH'

function reverse(str) {
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'hmm that is not good';
	}
	const array = [];
	for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
		array[j] = str[i];
	}
	return array.join('');
}

function reverse2(str){
	return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const string = 'Hi My name is Dmitry';
console.log(reverse(string));
console.log(reverse2(string));
console.log(reverse3(string));