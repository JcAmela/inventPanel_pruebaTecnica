module.exports = (sequelize, DataTypes) => {
    const Ship = sequelize.define('Ship', {
      destinationAddress: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      recipientName: DataTypes.STRING,
      senderName: DataTypes.STRING,
      weight: DataTypes.FLOAT
    });
  
    return Ship;
  };
  