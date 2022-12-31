let //First we create variables
    firstNumber     = ""
    secondNumber    = ""
    operation       = ""//this variable will store the operation
    button          = document.getElementsByTagName("button")//get all elements were tag <button>
    screen          = document.getElementById("calc-screen")//get our screen

function exp(a, b)//exponentiation
{
    var c = a;

    for(var i = 1; i < b; i ++)
    {
        a *= c
    }

    return a;
}

function calculate() 
{
    var ret =   (operation == "+") ? Number(firstNumber) + Number(secondNumber) ://if(operation == "+") ret = firstNumber + secondNumber
                (operation == "-") ? firstNumber - secondNumber                 ://else if(operation == "-") ret = firstNumber - secondNumber  
                (operation == "x") ? firstNumber * secondNumber                 ://etc
                (operation == "÷") ? firstNumber / secondNumber                 :
                (operation == "^") ? exp(firstNumber, secondNumber)             :
                (operation == "%") ? firstNumber * secondNumber/100             :
                "0"
    secondNumber = operation = ""

    return (ret.length < 5) ? (ret) :
    Math.round(ret * 10000) / 10000;
}

for(var i = 0; i < button.length; i ++)
{
    button[i].onclick = (event) => //process each button from the array
    {
        screen.textContent = ""
        var str = event.currentTarget.textContent//get text from button
        if((str>=0&&str<=9)||str == ".")//processing buttons with numbers and a dot
        {   
            if(operation == "")//for first number
            {
                firstNumber += str
                screen.textContent = (firstNumber + operation + secondNumber)
            } else //for second number
            {
                secondNumber += str
                screen.textContent = (firstNumber + operation + secondNumber)
            }
        } else if (str == "c")//clear our screen
        {
            firstNumber         = secondNumber = operation = ""
            screen.textContent  = (firstNumber + operation + secondNumber)
        } else if (str == "=")//calculate
        {
            firstNumber         =   calculate()
            screen.textContent  =    (firstNumber + operation + secondNumber) //in case there are too many decimal places (>5)
        } else if (str == "-x")
        {
            if (operation == "") firstNumber = -firstNumber
            else secondNumber = -secondNumber
            
            screen.textContent  =    (firstNumber + operation + secondNumber)
        } else //action buttons
        {
            if (operation == "")//just operation
            {
                operation = (firstNumber!="") ? str : ""
                if(firstNumber == ".") firstNumber = ".1"
                screen.textContent = (firstNumber + operation + secondNumber)
            } else //calculate if operation not null
            {
                firstNumber = calculate()
                operation = (firstNumber!="") ? str : ""
                if(firstNumber == ".") firstNumber = ".1"
                screen.textContent = (firstNumber + operation + secondNumber)
            }
        }
    }
}
