

function WantTo_wakeUp(h,m,c){
    let Cycles = c*90;
    const timeInMinutes = parseInt(h) * 60 + parseInt(m);
    const CyclesCalculat = timeInMinutes - (Cycles);  //6 Cycles 9 * 60
    return CyclesCalculat;
    // const Cycles5 = timeInMinutes - (Cycles);  //5 Cycles 7H 30M (7.5 * 60)
    // const Cycles4 = timeInMinutes - (Cycles);  //4 Cycles 6 * 60
    // const Cycles3 = timeInMinutes - (Cycles);  //3 Cycles 4H 30M (4.5 * 60)
}


function minuteToTime(minutes){
    if (minutes < 0) {
        hours = 24 + Math.floor(minutes / 60);
        minutes = Math.abs(minutes % 60);
      } else {
        hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
      }
      return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
}

function Display(selectID1_H,selectID2_M){
    let h = parseInt(document.getElementById(selectID1_H).value);
    let m = parseInt(document.getElementById(selectID2_M).value);
    if (!isNaN(h) && !isNaN(m)) {
        console.log(minuteToTime(WantTo_wakeUp(h,m,6)));
        console.log(minuteToTime(WantTo_wakeUp(h,m,5)));
        console.log(minuteToTime(WantTo_wakeUp(h,m,4)));
        console.log(minuteToTime(WantTo_wakeUp(h,m,3)));
    }else{
        alert("กรุณาใส่เวลาให้ครบด้วยครับ");
    }

}

// Display(6,30);

// console.log(minuteToTime(Cycles5));
// console.log(minuteToTime(Cycles4));
// console.log(minuteToTime(Cycles3));
