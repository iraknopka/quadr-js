const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt ('Enter C'));
const result = solveQuadr(a, b, c);
document.write(result);
function solveQuadr (a, b, c) {
    let x1, x2, x3;
     x1 = -b + (Math.sqrt(b**2 - 4*a*c)) / (2*a);
     x2 = -b - (Math.sqrt(b**2 - 4*a*c)) / (2*a);
     x3 = -b / (2*a);
     const d = discr(a, b, c);
    if (d > 0) 
        return 'x1 = ' + x1; 
        return 'x2 = ' + x2;
    
    if (d == 0)
    return x3 ;
     
   else  if (d < 0);
    return 'NaN';
}
function discr(a, b, c){
    return d = b**2 - 4*a*c;
}























