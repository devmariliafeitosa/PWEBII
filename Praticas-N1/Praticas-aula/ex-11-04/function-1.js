const range = function(start, end, step) {
  if (end === undefined){
    end = start
  }

  const isAsc = start < end;
  const intervalo = [];

  for(let i = start; isAsc ? i <= end : i >= end; isAsc ? i += step : 1 -= step){
    intervalo.push(i);
  }

  return intervalo

}

console.log(range(4));