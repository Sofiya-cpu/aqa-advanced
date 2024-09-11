function checkOrder(available, ordered) {
    if (ordered == 0) {
        console.log("Your order is empty.");
        return;
    }

    if (available < ordered) {
        console.log("Your order is too large, we don’t have enough goods.");
        return;
    }

    if (available > ordered) {
        console.log("Your order is accepted.");
        return;
    }
}

checkOrder(100, 2);
checkOrder(100, 0);
checkOrder(100, 234);

