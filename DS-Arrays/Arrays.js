class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index){
    console.log('shift  index:' + index + ' item:' + this.data[index]);
    for (var i = index; i < this.length-1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[length-1];
    this.length--;
  }
}

const array = new MyArray();
array.push("hi");
array.push("you");
array.push("!");
array.pop();
array.push('hello');
array.push('world');
array.push('!');
array.delete(2);
console.log(array);

