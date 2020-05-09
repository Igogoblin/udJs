let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("YYYY-MM-DD", "");
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
    savings: true,
    chooseOptExenses: function () {
        for (let i = 0; i < 2; i++) {
            let ask1 = prompt("Введите обязательную статью расходов в этом месяце", "");
            let ask2 = prompt("Во сколько обойдется?", "");

            if ((typeof (ask1)) === 'string' && (typeof (ask1)) != null && (typeof (ask2)) != null && ask1 != '' && ask2 != '' && ask1.length < 50) {
                console.log("done");
                appData.expenses[ask1] = ask2;
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budger/30).toFixed();
        alert("Бюджет на 1 день составляет " + appData.moneyPerDay+"руб.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                parcent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * parcent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExenses: function () {
        for (let i = 1; i < 4; i++) {
            // доработать ввод данных
            let a1 = prompt("Статья необязательных расходов?", "");

            appData.optionalExpenses[i] = a1;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

}
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}




