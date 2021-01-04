function count(messages, setter, limit){
    var counters = {};
    var begin;
    console.log(limit);
    if (limit > messages.length){
        begin = 0;
        console.log("begin set to 0");
    } else {
        begin = messages.length - limit;
        console.log("begin set to ", begin);
    }
    for (var i = begin; i < messages.length; i++){
        var words = messages[i].split(" ");
        var tempWords = [];
        for (var j = 0; j < words.length; j++){
            if (!counters[words[j]]){
                counters[words[j]] = 0;
            }
            if (!tempWords.includes(words[j])) {
                counters[words[j]] += 1;
                tempWords.push(words[j]);
            }
        }
    }        
    setter(counters);
}

export default count;