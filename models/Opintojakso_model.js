const db = require('../database');

const Opintojakso = {
  getById: function(id, callback) {
    return db.query('select * from Opintojakso where idOpintojakso=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from Opintojakso', callback);
  },
  add: function(Opintojakso, callback) {
    return db.query(
      'insert into Opintojakso (koodi,laajuus,nimi) values(?,?,?)',
      [Opintojakso.koodi, Opintojakso.laajuus, Opintojakso.nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, Opintojakso, callback) {
    return db.query(
      'update Opintojakso set koodi=?,laajuus=?, nimi=? where idOpintojakso=?',
      [Opintojakso.koodi, Opintojakso.laajuus, Opintojakso.nimi, id],
      callback
    );
  }
};
module.exports = Opintojakso;