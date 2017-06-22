console.log('Hello WhollyCoder!!!');
outputArea = document.getElementById('output');

clearButton = document.getElementById('btn-clear');
clearButton.addEventListener('click', function(){
  console.log('Clear Button Clicked...');
  outputArea.innerHTML = '0';
});

oppositeButton = document.getElementById('btn-opposite');
oppositeButton.addEventListener('click', function(){
  console.log('Opposite Button Clicked...');
  outputArea.innerHTML = parseFloat(outputArea.innerHTML) * -1;
});
