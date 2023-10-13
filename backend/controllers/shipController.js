const db = require('../models');
const Ship = db.Ship;

exports.create = (req, res) => {
  // Validar la petición
  if (!req.body.destinationAddress) {
    res.status(400).send({
      message: "El campo dirección no puede estar vacío."
    });
    return;
  }

  // Crear un Ship
  const ship = {
    destinationAddress: req.body.destinationAddress,
    postalCode: req.body.postalCode,
    recipientName: req.body.recipientName,
    senderName: req.body.senderName,
    weight: req.body.weight
  };

  // Guardar el Ship en la base de datos
  Ship.create(ship)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el Ship."
      });
    });
};
