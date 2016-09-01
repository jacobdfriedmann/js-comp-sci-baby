const defaultCompare = (a, b) => {
    return a > b;
};

export default binarySearch(orderedArray, item, compare = defaultCompare, startIndex = 0) {
    if (orderedArray.length === 1) {
        return item === orderedArray[0] ? startIndex : undefined;
    }
    const midpoint = Math.floor(orderedArray.length / 2);
    if (item === orderedArray[midpoint]) {
        return midpoint + startIndex;
    } else if (item === orderedArray[midpoint + 1]) {
        return midpoint + startIndex + 1;
    } else if (compare(item, orderedArray[midpoint + 1])) {
        return binarySearch(orderedArray.slice(midpoint + 1), item, compare, startIndex + midpoint + 1);
    } else if (!compare(item, orderedArray[midpoint])) {
        return binarySearch(orderedArray.slice(0, midpoint), item, compare, startIndex);
    }
    return undefined;
}
