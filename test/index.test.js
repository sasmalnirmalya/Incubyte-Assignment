const {add } = require('../index');

test('adds 1,2,3 to equal 6', () => {
    expect(add('1,2,3')).toBe(6);
});

test('empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('1', () => {
    expect(add('1')).toBe(1);
});

test( 'Using /n and , as delimiter', ()=>{
    expect(add("1\n2,3")).toBe(6)
})

test( 'Use of custom delimiter', ()=>{
    expect(add("//;\n1;2")).toBe(3)
})

test( 'Throw error in case of negative numbers', ()=>{
    expect(()=>add("-1,-2,3,4")).toThrowError(
        'negative numbers not allowed: -1,-2'
      );
})

test( 'Throw error in case of single negative number', ()=>{
    expect(()=>add("-1,3,4")).toThrowError(
        'negative numbers not allowed: -1'
      );
})

test( 'Skip numbers greater than 1000', ()=>{
    expect(add("//;\n1;2;5;1006;7;8")).toBe(23)
})
