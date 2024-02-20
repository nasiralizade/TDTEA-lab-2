
Array.prototype.iterator2 = function () {
    let currentIndex = 0;
    const arr = this;
    return {
        hasNext: function () {
            return currentIndex < arr.length;
        },
        next: function () {
            if (this.hasNext()) {
                return arr[currentIndex++];
            } else {
                throw new Error('No more elements in iterator');
            }
        }
    }
}
// Test
const arr = [1, 2, 3, 4, 5];
const iterator2 = arr.iterator2();
while (iterator2.hasNext()) {
    console.log(iterator2.next());
}