class ArrayIterator {
    constructor(arr) {
        this.arr = arr;
        this.currentIndex = 0;
    }
    hasNext() {
        return this.currentIndex < this.arr.length;
    }
    next() {
        if (this.hasNext()) {
            return this.arr[this.currentIndex++];
        } else {
            throw new Error('No more elements in iterator');
        }
    }
}
// Test
const arr = ['a','b', 'c', 'd', 'e'];
const iterator = new ArrayIterator(arr);
while (iterator.hasNext()) {
    console.log(iterator.next());
}