let a = Number(prompt('Nhập số a'));
let b = Number(prompt('Nhập số b'));
let magic = prompt('Nhập các phép tính (+,-,*,/) ');


switch(magic){
    case '+' :
        alert(a + b);
        break;
    case '-' :
        alert(a - b);
        break;
    case '*' :
        alert(a * b)
        break;
    case '/' :
       alert(a / b);
       break;
    default :
    alert('không có phép tính đó')
}
