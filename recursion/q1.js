// 

function areBracketsBalanced(expr)
{
	let stack = [];
	for(let i = 0; i < expr.length; i++)
	{
		let x = expr[i];
		if (x == '(' || x == '[' || x == '{')
		{	
			stack.push(x);
			continue;
		}
		if (stack.length == 0)
			return false;	
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;
		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;
		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}
	return (stack.length == 0);
}
let expr = "([{}])";
if (areBracketsBalanced(expr))
	console.log("True ");
else
	console.log("False ");
/////////////

//2nd

function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}
let number = 7
convertToBinary(number);

///3rd


function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  console.log(gcd_two_numbers(6, 9));
