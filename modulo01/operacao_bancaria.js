const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

function createTransaction(users, value, type) {
  const transaction = {
    type: type,
    value: value,
  };

  if (transaction.type === "credit") {
    users.balance = users.balance + transaction.value;
    console.log(users.balance);
  }
  if (transaction.type === "debit") {
    users.balance = users.balance - transaction.value;
    console.log(users.balance);
  }

  user.transactions.push(transaction);
  console.log(user.transactions);
}

function getHigherTransactionByType(type) {
  let higherTransaction;
  let higherValue = 0;

  for (let transaction of user.transactions) {
    if (transaction.type == type && transaction.value > higherValue) {
      higherValue = transaction.value;
      higherTransaction = transaction;
    }
  }

  return higherTransaction;
}

function getAverageTransactionValue() {
  let sum = 0;

  for (let transaction of user.transactions) {
    sum += transaction.value;
  }

  return sum / user.transactions.length;
}

function getTransactionsCount() {
  let count = {
    credit: 0,
    debit: 0,
  };
  for (let transaction of user.transactions) {
    if (transaction.type === "credit") count.credit++;
    else count.debit++;
  }

  return count;
}

createTransaction(user, 30, "credit");
createTransaction(user, 70, "credit");
