const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }

function createTransaction(transaction){
  if(transaction.type == "credit"){
    user.balance = user.balance + transaction.value;
  } else {
    user.balance = user.balance - transaction.value;
  }
  user.transactions.push(transaction);
}

function getHigherTransactionByType(transactionType){
  let value = 0;
  for(let i = 0; i < user.transactions.length; i++){
    if(transactionType == user.transactions[i].type){
      if(user.transactions[i].value > value){
        value = user.transactions[i].value;
      }
    }
  }
  return {
    type: transactionType,
    value: value
  };
}

function getAverageTransactionValue(){
  let value = 0;
  let qt = 0;
  for(let i = 0; i < user.transactions.length; i++){
    value = value + user.transactions[i].value;
    qt++;
  }
  return value / qt;
}

function getTransactionsCount(){
  let qtTransactionsCredit = 0;
  let qtTransactionsDebit = 0;
  for(let i = 0; i < user.transactions.length; i++){
    if(user.transactions[i].type == "credit"){
      qtTransactionsCredit++;
    } else {
      qtTransactionsDebit++;
    }
  }
  return {
    credit: qtTransactionsCredit,
    debit: qtTransactionsDebit
  };
}