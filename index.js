function scuberGreetingForFeet(feet){
 let freeSample 
  if (feet <= 400) {
    freeSample = 'This one is on me!'
  }
  else if (feet > 400 && feet <= 2000){
    freeSample = 'That will be twenty bucks.'
  }
  else if (feet > 2000 && feet <= 2500){
    freeSample = 'I will gladly take your thirty bucks.'
  }
  else if (feet > 2500){
    freeSample = 'No can do.'
  }
  
  return(freeSample);
}

function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.':'No go.';
  
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default :
      return "Bye."    
  }
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);
ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');