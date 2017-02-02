function myFunction() {
    var text;
    var state = document.getElementById("input").value;

    switch(state) {
        case "een":
            text = "een is 1";
            state.value = "";
        break;
        case "twee":
        text = "twee is 2";
        state.value = "";
        break;
        case "drie":
        text = "drie is 3";
        state.value = "";
        break;
        case "":
        text = "je zult wel wat moeten invullen";
        state.value = "";
        break;
        default:
        text = "1 tot 3 asjeblieft";
        state.value = "";
    }
    document.getElementById("demo").innerHTML = text;}

document.querySelector("#knop").addEventListener('click', myFunction);
