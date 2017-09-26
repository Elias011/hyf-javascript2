// Repeat with for loop way
function repeatStringNumTimes1(str, num) {
  let repeat = " ";
    for (let i = 0; i < num; i++){
       repeat += str;
    }
    console.log(repeat);
}

repeatStringNumTimes1("abc", 3);

//Repeat with while loop way
function repeatStringNumTimes2(str, num) {
  let repeat = " ";
    while (num > 0){
       repeat += str;
        num--
    }
    console.log(repeat);
}

repeatStringNumTimes2("abc", 3);

//Repeat with do loop way
function repeatStringNumTimes3(str, num) {
  let repeat = " ";
    let i = 0;
    do{
       repeat += str;
        i++
    }
    while (i < num)
    console.log(repeat);
}

repeatStringNumTimes3("abc", 3);