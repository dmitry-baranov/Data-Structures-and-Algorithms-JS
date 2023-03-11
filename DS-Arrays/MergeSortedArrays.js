

function mergeSortedArrays(array1, array2) {
	if (array1.length === 0) {
		return array2;
	}
	if (array2.length === 0) {
		return array1;
	}
	const mergedArray = [];
	let i = 0;
	let j = 0;
	while(array1[i] || array2[j]){
		if (!array1[i] || array1[i] > array2[j]) {
			mergedArray.push(array2[j]);
			j++;
		} else {
			mergedArray.push(array1[i]);
			i++;
		}
	}
	return mergedArray;
}

console.log(undefined > 1 || undefined < 1);

console.log(mergeSortedArrays([1,5,7,9,11], [2,3,4,6,8]));