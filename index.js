function add (input){

    let arr=input.split(/[\n,]/);
    let sum=0;
    arr.forEach(element => {
        sum+=+element;
    });

    return sum;

}

module.exports = { add }
