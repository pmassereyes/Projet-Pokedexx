module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isAlpha: {
            msg: 'The name must be alphabetic '
          }
        }
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: 'Must be an integer number of HP'
          }
        }
      },
      cp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: 'Must be an integer number of CP'
          }
        }
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {
            msg: 'Must be an URL of picture'
          }
        }
      },
      types: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isAlpha:{
            msg: 'The type must be alphabetic'
          }
        }
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }  