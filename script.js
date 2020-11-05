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

let appData = {
    addIncome: [],
    deposit: false,
    expenses: {},
    mission: 500000,
    period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'Танцы, Секс, Рок-Н-ролл');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке? Yes/Ok No/Cancel');


        for (let i=0; i < 2; i++) {
            let value = [];
            let askExpenses = [];
            askExpenses[i] = prompt('Введите обязательную статью расходов??');
            do 
            { 
            value = prompt('Во сколько это обойдется?');
            }
            while (isNaN(parseFloat(value)) || value < 0);
            appData.expenses[askExpenses[i]] = value[i];
            }



        // for (let i=0; i < 2; i++) {
        //     expenses[i] = prompt('Введите обязательную статью расходов??');
        //     do 
        //     {
        //     value = prompt('Во сколько это обойдется?');
        //     } 
        //     while (isNaN(parseFloat(value)) || value < 0);
        //      etExpensesSum+=value;
        // }



















    }
};
appData.asking();
console.log(appData);


appData['budget'] = money;


for (let key in appData.expenses) {
    console.log(appData.expensesMonth += appData.expenses[key]);  
 }


function getBudget() {
    function getMonthBudget(budget, expensesMonth){
    let budgetMonth = budget - expensesMonth;
    console.log(budgetMonth);
    return budgetMonth;
    }
    appData.budgetMonth = getMonthBudget(appData.budget, appData.expensesMonth);

    function getDayBudget(budgetMonth){
    let budgetDay = budgetMonth / 30;
    console.log(budgetDay);
    return budgetDay;
    }
    appData.budgetDay = getDayBudget(appData.budgetMonth);

}
getBudget();


function getTargetMonth(mission, accumulatedMonth) {
    const getTargetMonthSum = mission / accumulatedMonth;
    return getTargetMonthSum;
}
const GetTarget = getTargetMonth(appData.mission, appData.budgetMonth);
//console.log(GetTarget);


 function getStatusIncome(){
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
getStatusIncome();

      
if (GetTarget>0) {
     console.log('Цель будет достигнута')
         } else {console.log('Цель будет достигнута');
    };

console.log('Расходы за месяц ' + appData.expensesMonth + ' чего то там');
console.log('Цель будет достигнута за ' +  Math.round(GetTarget) + ' месяцев');
//console.log();



console.log('Наша программа включает в себя данные:')
for (let key in appData) {
    console.log('Ключ: ' + key + ' значение: ' + appData[key]);
 };