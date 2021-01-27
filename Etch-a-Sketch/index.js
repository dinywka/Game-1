let container = document.querySelector('.container')
let paintArea = document.createElement('div')
/*var size = document.getElementById('slider').value 
console.log(size)

function findValue() {
    var x = document.getElementById('slider').value 
    console.log(x)
}
*/
function makeRows(x) {
    console.log(x)
    container.style.setProperty('--grid-rows', x);
    container.style.setProperty('--grid-cols', x);
    for (c = 0; c < (x * x); c++) {
      let cell = document.createElement("div");
      cell.style.cssText = 'border: solid 1px #F5F5DC';
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  //makeRows(3);
  sjhjkhjk






