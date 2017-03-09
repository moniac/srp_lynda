function Auto (merk, kleur) {
  this.merk = merk
  this.kleur = kleur
  console.log(this)
}

Auto.prototype = {
  rijden: function () {return 'ik ben aan het rijden'}
}

var oa = new Auto('Opel', 'Rood')
