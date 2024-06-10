let arr1 = [1,2,3,4,5,6]
let arr2 = ["ram","shyam","mohan"]
// let sum = arr1.concat(arr2)
// console.log(sum)

// arr1[6]=arr2[0]
// arr1[7]=arr2[1]
// arr1[8]=arr2[2]
// arr1[9]=arr2[3]
// console.log(arr1)


for (i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i].toString())
}
// for (j = 0; j < arr2.length; j++) {
//     arr.push(arr2[j])
// }
//console.log(arr2)

// let fact = 1
// function factorial(n)
// {
//     for(let i=1;i<=n;i++)
//         {
//             fact = fact * i
//         }
//         console.log(fact)
// }
// factorial(6)


function submit(id)
{
 let currInputVal = document.getElementById("input").value
 let newInputVal = document.getElementById(id).innerHTML

 let lastChar = currInputVal[currInputVal.length-1]
 if(isOperator(lastChar) && isOperator(newInputVal))       //isOperator()
    {
        return
    }
 let calculateVal = currInputVal + newInputVal
 document.getElementById("input").value = calculateVal
 console.log(calculateVal)
}

function clearInput()
{
    document.getElementById("input").value = "";
}

function calculate()
{
    let string = ""
    if(document.getElementById("input").value)
        {
            string = document.getElementById("input").value
            // console.log(eval(string))
         
        }
        if(string.length>0 && string[0] == "/" || string[0] == "*" || string[0] == "%" || string[0] == "+")
            {
                clearInput()
            }
            else
            {
             document.getElementById("input").value = eval(string)
            }
}

function deleteInput()
{
    let string = ""
    string = document.getElementById("input").value
    document.getElementById("input").value = string.slice(0,-1)          //slice() remove last element of string and give remaining string
}

function isOperator(char) 
{
    return ["+", "-", "*", "/", "%"].includes(char);           //returns true or false, include() check the char present in given array
}