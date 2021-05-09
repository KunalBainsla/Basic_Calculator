const previnp = document.getElementById('prev-input');
const inp = document.getElementById('input-val');

document.getElementById('ac').onclick=()=>{
    inp.style.fontSize='1.25rem';
    previnp.style.color='white';
    previnp.style.opacity='1';
    inp.value='';
    previnp.value='';
}

document.getElementById('del').onclick=()=>{
    previnp.value=previnp.value.slice(0,-1);
    inp.value=inp.value.slice(0,-1)
}

num_inp= num =>{ previnp.value+=num;  inp.value=eval(previnp.value); }

document.getElementById('num1').onclick=()=>num_inp(1);
document.getElementById('num2').onclick=()=>num_inp(2);
document.getElementById('num3').onclick=()=>num_inp(3);
document.getElementById('num4').onclick=()=>num_inp(4);
document.getElementById('num5').onclick=()=>num_inp(5);
document.getElementById('num6').onclick=()=>num_inp(6);
document.getElementById('num7').onclick=()=>num_inp(7);
document.getElementById('num8').onclick=()=>num_inp(8);
document.getElementById('num9').onclick=()=>num_inp(9);
document.getElementById('num0').onclick=()=>num_inp(0);

document.getElementById('deci').onclick=()=>{
    previnp.value+='.';
}

 exp_sign=(operat)=>previnp.value+= operat;

document.getElementById('add').onclick=()=>exp_sign('+');
document.getElementById('sub').onclick=()=>exp_sign('-');
document.getElementById('multi').onclick=()=>exp_sign('*');
document.getElementById('divi').onclick=()=>exp_sign('/');

document.getElementById('equal').onclick=()=>{

    inp.style.fontSize='3rem';
    previnp.style.color='black';
    previnp.style.opacity='0';
    inp.value=eval(previnp.value);
}