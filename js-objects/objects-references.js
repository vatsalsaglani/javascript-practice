let myAccount = {
    //properties
    name: "Vatsal",
    expences: 0,
    income: 0
}

let otherAccount = myAccount

otherAccount.income = 1000



let addExpense = function(account, amount) {
    // account = {

    // }
    account.expences = account.expences + amount
    // console.log(account)

}

addExpense(myAccount, 45)
console.log(myAccount)