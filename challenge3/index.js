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

