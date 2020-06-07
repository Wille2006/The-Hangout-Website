function helloworld() {
    var rule = prompt("What is the one and only rule?!");

    if ((rule.toLocaleLowerCase() == "don't be lame") ||
        (rule.toLocaleLowerCase() == "don't be lame!") ||
        (rule.toLocaleLowerCase() == "dont be lame") ||
        (rule.toLocaleLowerCase() == "dont be lame!")) {
        alert("You are, correct!");
    } else {
        alert("You are, incorrect!");
    }
}