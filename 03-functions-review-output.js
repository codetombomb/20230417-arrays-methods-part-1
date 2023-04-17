const gumballs = [

    { color: "red", size: "large", manufacturer: "Dubble Bubble", quantity: 32 },
  
    { color: "blue", size: "large", manufacturer: "Dubble Bubble", quantity: 49 },
  
    { color: "green", size: "large", manufacturer: "Dubble Bubble", quantity: 37 },
  
    { color: "yellow", size: "large", manufacturer: "Dubble Bubble", quantity: 29 },
  
    { color: "orange", size: "large", manufacturer: "Dubble Bubble", quantity: 30 }
  
  ]
  
  // function declaration
  const gumBallMachine = (money) => {
      if(money === 0.25){
          return { color: "orange", size: "large", manufacturer: "Dubble Bubble" }
      } else {
          console.log("tell user to insert quarter")
      }
      debugger
  }
  
  // function call
  gumBallMachine(1.25)