class bankAccount {
    constructor (branch, number, type){
        this.branch = branch;
        this.number = number;
        this.type = type;
        this._balance = 0;
    }

    get balance (){
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    withdraw (value) {
        if (this.balance < value) {
            return "Saldo insuficiente!";
        }
        this._balance = this._balance - value;
        return this._balance;
    }

    deposit (value) {
        this._balance = this._balance + value;
        return this._balance;
    }
}

class currentType extends bankAccount {
    constructor(branch, number) {
        super (branch, number);
        this.type = current;
        this._creditCard = creditCard;
    }

    get creditCard () {
        return this._creditCard;
    }

    set creditCard (value) {
        this._creditCard - value;
    }
}

class savingsType extends bankAccount {
    constructor(branch, number) {
        super (branch, number);
        this.type = "savings";
    }
}

class universityType extends bankAccount {
    constructor(branch, number) {
        super (branch, number);
        this.type = "university";
    } 
    withdraw (value) {
        if (this.balance < value) {
            return "Saldo insuficiente!";
        } 
        if (value > 500) {
            return "limite de saque de 500";
        }
        this._balance = this._balance - value;
        return this._balance;
    }
} 