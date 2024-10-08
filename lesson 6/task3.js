function checkOrder(available, ordered) {
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    } else if (ordered == 0) {
        return "Your order is empty.";
    } else if (available > ordered) {
        return "Your order is accepted.";
    }
}
// or instead of the last 'else if': 
/* } else {
    return "Your order is accepted";
*/

console.log(checkOrder(100, 2));
console.log(checkOrder(100, 0));
console.log(checkOrder(100, 234));