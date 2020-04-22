
var money = +prompt("Ваш бюджет на месяц?","");
console.log(money);
var time = prompt("YYYY-MM-DD","");
console.log(time);

var appData={
budger:money,
timeData : time,
expenses:{},
optionalExpenses:{},
income:[],
savings:false
};




for(let i = 0;i< 2;i++){
    let ask1 = prompt("Введите обязательную статью расходов в этом месяце","");
let ask2 = prompt("Во сколько обойдется?","");

if ( (typeof(ask1))==='string'&&(typeof(ask1))!=null&&(typeof(ask2))!=null&&ask1!=''&&ask2!=''&&ask1.length<50) {
     console.log("done");
    appData.expenses[ask1]=ask2;

} 
console.log("after");
/*else {

}
*/
}

appData.moneyPerDay = appData.budger/30;

alert(""+appData.moneyPerDay);

if(appData.moneyPerDay <100){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >100 && appData.moneyPerDay <2000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay>2000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}




/*
let n = 2;
(n==2)?console.log("aga"):console.log("nea");

while (n<5){
    console.log(n);
    n++;
}
*/