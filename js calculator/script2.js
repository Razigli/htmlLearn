let number              = new Array;
    operation           = new Array;
    button              = document.getElementsByTagName("button")
    screen              = document.getElementById("calc-screen")
    screen.textContent  = ""
for(var i = 0; i < button.length; i ++)
{
    button[i].onclick = (event) => 
    {
        screen.textContent = ""
        var str = event.currentTarget.textContent
        if(str>=0&&str<=9)
        {   
            if(operation.length == number.length)
            {
                number.push(str)
                for(var i = 0; i < number.length-1; i ++)
                    screen.textContent += (number[i] + operation[i])
                    screen.textContent += number[number.length-1]
            } else 
            {
                number[number.length-1] += str
                for(var i = 0; i < number.length; i ++)
                    screen.textContent += (number[i] + operation[i])
                    screen.textContent += number[number.length-1]
            }
        } else if (str == "c")
        {
            firstNumber     = ""
            secondNumber    = ""
            operation       = ""
            screen.textContent = (firstNumber + operation + secondNumber)
        } else if (str == "=") 
        {
            firstNumber =   (operation == "+") ? Number(firstNumber) + Number(secondNumber) :
                            (operation == "-") ? firstNumber - secondNumber :
                            (operation == "x") ? firstNumber * secondNumber :
                            (operation == "÷") ? Number(firstNumber) / Number(secondNumber) :
                            "0"
            secondNumber = operation = ""
            screen.textContent =    (firstNumber.length < 5) ? (firstNumber) :
                                    Math.round(firstNumber * 100000) / 100000
        } else 
        {
            operation = str
            screen.textContent = (firstNumber + operation + secondNumber)
        }

    }
}
