
exports.min = function min (array) {
  
  if (typeof array !== 'undefined' && array.length>0) {
    let a=array[0];
  for (i=1; i<array.length; i++) {
    if (array[i] < a) {
      a=array[i];
    } 
  }
    return a;
} else return 0;
}

exports.max = function max (array) {
  if (typeof array !== 'undefined' && array.length>0) {
    let a=array[0];
  for (i=1; i<array.length; i++) {
    if (array[i] > a) {
      a=array[i];
    }
  }
  return a;
} else return 0;
}

exports.avg = function avg (array) {
  if (typeof array !== 'undefined' && array.length>0) {
  let count=0;
  for (i=0; i<array.length; i++) {
    count=count + array[i];
  }
  return count/array.length;
} else return 0;
}

/*
function min(array) {
  let a=array[0];
  for (i=1; i<array.length; i++) {
    if (array[i] < a) {
      a=array[i];
    }
  }
  return a;
}

function max(array) {
  let a=array[0];
  for (i=1; i<array.length; i++) {
    if (array[i] > a) {
      a=array[i];
    }
  }
  return a;
}
*/