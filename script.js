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


const appData = {
    budget: money,
    //addIncome: [],
    deposit: false,
    expenses: {},
    mission: 500000,
    period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'БлекДжек, Куртизанки, Виски');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке? Yes/Ok No/Cancel');


        for (let i=0; i < 2; i++) {
            let value;
            const askExpenses = [];
            askExpenses[i] = prompt('Введите обязательную статью расходов??');
            do 
            { 
            value = +prompt('Во сколько это обойдется?');
            console.log(value);
            }
            while (isNaN(parseFloat(value)) || value < 0);
            
            appData.expenses[askExpenses[i]] = value;
            }
    },

    
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        console.log(appData.budgetMonth, appData.budget, appData.expensesMonth)
        appData.budgetDay = appData.budgetMonth / 30;
    },


    getTargetMonth: function(mission, accumulatedMonth) {
        const getTargetMonthSum = mission / accumulatedMonth;
        return getTargetMonthSum;
    },
    

    getStatusIncome: function(){
        if (appData.budgetDay>= 1200) {
            console.log('У вас высокий уровень дохода')
        } else if (appData.budgetDay>= 600) {
            console.log('У вас средний уровень дохода')
        } else if (appData.budgetDay>= 0) {
            console.log('К сожалению у вас уровень дохода ниже среднего')
        } else {
            console.log('Что то пошло не так');
        }
    },
       
};
appData.asking();


for (let key in appData.expenses) {
    console.log(appData.expensesMonth += appData.expenses[key]);  
}


appData.getBudget();
const getTarget = appData.getTargetMonth(appData.mission, appData.budgetMonth);


appData.getStatusIncome();
console.log(appData);

      
if (getTarget>0) {
     console.log('Цель будет достигнута')
} else {console.log('Цель будет достигнута');
};


console.log('Расходы за месяц ' + appData.expensesMonth + ' чего то там');
console.log('Цель будет достигнута за ' +  Math.round(getTarget) + ' месяцев');


console.log('Наша программа включает в себя данные:')
for (let key in appData) {
    console.log('Ключ: ' + key + ' значение: ' + appData[key]);
};