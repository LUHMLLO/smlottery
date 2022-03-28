const setCurrencySymbol = (currency?: any) => {
  if (currency?.toLowerCase() === "usd") {
    return "$";
  }
  if (currency?.toLowerCase() === "gbp") {
    return "£";
  }
  if (currency?.toLowerCase() === "cad") {
    return "C$";
  }
  return currency;
};

export { setCurrencySymbol };
