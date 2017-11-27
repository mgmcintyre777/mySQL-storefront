const Prompts = {
	selectItem: {
		name: "id",
    type: "input",
    message: "Select Product ID to Purchase:"
  }
  ,selectQty: {
  	name: "qty",
    type: "input",
    message: "How Many Would You Like:"
  }
  ,buyAgain: {
    name: "again",
    type: "confirm",
    message: "Make Another Purchase?"
  }
}

module.exports = Prompts;