const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/icoffee', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio."
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor que o limite permitido '{MIN}'"