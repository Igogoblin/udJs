let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    console.log(money);
    time = prompt("YYYY-MM-DD", "");
    console.log(time);
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();



var appData = {
    budger: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let ask1 = prompt("Введите обязательную статью расходов в этом месяце", "");
        let ask2 = prompt("Во сколько обойдется?", "");

        if ((typeof (ask1)) === 'string' && (typeof (ask1)) != null && (typeof (ask2)) != null && ask1 != '' && ask2 != '' && ask1.length < 50) {
            console.log("done");
            appData.expenses[ask1] = ask2;
        } else {
            i = i + 1;
        }
    }
}
chooseExpenses();

function chooseOptExenses() {
    for (let i = 1; i < 4; i++) {
        // доработать ввод данных
        let a1 = prompt("Статья необязательных расходов?", "");

        appData.optionalExpenses[i] = a1;
    }
}
chooseOptExenses();

appData.moneyPerDay = (appData.budger / 30).toFixed();

alert("" + appData.moneyPerDay);

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            parcent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * parcent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();
detectLevel();
let n = 2;
(n == 2) ? console.log("aga"): console.log("nea");

while (n < 5) {
    console.log(n);
    n++;
}