let myAccount = {
    name: "Vatsal",
    expenses: 0,
    income: 0
}

let addExpenses = function(account, expense) {
    account.expenses = account.expenses + expense
}

let addIncome = function(account, incomeAmt){
    account.income = account.income + incomeAmt
}

let accountReset = function(account){
    account.income = 0
    account.expenses = 0
}

let accountSummary = function(account){
    console.log(`Account for ${account.name} has ${account.income - account.expenses}.
                 ${account.income} in income. ${account.expenses} in expenses   `)
}

addIncome(myAccount, 8000)
addExpenses(myAccount, 3000)
accountSummary(myAccount)
accountReset(myAccount)
accountSummary(myAccount)