function sum(...nums: number[]): number {
    return nums.reduce((acc, num) => acc+num, 0);
  }
  console.log(sum(2,2,2,2,2)); // >> 10

  function operation(type: string, initial: number, ...nums: number[]): number {
    if (type === 'sum') return nums.reduce((acc, num) => acc+num, initial);
    else if (type === 'sub') return nums.reduce((acc, num) => acc-num, initial);
  }
  console.log(operation('sub',10,2,2,1)); // >> 5
