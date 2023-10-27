'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { nome: 'John Doe', senha: '123' },
      { nome: 'gabriel', senha: '123' },
      { nome: 'gabriel', senha: crypto.encrypt ('1234') },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
