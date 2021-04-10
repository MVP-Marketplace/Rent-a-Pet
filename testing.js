
// function minimumStepsToOne(num) {

//     if (num % 3 === 0){
//         minimumStepsToOne(num/3);
//     } else if (num % 2 === 0) {
//         minimumStepsToOne(num/2);
        
//     } else {
//         minimumStepsToOne(num-1);
//     }
    
//     return opCount++;
// }

function minStepsOne(n) {
  
    function recurse(curr) {
      // Base case
      if(curr === 1) {
        return 0;
      }
      
      // Recursive relations
      // sub1
      let steps = recurse(curr-1);
      
      // divby2
      if(curr % 2 === 0) {
        let divby2 = recurse(curr/2);
        steps = Math.min(steps, divby2);
      }
      
      // divby3
      if(curr % 3 === 0) {
        let divby3 = recurse(curr/3);
        steps = Math.min(steps, divby3);
      }
      
      
      // return min # steps to 1 from `curr`
      return 1+steps;
    }
    
    let res = recurse(n);
    return res;
  }
  
  function minStepsOneMemo(n) {
    let cache = {};
    // let count = 0;
    function recurse(curr) {
      // Base case
      if(curr === 1) {
        return 0;
      }
      // Check cache
      if(curr in cache) {
        // count++;
        return cache[curr];
      }
      
      
      // Recursive relations
      // sub1
      let steps = recurse(curr-1);
      
      // divby2
      if(curr % 2 === 0) {
        let divby2 = recurse(curr/2);
        steps = Math.min(steps, divby2);
      }
      
      // divby3
      if(curr % 3 === 0) {
        let divby3 = recurse(curr/3);
        steps = Math.min(steps, divby3);
      }
      
      
      // return min # steps to 1 from `curr`
      let result =  1+steps;
      // store result in cache
      cache[curr] = result;
      
      return result;
    }
    
    let res = recurse(n);
    // console.log("Cache access count: "+count);
    // console.log(cache);
    return res;
  }
  
  // console.time("Brute force recursion: ");
  // console.log(minStepsOne(405));
  // console.timeEnd("Brute force recursion: ");
  
  
  console.time("Memoization: ");
  console.log(minStepsOneMemo(9968));
  console.timeEnd("Memoization: ");


  function minStepsOneTab(n) {
    // init tab
    let tab = new Array(n+1);
    
    // apply base case to tab
    tab[1] = 0;
    
    
    // loop tab filling subproblem solutions
    for(let curr = 2; curr <= n; curr++) {
      // sub1
      let steps = tab[curr-1];
      
      // divby2
      if(curr % 2 === 0) {
        let divby2 = tab[curr/2];
        steps = Math.min(steps, divby2);
      }
      
      // divby3
      if(curr % 3 === 0) {
        let divby3 = tab[curr/3];
        steps = Math.min(steps, divby3);
      }
      
      // return min # steps to 1 from `curr`
      let result =  1+steps;
      // store result in cache
      tab[curr] = result;
      
      
    }
    
    
    return tab[n];
  }