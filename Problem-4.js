function occuOfNo(arr) {

    let count = {};
    for (let i=0; i<arr.length; i++) {
        count[arr[i]] = 0;
    }

    for (let j=0; j<arr.length; j++) {
        count[arr[j]]++;
    }
    console.log(count)
}