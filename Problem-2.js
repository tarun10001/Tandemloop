function printOdd(a) {
    let count = 0;
    let res = 1;
    let arr = [];

    while (count < a) {
        if (res % 2 !== 0) {
            arr.push(res);
            count++;
        }
        res++;
    }
    console.log(arr);
}
printOdd(4);