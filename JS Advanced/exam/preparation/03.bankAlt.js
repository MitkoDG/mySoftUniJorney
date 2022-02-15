class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }
    

    newCustomer(customer) {
        let firstName = customer.firstName;
        let lastName = customer.lastName;
        let personalId = customer.personalId;

        if (this.allCustomers.some(p => p.personalId === personalId)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }

        let newCustomer = {
            firstName,
            lastName,
            personalId,
            transactions: [],
        }
        this.allCustomers
            .push(newCustomer);


        return newCustomer;
    }

    depositMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);
        let personToDeposit = this.allCustomers.find(p => p.personalId === personalId);
        if (!personToDeposit) {
            throw new Error('We have no customer with this ID!')
        }
        if (!personToDeposit.totalMoney) {
            personToDeposit.totalMoney = 0;
        }
        personToDeposit.totalMoney += amount;
     
        personToDeposit.transactions.push(`${personToDeposit.firstName} ${personToDeposit.lastName} made deposit of ${amount}$!`);
        return `${personToDeposit.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);
        let personToDeposit = this.allCustomers.find(p => p.personalId === personalId);
        if (!personToDeposit) {
            throw new Error('We have no customer with this ID!')
        }
        let availableMoney = personToDeposit.totalMoney;
        if (availableMoney < amount) {
            throw new Error(`${personToDeposit.firstName} ${personToDeposit.lastName} does not have enough money to withdraw that amount!`)
        }
        personToDeposit.totalMoney -= amount;
        personToDeposit.transactions.push(`${personToDeposit.firstName} ${personToDeposit.lastName} withdrew ${amount}$!`);
        return `${personToDeposit.totalMoney}$`

    }
    customerInfo(personalId){
        let personToDeposit = this.allCustomers.find(p => p.personalId === personalId);
        if (!personToDeposit) {
            throw new Error('We have no customer with this ID!')
        }
        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${personToDeposit.firstName} ${personToDeposit.lastName}`);
        result.push(`Customer ID: ${personToDeposit.personalId}`)
        result.push(`Total Money: ${personToDeposit.totalMoney}$`)
        result.push('Transactions:');
        
        for (let i = personToDeposit.transactions.length-1; i >= 0; i--) {
            result.push(`${i+1}. ${personToDeposit.transactions[i]}`);
        } 
        return result.join('\n');
    }


}



let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
// console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596,555);
// console.log(bank.depositMoney(4151596,555));
console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));


'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!' 
'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made depostit of 250$!\n1. Svetlin Nakov made depostit of 250$!'