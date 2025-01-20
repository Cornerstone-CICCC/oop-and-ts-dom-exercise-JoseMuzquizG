class Calculator {
    constructor() {
        this.firstNumber = document.querySelector('#num1').value
        this.secondNumber = document.querySelector('#num2').value
        this.operation = document.querySelector('#operation').value 
        this.result = 0
        this.compute()       
    }

    add() {
        this.result = (Number(this.firstNumber) + Number(this.secondNumber))
        console.log(this.result)
        return this.result
    }

    subtract() {
        this.result = (Number(this.firstNumber) - Number(this.secondNumber))
        console.log(this.result)
        return this.result
    }

    multiply() {
        this.result = (Number(this.firstNumber) * Number(this.secondNumber))
        console.log(this.result)
        return this.result
    }

    divide() {
        this.result = (Number(this.firstNumber) / Number(this.secondNumber))
        console.log(this.result)
        return this.result
    }

    compute() {
        // this.result = document.querySelector('#result')
        // this.result.innerHTML = `${}`
        if(this.operation === "add") {
            this.add()
        } else if (this.operation === "subtract") {
            this.subtract()
        } else if (this.operation === "multiply") {
            this.multiply()
        } else if (this.operation === "divide") {
            this.divide()
        }
        document.querySelector("#result").innerHTML = this.result
    }
}

calcButton = document.querySelector('#calculateBtn')
this.calcButton.addEventListener('click', () => {
    const calculates = new Calculator()
})
