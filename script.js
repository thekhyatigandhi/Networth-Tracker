function calculateNetWorth() {
  // Get input values and convert them to numbers
  var cash = Number(document.getElementById("cash").value);
  var chequingAccount = Number(
    document.getElementById("chequingAccount").value
  );
  var savingsAccount = Number(document.getElementById("savingsAccount").value);
  var stocks = Number(document.getElementById("stocks").value);
  var bonds = Number(document.getElementById("bonds").value);
  var preciousMetals = Number(document.getElementById("preciousMetals").value);
  var realEstate = Number(document.getElementById("realEstate").value);
  var bankFixedDeposits = Number(
    document.getElementById("bankFixedDeposits").value
  );
  var crypto = Number(document.getElementById("crypto").value);
  var loans = Number(document.getElementById("loans").value);
  var land = Number(document.getElementById("land").value);
  var lifeInsurancePolicyMaturityValue = Number(
    document.getElementById("lifeInsurancePolicyMaturityValue").value
  );
  var accountReceivables = Number(
    document.getElementById("accountReceivables").value
  );
  var jewelry = Number(document.getElementById("jewelry").value);
  var homeMortgage = Number(document.getElementById("homeMortgage").value);
  var automobileLoans = Number(
    document.getElementById("automobileLoans").value
  );
  var creditCardLoans = Number(
    document.getElementById("creditCardLoans").value
  );
  var personalLoans = Number(document.getElementById("personalLoans").value);
  var studentLoans = Number(document.getElementById("studentLoans").value);
  var lineOfCredit = Number(document.getElementById("lineOfCredit").value);
  var unpaidTaxes = Number(document.getElementById("unpaidTaxes").value);

  if (
    isNaN(cash) ||
    isNaN(chequingAccount) ||
    isNaN(savingsAccount) ||
    isNaN(stocks) ||
    isNaN(bonds) ||
    isNaN(preciousMetals) ||
    isNaN(realEstate) ||
    isNaN(bankFixedDeposits) ||
    isNaN(crypto) ||
    isNaN(loans) ||
    isNaN(land) ||
    isNaN(lifeInsurancePolicyMaturityValue) ||
    isNaN(accountReceivables) ||
    isNaN(jewelry) ||
    isNaN(homeMortgage) ||
    isNaN(automobileLoans) ||
    isNaN(creditCardLoans) ||
    isNaN(personalLoans) ||
    isNaN(studentLoans) ||
    isNaN(lineOfCredit) ||
    isNaN(unpaidTaxes)
  ) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  // Calculate net worth
  var netWorth =
    cash +
    chequingAccount +
    savingsAccount +
    stocks +
    bonds +
    preciousMetals +
    realEstate +
    bankFixedDeposits +
    crypto +
    loans +
    land +
    lifeInsurancePolicyMaturityValue +
    accountReceivables +
    jewelry -
    homeMortgage -
    automobileLoans -
    creditCardLoans -
    personalLoans -
    studentLoans -
    lineOfCredit -
    unpaidTaxes;

  document.getElementById("netWorth").value = netWorth;
}
