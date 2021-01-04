function tracker(message,getcounters,setcounters,messages){
   var counters = getcounters;
   const limit = 100;
   // for (var j = 0; j < limit; j++){
   //    if (messages.length-j >= 0){
         // var words = messages[messages.length-j].split(" ");
         var words = message.split(" ");
         var tempWords = [];
         for (var i = 0; i < words.length; i++){
            if (!counters[words[i]]){
               counters[words[i]] = 0;
            }
            if (!tempWords.includes(words[i])) {
               counters[words[i]] += 1;
               tempWords.push(words[i]);
            }
      //    }
      // }
   }
   setcounters(counters);
}


export default tracker;