//Declaring a function
// Function to calculate PAYE (Income Tax) based on the provided rates
function calculatePAYE(annualTaxablePay) {
    let tax = 0;
    
    if (annualTaxablePay <= 288000) {
        tax = annualTaxablePay * 0.1;
    } else if (annualTaxablePay <= 388000) {
        tax = 28800 + ((annualTaxablePay - 288000) * 0.25);
    } else if (annualTaxablePay <= 6000000) {
        tax = 38800 + ((annualTaxablePay - 388000) * 0.3);
    } else if (annualTaxablePay <= 9600000) {
        tax = 1268400 + ((annualTaxablePay - 6000000) * 0.325);
    } else {
        tax = 2489400 + ((annualTaxablePay - 9600000) * 0.35);
    }
    
    return tax / 12; // Monthly tax
}

// Function to calculate NHIF Deductions based on provided rates
function calculateNHIFDeductions(grossPay) {
    const nhifRanges = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 35000, max: Infinity, deduction: 950 }
    ];

    let nhifDeduction = 0;

    for (const range of nhifRanges) {
        if (grossPay >= range.min && grossPay <= range.max) {
            nhifDeduction = range.deduction;
            break;
        }
    }

    return nhifDeduction;
}
// Function to calculate NSSF contributions based on the new rates
function calculateNSSFContribution(pensionablePay) {
    let nssfContribution = 0;
    
    if (pensionablePay <= 6000) {
        nssfContribution = pensionablePay * 0.06;
    } else if (pensionablePay <= 18000) {
        nssfContribution = 1080;
    }
    
    return nssfContribution;
}
// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const annualTaxablePay = (basicSalary + benefits) * 12;
    const paye = calculatePAYE(annualTaxablePay);
    const nhif = calculateNHIFDeductions(basicSalary + benefits);
    const nssf = calculateNSSFContribution(basicSalary + benefits);
    
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - (paye + nhif + nssf);
    
    return {
        'Gross Salary': grossSalary,
        'PAYE (Tax)': paye,
        'NHIF Deductions': nhif,
        'NSSF Contributions': nssf,
        'Net Salary': netSalary
    };
}

// Example usage
const basicSalary = 50000; // Example basic salary
const benefits = 10000; // Example benefits

const result = calculateNetSalary(basicSalary, benefits);
console.log(result);






