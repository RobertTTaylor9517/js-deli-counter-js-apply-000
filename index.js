function takeANumber(line, name){
  var say;
  
  line.push(name);
  var i = line.length;
  
  say = 'Welcome, ' + name + '. You are number ' + i + ' in line.'
  return say;
}

function nowServing(line){
  if (line.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    var x = line.shift();
    return 'Currently serving ' + x + '.'
  }
}

function currentLine(line){
  if(line.length === 0){
    return 'The line is currently empty.'
  } else {
    var i;
    var outputArray = [];
    for (i = 0; i < line.length; i++){
      var entry =' ' + (i + 1) + '. '
      outputArray.push(entry.concat(line[i]))
    }
    return 'The line is currently:' + outputArray; 
  }
}
var place = 1

function takeAnumber2(line){
  var say
  line.push(place);
  
  var i = line.length;
  
  say = 'Welcome, Customer number: ' + place++ +'. You are number ' + i + ' in line.'
  
  return say;
  
}

var line = []
takeANumber(line, "Bob")
takeANumber(line, "John")
console.log(currentLine(line))
console.log(takeAnumber2(line))
console.log(currentLine(line))
nowServing(line)
console.log(currentLine(line))
takeAnumber2(line)
console.log(currentLine(line))