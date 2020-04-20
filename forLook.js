
var money = prompt("Ваш бюджет на месяц?","");
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
let ask1 = prompt("Введите обязательную статью расходов в этом месяце","");
let ask2 = prompt("Во сколько обойдется?","");

appData.expenses[ask1]=ask2;


    alert(appData.budger/30);


