function testPalidrom(str) {
    let modified = str.toLowerCase();
    let i = 0;
    let j = modified.length - 1;
    while (i < j) {
        if (modified[i] !== modified[j]) {
            return false;
        }
        i++;
        j--
    }
    return true;
}

console.log(testPalidrom(str))