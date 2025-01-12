// Реализация mySlice
function mySlice(arr, start = 0, end = arr.length) {
    const result = [];

    // Преобразование отрицательных индексов в положительные
    if (start < 0) start = arr.length + start;
    if (end < 0) end = arr.length + end;

    // Ограничение границ
    start = Math.max(0, start);
    end = Math.min(arr.length, end);

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }

    return result;
}

// Реализация myIndexOf
function myIndexOf(arr, item, from = 0) {
    if (from < 0) from = Math.max(0, arr.length + from);

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}

// Реализация myIncludes
function myIncludes(arr, item, from = 0) {
    if (from < 0) from = Math.max(0, arr.length + from);

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }

    return false;
}

// Примеры использования
const array = [1, 2, 3, 4, 5];

console.log(mySlice(array, 1, 4)); // [2, 3, 4]
console.log(myIndexOf(array, 3)); // 2
console.log(myIncludes(array, 3)); // true
