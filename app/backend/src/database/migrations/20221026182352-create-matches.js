'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
      },
      homeTeam: {
        type: Sequelize.INTEGER,
        field: 'home_team',
        allowNull: false,
     },
     homeTeamGoals: {
        type: Sequelize.INTEGER,
        field: 'home_team_goals',
        allowNull: false,
     },
     awayTeam: {
        type: Sequelize.INTEGER,
        field: 'away_team',
        allowNull: false,
     },
     awayTeamGoals: {
        type: Sequelize.INTEGER,
        field: 'away_team_goals',
        allowNull: false,
     },
     inProgress: {
      type: Sequelize.BOOLEAN,
      field: 'in_progress',
      allowNull: false
     }
    },{
      timestamps: false
    })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('matches');
  }
};
