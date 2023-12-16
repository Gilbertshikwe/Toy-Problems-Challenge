//Declaring a function
function netSalary(basicsalary,benefits){
// declaring constants for tax rates
const taxbrackets = [
{min:0, max:24000, rate:0.1},
{min:24001, max:32333, rate:0.25},
{min:32334, max:500000, rate:0.3},
{min:500001, max:800000, rate:0.325},
{min:800001, max:Infinity, rate:0.35}
]
// declaring constants for Nhif rates
const nhifrates = [
{min:0, max:5999, deduction: 150},
{min:6000, max:7999, deduction: 300},
{min:8000, max:11999, deduction: 400},
{min:12000, max:14999, deduction: 500},
{min:15000, max:19999, deduction: 600},
{min:20000, max:24999, deduction: 750},
{min:25000, max:29999, deduction: 850},
{min:30000, max:34999, deduction: 900},
{min:35000, max:39999, deduction: 950},
{min:40000, max:44999, deduction: 1000},
{min:45000, max:49999, deduction: 1100},
{min:50000, max:59999, deduction: 1200},
{min:60000, max:69999, deduction: 1300},
{min:70000, max:79999, deduction: 1400},
{min:80000, max:89999, deduction: 1500},
{min:90000, max:99999, deduction: 1600},
{min:100000, max:Infinity, deduction: 1700},
]
// 6% contribution of the basic salary
let employercontribution = basicsalary * 0.06;
// Lets calculate the gross salary
let grosssalary = basicsalary + benefits 
//calculate the tax
let tax = 0 
let taxableincome = grosssalary - 2400 // 2400 is for personal relief
for (const bracket of taxbrackets) {
    if (taxableincome <= 0) break
    const taxableinthisbracket = Math.min(bracket.max - bracket.min + 1,taxableincome)
    tax += taxableinthisbracket * bracket.rate
    taxableincome = taxableinthisbracket
}
// calculating the Nhif deduction
let Nhifdeduction = 0
for (const nhifbracket of nhifrates){
    if (grosssalary >= nhifbracket.min && grosssalary <= nhifbracket.max){
        Nhifdeduction = nhifbracket.deduction
        break
    } 
 }
 //calculating the Net Salary
 const netSalary = grosssalary - (tax + Nhifdeduction + nssfcontribution)
 // returning the results
 return {
    "Gross Salary": grosssalary,
    "Tax" : tax,
    "NHIF Deduction" : Nhifdeduction,
    "NSSF Contribution" : nssfcontributions,
    "Net Salary" : netSalary
 }

}
/* Let's see if it's working
const basicsalary = prompt("Enter Basic Salary:")
const benefits = prompt("Enter Benefits:")

const result = netSalary(basicsalary,benefits)
for(const key in result){
    console.log(`${key}: ${result[key]}`)
}
*/
