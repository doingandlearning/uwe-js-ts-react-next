class OddError extends Error {
  constructor(varName = "") {
    super(`${varName} should be even.`);
    this.code = "ERR_ODD_NUMBER_ERROR";
  }
  get name() {
    return "OddError";
  }
}

function doTask(amount) {
  try {
    if (typeof amount !== "number") {
      const err = new Error("amount must be number");
      err.code = "ERR_AMOUNT_MUST_BE_NUMBER";
      throw err;
    }
    if (amount <= 0) {
      const err = new Error("Needs to be greater than 0");
      err.code = "ERR_LESS_THAN_ZERO_ERROR";
      throw err;
    }
    if (amount % 2 !== 0) throw new OddError("amount");

    const result = amount / 2;
    return result;
  } catch (error) {
    if (error.code === "ERR_AMOUNT_MUST_BE_NUMBER") {
      // Some logging
      // console.log("must be a number");
      return 0;
    } else if (error.code === "ERR_LESS_THAN_ZERO_ERROR") {
      // some logging
      console.log("Keep positive!");
    } else {
      console.log(error.code);
    }
  }
}

console.log(doTask(4));
console.log(doTask("4"));
console.log(doTask(-7));
console.log(doTask(3));
