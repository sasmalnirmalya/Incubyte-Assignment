function add (input){

    sum=0;
    let delimiter=/[\n,]/;

    if (input.startsWith("//")) {
        const delimiterEndIndex = input.indexOf("\n");
        const customDelimiter = input.slice(2, delimiterEndIndex);
        delimiter = new RegExp(escapeRegex(customDelimiter));
        input = input.slice(delimiterEndIndex + 1); // Remaining numbers
    }

    let arr=input.split(delimiter);
  
    arr.forEach(element => {
        sum+=+element;
    });

    return sum;

}


function escapeRegex(delimiter) {
    return delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}


module.exports = { add }
