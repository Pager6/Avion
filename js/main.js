let count = 1;
const quantity = document.getElementById('quantity');

function increase() {
    count++;
    quantity.textContent = count;
}

function decrease() {
    if (count > 0) {
        count--;
        quantity.textContent = count;
    }
}