function problem6(forms) {
  var answer;
  let map = new Map();
  let rejectIndex = [];
  setMap(forms, map);
  checkNickname(forms, map, rejectIndex);
  return answer;
}

function handelException(){}

function setMap(forms, map){
  for(let i = 0; i < forms.length; i++){
    for(let j = 0; j < forms[i][1].length - 1; j++){
      let tmp = forms[i][1].substr(j,2);
      map.set(tmp, 1);
    }
  }
}

function checkNickname(forms, map, rejectIndex){
  for(let i = 0; i < forms.length; i++){
    for(let j = 0; j < forms[i][1].length - 1; j++){
      let tmp = froms[i][1].substr(j,2);
      if(map.has(tmp)){
        rejectIndex.push(i);
        break;
      }
    }
  }
}

module.exports = problem6;
