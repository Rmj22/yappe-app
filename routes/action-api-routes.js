const db = require('../models');

module.exports = function (app) {

  app.post("/api/action", async (req, res) => {
    const action = await db.action.create(
      {
        type: req.body.type,
        detail: req.body.detail,
        userId: req.body.user,
        petId: req.body.pet
      }
    );

    res.json(action)
  });

  app.put("/api/action", async (req, res) => {
    const action = await db.action.findOne({ where: { id: req.body.action } });
    await action.update(
      {
        type: req.body.type,
        detail: req.body.detail,
        userId: req.body.user,
        petId: req.body.pet
      }
    );
    res.json(action);
  });

  app.get('/api/actions/user', async ({ body }, res) => {
    const actions = await db.action.findAll({
      where: {
        userId: body.id
      },
      include: [db.pet]
    }).catch(err => {
      console.log(err);
    })

    res.json(actions);
  });

  app.get('/api/actions/pet', async ({ body }, res) => {
    const actions = await db.action.findAll({
      where: {
        petId: body.id
      },
      include: [db.user]
    }).catch(err => {
      console.log(err);
    })

    res.json(actions);
  });

  app.delete("/api/action", async (req, res) => {
    const action = await db.action.destroy({ where: { id: req.body.action } });

    res.json(action);
  });


};
