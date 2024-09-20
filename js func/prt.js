function SimpleInterest(principal, rate, time) {
    if (typeof principal !== 'number', typeof rate, 'number', typeof time !== 'number')
return;
    let interest = (principal * rate * time) / 100;
    
    console.log(`The interest is: ${interest}%`);
}

// Example:
SimpleInterest(200, 6, 2);