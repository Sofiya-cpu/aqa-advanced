function timeOutTest(text, seconds) {
    console.log(`My ${text} appears in ${seconds}`);
}

setTimeout(timeOutTest, 1000, "desired extra unique text", "1 second.");