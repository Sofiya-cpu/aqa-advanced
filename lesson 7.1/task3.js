function divide(numerator, denominator) {
    if (denominator == 0) {
        throw Error("Not allowed to divide by 0.")
    } else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw Error("A number should be entered.");
    }
    return numerator / denominator;
}

try {
    divide(10, 2);
} catch (error) {
    console.error('An error occurred: ', error.message);
} finally {
    console.log('The work is done.');
}

try {
    divide(15, 0);
} catch (error) {
    console.error('An error occurred: ', error.message);
} finally {
    console.log('The work is done.');
}

try {
    divide('a', 6);
} catch (error) {
    console.error('An error occurred: ', error.message);
} finally {
    console.log('The work is done.');
}

try {
    divide(3, 'b');
} catch (error) {
    console.error('An error occurred: ', error.message);
} finally {
    console.log('The work is done.');
}

try {
    console.log(divide('abra', 'kadabra'));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("The work is done.");
}
