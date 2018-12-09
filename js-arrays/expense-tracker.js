const account = {
    name: 'Vatsal Saglani',
    expenses: [],
    income: [],
    addExpense: function(desc, amount){
        this.expenses.push({
            description: desc,
            amount: amount
        });
    },

    
    addIncome: function(desc, amount){
        this.income.push({
            description: desc,
            amount: amount
        });
    },

    getAccountSummary: function(){
        let totalExpenses = 0;
        let totalIncome = 0
        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function(i){
            totalIncome = totalIncome + i.amount;
        });
        let balance = totalIncome - totalExpenses
        return `${this.name} has $${totalExpenses} in expenses.
         $${totalIncome} in income.
         $${balance} is left in account.`
    }
}



account.addIncome('Freelancing', 5000)
account.addExpense('Rent', 1212)
account.addExpense('Coffee', 2)
let acc = account.getAccountSummary()
console.log(acc)


    // getAccountSummary: function(name){
    //     if(account.name === name){
    //         let totalExpenses = 0
    //         for(let count = 0; count < account.expenses.length; count++){
    //             totalExpenses += account.expenses[count].amount
    //         }
    //         console.log(`${name} has ${totalExpenses} in expenses.`)
    //     }
    // }