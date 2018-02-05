
var btd = document.getElementById('btd');
var btb = document.getElementById('btb');
var ind = document.getElementById('ind');
var inb = document.getElementById('inb');


function dec2bin(decNum) {
  if (decNum == 0) return '0';

  var array = [];
  for (var i = 0; decNum > 0; i++) {
    array.push(decNum % 2);
    decNum = Math.floor(decNum/2);
  }
  array.reverse();

  var binResult = "";
  for (var i = 0; i < array.length; i++) {
    var binResult = binResult + array[i].toString();
  }

  return binResult;
};


function bin2dec(binNum) {
  if (binNum == 0) return '0';

  var binStr = binNum.toString();
  var j = 0;
  var decResult = 0;

  for (var i = binStr.length; i > 0; i--) {
    var n = parseInt(binStr[i-1]);
    decResult += Math.pow(2,j)*n;
    j++;
  }

  return decResult.toString();
}



function decHandler(event) {
  var decNum = ind.value;
  inb.value = dec2bin(decNum);
}

function binHandler(event) {
  var binNum = inb.value;
  ind.value = bin2dec(binNum);
}

btd.addEventListener('click', decHandler);
btb.addEventListener('click', binHandler);
