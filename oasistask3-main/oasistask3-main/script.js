var cel=document.getElementById("cel");
var fah=document.getElementById("fah");
var kel=document.getElementById("kel");
cel.addEventListener('input',function() {
  let c = this.value;
  let f = (c * 9/5)+32;
  let k = (273.15 + parseFloat(c));
  fah.value=parseFloat(f.toFixed(3));
  kel.value=parseFloat(k.toFixed(3));
  
});
fah.addEventListener('input',function() {
    let f = this.value;
    let c = (f - 32) * 5/9;
    let k = (f-32)/1.8 + 273.15;
    cel.value=parseFloat(c.toFixed(3));
    kel.value=parseFloat(k.toFixed(3));
});
kel.addEventListener('input',function() {
  let k = this.value;
  let c = (k-273.15);
  let f = (c*9/5+32);
  cel.value=parseFloat(c.toFixed(3));
  fah.value=parseFloat(f.toFixed(3));
});