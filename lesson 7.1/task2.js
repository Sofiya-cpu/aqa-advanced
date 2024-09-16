function oneParameter(num) {
    console.log(num);

    if (num >= 0) {
        oneParameter(num - 1);
    }
}

oneParameter(5);