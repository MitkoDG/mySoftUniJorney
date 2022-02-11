class Bank {
   
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
       
    }
    newCustomer(customer) {
        let foundCustomer = this.allCustomers.find((x) => x.personalId === customer.personalId)
        if (foundCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        customer.transtactions=[];
        this.allCustomers.push(customer)
        return customer;
    }
    depositMoney(personalId, amount) {
        personalId = Number(personalId)
        amount = Number(amount);

        let foundCustomer = this.allCustomers.find((x) => x.personalId === personalId)
        if (!foundCustomer) {
            throw new Error(`We have no customer with this ID!`)
        }
        foundCustomer.totalMoney == undefined ? foundCustomer.totalMoney = amount : foundCustomer.totalMoney += amount;
        
        foundCustomer.transtactions.push(`${foundCustomer.firstName} ${foundCustomer.lastName} made deposit of ${amount}$!`)
         
        return `${foundCustomer.totalMoney}$`
        
    }
    withdrawMoney (personalId, amount){
        amount = Number(amount);
        personalId = Number(personalId)
        let foundCustomer = this.allCustomers.find((x) => x.personalId === personalId)
        if(!foundCustomer){
            throw new Error(`We have no customer with this ID!`)
        }else if (foundCustomer){
           if (foundCustomer.totalMoney<amount){
               throw new Error(`${foundCustomer.firstName} ${foundCustomer.lastName} does not have enough money to withdraw that amount!`)
           }
           foundCustomer.totalMoney-=amount;
           foundCustomer.transtactions.push(`${foundCustomer.firstName} ${foundCustomer.lastName} withdrew ${amount}$!`)
           return `${foundCustomer.totalMoney}$`

        }
       

    }
    customerInfo (personalId){
        let foundCustomer = this.allCustomers.find((x) => x.personalId === personalId)
        if (!foundCustomer){
            throw new Error(`We have no customer with this ID!`)
        }
        
        let result=[];
        result.push(`Bank name: ${this._bankName}`)
        result.push(`Customer name: ${foundCustomer.firstName} ${foundCustomer.lastName}`)
        result.push(`Customer ID: ${personalId}`)
        result.push(`Total Money: ${foundCustomer.totalMoney}$`)
        result.push(`Transactions:`)
        
        for (let i =foundCustomer.transtactions.length-1; i >= 0; i--) {
            result.push(`${i+1}. ${foundCustomer.transtactions[i]}`)
          
        }
        return result.join(`\n`)
    }
      
}