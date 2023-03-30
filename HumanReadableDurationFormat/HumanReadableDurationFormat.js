const getTimeString = (seconds, nameTime, LIMIT) => {
  let result = 0;
  while (seconds >= LIMIT) {
    result += 1;
    seconds -= LIMIT;
  }
  if (result > 1) {
    nameTime += 's';
  }

  return { secondsRemaining: seconds, timeGot: result, timeText: nameTime};
};

const buildArrayString = (objDate, arr) => {
  if(objDate['timeGot']>0) {
    arr.push(`${objDate['timeGot']} ${objDate['timeText']}`)
  }

}

const formatDuration = (seconds) => {
  const YEAR = 31536000;
  const DAY = 86400;
  const HOUR = 3600;
  const MINUTE = 60;

  let answer = '';
  if(seconds > 0) {
  let resultTotal = [];
  let resultYear = getTimeString(seconds, 'year', YEAR); 
  let resultDay = getTimeString(resultYear['secondsRemaining'], 'day', DAY );
  let resultHour = getTimeString(resultDay['secondsRemaining'], 'hour', HOUR);
  let resultMinute = getTimeString(resultHour['secondsRemaining'], 'minute', MINUTE);
  let resultSeconds = {timeGot: resultMinute['secondsRemaining'],timeText:resultMinute['secondsRemaining']>1?`seconds`:`second` }

  buildArrayString(resultYear,resultTotal)
  buildArrayString(resultDay,resultTotal)
  buildArrayString(resultHour,resultTotal)
  buildArrayString(resultMinute,resultTotal)
  buildArrayString(resultSeconds,resultTotal)

  for(let i = 0; i < resultTotal.length; i++) {
    answer += resultTotal[i]
    if(resultTotal.length -i > 2) {
      answer += ', ' 
    } else if(resultTotal.length -i >1) {
      answer += ' and ';
    } 

  }
  } else {
    answer = 'now';
  }
  return answer;
};

console.log(formatDuration(31536000*0+86400*0+3600*0+60*0+1))