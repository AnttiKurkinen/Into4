const db = require('../database');

const Arviointi = {
  getById: function(id, callback) {
    return db.query('select * from Arviointi where idArviointi=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from Arviointi', callback);
  },
  add: function(Arviointi, callback) {
    return db.query(
      'insert into Arviointi (paivamaara, arvosana) values(?,?)',
      [Arviointi.paivamaara, Arviointi.arvosana],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, Arviointi, callback) {
    return db.query(
      'update Arviointi set paivamaara=?, arvosana=? where idArviointi=?',
      [Arviointi.paivamaara, Arviointi,arvosana, id],
      callback
    );
  }
};
module.exports = Arviointi;