/* 

Filename: complex_application.js

Description: This complex JavaScript code is a simulation of a banking management system. It includes features like creating accounts, performing transactions, calculating interest, and generating reports.

*/

// Utility functions
function generateAccountNumber() {
  // Generate a random 8-digit account number
  return Math.floor(10000000 + Math.random() * 90000000);
}

function formatDate(date) {
  // Format the date object to 'YYYY-MM-DD' format
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Account class
class Account {
  constructor(firstName, lastName, initialBalance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = initialBalance;
    this.accountNumber = generateAccountNumber();
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      type: 'Deposit',
      amount,
      date: formatDate(new Date()),
    });
    console.log(`Successfully deposited $${amount} into Account #${this.accountNumber}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({
        type: 'Withdrawal',
        amount,
        date: formatDate(new Date()),
      });
      console.log(`Successfully withdrew $${amount} from Account #${this.accountNumber}`);
    } else {
      console.log(`Insufficient funds in Account #${this.accountNumber}`);
    }
  }

  calculateInterest(rate) {
    const interest = this.balance * (rate / 100);
    this.balance += interest;
    this.transactions.push({
      type: 'Interest',
      amount: interest,
      date: formatDate(new Date()),
    });
    console.log(`Successfully calculated interest for Account #${this.accountNumber}`);
  }

  generateStatement() {
    console.log(`Statement for Account #${this.accountNumber}`);
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Balance: $${this.balance.toFixed(2)}`);
    console.log(`Transactions:`);
    this.transactions.forEach((transaction) => {
      console.log(`${transaction.date} | ${transaction.type}: $${transaction.amount.toFixed(2)}`);
    });
  }
}

// Main function
function main() {
  const account1 = new Account('John', 'Doe', 5000);
  account1.deposit(2000);
  account1.withdraw(1000);
  account1.calculateInterest(2.5);
  account1.generateStatement();

  const account2 = new Account('Jane', 'Smith', 10000);
  account2.deposit(500);
  account2.withdraw(2000);
  account2.calculateInterest(3.0);
  account2.generateStatement();
}

// Calling the main function to execute the banking management system
main();