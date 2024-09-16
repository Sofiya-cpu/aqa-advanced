function divide(numerator, denominator) {
    try {
        if (denominator == 0) {
            console.log("Not allowed to divide by 0.");
            return;

        } else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
            console.log("Enter a number, plase.");
            return;
        }

        console.log(numerator / denominator);

    } catch (error) {
        console.error(error);
    } finally {
        console.log("The work is done.");
    }
}

divide(10, 2);
divide(15, 0);
divide('a', 6);
divide(3, 'b');
divide('abra', 'kadabra');