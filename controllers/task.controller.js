const TaskModel = require("../models/task.model");
const ObjectId = require("mongoose").Types.ObjectId;

/************* Create task *************/

exports.createTask = async (req, res) => {
  const { activity, type, deadline, participants } = req.body;

  try {
    const task = new TaskModel({
      activity: activity,
      type: type,
      deadline: deadline,
      participants: participants,
    });
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(500).send(err);
  }
};

/************* GET Method *************/

exports.getAllTasks = async (req, res) => {
  TaskModel.find({}, (err, docs) => {
    if (!err) res.send(docs);
    else return res.status(500).json(err);
  });
};

/************* Modify task *************/

exports.updateActivity = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow: " + req.params.id);

  const { activity } = req.body;

  try {
    TaskModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: { activity: activity },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else return res.status(500).json(err);
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.updateType = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow: " + req.params.id);

  const { type } = req.body;

  try {
    TaskModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: { type: type },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else return res.status(500).json(err);
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.updateDeadline = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow: " + req.params.id);

  const { deadline } = req.body;

  try {
    TaskModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: { deadline: deadline },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else return res.status(500).json(err);
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.updateComplete = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow: " + req.params.id);

  const { complete } = req.body;

  try {
    TaskModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: { complete: complete },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else return res.status(500).json(err);
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.addParticipant = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow: " + req.params.id);

  const { newParticipant } = req.body;

  try {
    TaskModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { participants: newParticipant } 
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else return res.status(500).json(err);
      }
    )
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.deleteParticipant = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow: " + req.params.id);

  const { participantToDelete } = req.body;

  try {
    TaskModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { participants: participantToDelete } 
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else return res.status(500).json(err);
      }
    )
  } catch (err) {
    return res.status(500).json(err);
  }
};

/************* Delete task *************/

exports.deleteTask = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow: " + req.params.id);

  TaskModel.findByIdAndDelete(req.params.id, (err, docs) => {
    if (!err) res.json("Task " + docs._id + " successfullty deleted");
    else return res.status(500).send(err);
  })
};
