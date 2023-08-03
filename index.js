// 1,2,foo,4,bar,foo,7,8,foo,bar,foobar ---output

function fooBar(input) {
    const result = [];
  
    for (const item of input) {
      if (typeof item === 'number') {
        if (item % 3 === 0 && item % 5 === 0) {
          result.push('foobar');
        } else if (item % 3 === 0) {
          result.push('foo');
        } else if (item % 5 === 0) {
          result.push('bar');
        } else {
          result.push(item);
        }
      } else {
        result.push(item);
      }
    }
  
    return result;
  }
  
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const output = fooBar(input);
  
  console.log(output.join(', '));
  
