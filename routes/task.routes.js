const router = require('express').Router();
const taskController = require('../controllers/task.controller');

// Create task
router.post('/create-task', taskController.createTask);

// GET Method
router.get('/get-all-tasks', taskController.getAllTasks);

// Modify task
router.put('/update-activity/:id', taskController.updateActivity);
router.put('/update-type/:id', taskController.updateType);
router.put('/update-deadline/:id', taskController.updateDeadline);
router.put('/update-complete/:id', taskController.updateComplete);
router.patch('/add-participant/:id', taskController.addParticipant);
router.patch('/delete-participant/:id', taskController.deleteParticipant);

// Delete task
router.delete('/delete-task/:id', taskController.deleteTask);

module.exports = router;