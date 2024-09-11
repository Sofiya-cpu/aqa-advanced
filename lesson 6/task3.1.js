function checkOrder(available, ordered) {
    if (ordered == 0) {
        return "Your order is empty.";
    }

    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    }

    if (available > ordered) {
        return "Your order is accepted.";
    }
}

console.log(checkOrder(100, 2));
console.log(checkOrder(100, 0));
console.log(checkOrder(100, 234));