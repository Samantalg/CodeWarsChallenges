const adjacentElementsProduct = arrInput => (Math.max(...arrInput
        .slice(0, -1)
        .map((n, i) => n * arrInput[i +1]))
    );

module.exports = adjacentElementsProduct;