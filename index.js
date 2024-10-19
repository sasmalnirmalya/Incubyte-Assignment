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
    let negativeNos=[];
  
    arr.forEach(element => {
        if( +element<0){
            negativeNos.push(+element);
        }
        else 
        sum+=+element;
    });

    if(negativeNos.length>0)
    {
        throw new Error(
            `negative numbers not allowed: ${negativeNos.join(",")}`
        );
    }

    return sum;

}


function escapeRegex(delimiter) {
    return delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

add('3,4')


module.exports = { add }
