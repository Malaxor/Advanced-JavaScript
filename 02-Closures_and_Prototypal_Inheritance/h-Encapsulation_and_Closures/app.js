// Encapsulation means the hiding of information and exposing only the data you want
// Closures create encapsulation
const makeNuclearBtn = () => {
   let timeWithoutDestruction = 0;
   const totalPeaceTime = () => timeWithoutDestruction;
   const elapseTime = () => timeWithoutDestruction++;
   const launch = () => {
      timeWithoutDestruction = -1; 
      return 'NUCLEAR EXPLOSION';
   }   
   setInterval(elapseTime, 1000); // run the elapseTime function every 1 second
   return {
      // Removal of these any of these methods makes them unavailable
      launch,
      totalPeaceTime
   }
}
const godHelpUs = makeNuclearBtn();
console.log(godHelpUs.totalPeaceTime());
console.log(godHelpUs.launch());