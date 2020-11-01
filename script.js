'use strict';

const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
    
const start = function() {
    do 
    {
        money = prompt('Ваш месячный доход?', 80000);
    }
    while (!isNumber(money));
};
start();








let value = [];
let askExpenses = [];



let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    deposit: false,
    mission: 50000,
    period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'Танцы, Секс, Рок-Н-ролл');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке? Yes/Ok No/Cancel');

        for (let i=0; i < 2; i++) {
            askExpenses[i] = prompt('Введите обязательную статью расходов??');
            value[i] = +prompt('Во сколько это обойдется?');
            }


        console.log(askExpenses);
        console.log(value);
        //return appData.expenses;
    }
    

};
appData.asking();
appData['budget'] = money;
console.log(appData);

for (let sumValue in value) {
    console.log(value[sumValue]);
}

appData.expenses = askExpenses;
appData.expenses.askExpenses = value;

//console.log(askExpenses.concat([value]));


appData.getExpensesMonth = function(){
    //     for (let i=0; i < 2; i++) {
    //         expenses[i] = prompt('Введите обязательную статью расходов??');
    //         do 
    //         {
    //             value = +prompt('Во сколько это обойдется?');
    //          } 
    //          while (isNaN(parseFloat(value)) || value < 0);
    //      getExpensesSum+=value;
    //          }
    //    console.log(expenses);
    //     return getExpensesSum;
    };
    console.log('Расходы за месяц ' + appData.expenses);
    
console.log('Наша программа включает в себя данные:')
for (let key in appData) {
    console.log('Ключ: ' + key + ' значение: ' + appData[key]);
}


appData.getAccumulatedMonth = function(money, getExpensesSum) {
    const getAccumulatedMonthSum = money - getExpensesSum;
    return getAccumulatedMonthSum;
}
const accumulatedMonth = appData.getAccumulatedMonth(money,appData.expenses);
console.log(accumulatedMonth);


appData.getTargetMonth = function (mission, accumulatedMonth) {
    const getTargetMonthSum = mission / accumulatedMonth;
    return getTargetMonthSum;
}
const GetTarget = appData.getTargetMonth(appData.mission, accumulatedMonth);
console.log(GetTarget);


appData.budgetDay = accumulatedMonth/30;
console.log(appData.budgetDay);




appData.getStatusIncome = function(){
    if (appData.budgetDay>= 1200) {
        console.log('У вас высокий уровень дохода')
    } else if (appData.budgetDay>= 600) {
        console.log('У вас средний уровень дохода')
    } else if (appData.budgetDay>= 0) {
        console.log('К сожалению у вас уровень дохода ниже среднего')
    } else {
        console.log('Что то пошло не так');
    }
};
console.log(appData.getStatusIncome());

      
if (GetTarget>0) {
     console.log('Цель будет достигнута')
         } else {console.log('Цель будет достигнута');
        }