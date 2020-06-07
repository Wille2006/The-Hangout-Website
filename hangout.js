function helloworld() {
    var rule = prompt("What is the one and only rule?!");

    if (rule.toLocaleLowerCase() == "dont be lame") {
        alert("You are, correct!");
    } else {
        alert("You are, incorrect!");
    }
}