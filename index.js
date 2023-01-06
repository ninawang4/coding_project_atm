

var userMap = new Map;
var balance;
var pin;

function submitPin(event) {
    event.preventDefault();
    pin = +document.getElementById('pin').value;
    console.log(pin, userMap.get(pin));
    if (!userMap.get(pin)){
        balance = Math.floor(Math.random()*1000)
        console.log('new user');
    } else {
        balance = userMap.get(pin);
    }
    userMap.set(pin, balance);
    console.log(pin, userMap.get(pin));

    document.getElementById('balance').innerHTML = balance;
    showOptions();
}

function showOptions() {
    var show = document.getElementById("options");
    show.style.display = "block";
    document.getElementById('pin').value = '';

}

function deposit(event) {
    event.preventDefault();
    const amount = +document.getElementById('depositAmt').value;
    balance += amount;
    console.log(balance, amount, balance+amount);

    userMap.set(pin, balance);
    document.getElementById('depositAmt').value = '';
    document.getElementById('balance').innerHTML = balance;
}

function withdraw(event) {
    event.preventDefault();
    const amount = +document.getElementById('withdrawAmt').value;
    balance -= amount;
    console.log(balance, amount, balance - amount);
    userMap.set(pin, balance);
    document.getElementById('withdrawAmt').value = '';
    document.getElementById('balance').innerHTML = balance;
}

function done(event) {
    event.preventDefault();
    var show = document.getElementById("options");
    show.style.display = "none";
}