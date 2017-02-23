var balance = 1000

window.onload = show()

function show () {
  console.log(balance)
  document.querySelector('p>span').innerHTML = balance
}

function deposit (amount) {
  balance = balance + amount
  show()
  return balance
}

function withdraw (amount) {
  if (balance - amount < 0) {
    console.log('Zoveel geld heb je niet.')
    return false
  } else {
    balance = balance - amount
    show()
    return balance
  }
}
