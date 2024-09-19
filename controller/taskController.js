const getAllTasks = (req, res) => {
  res.json({ msg: "Getting all tasks" });
};

const getATask = (req, res) => {
  const { id } = req.params;
  res.json({ msg: `Getting a task with id: ${id}` });
};

const createATask = (req, res) => {
  res.json({ msg: "Creating a task" });
};

const patchATask = (req, res) => {
  const { id } = req.params;
  res.json({ msg: `Updating/patchng a task with id: ${id}` });
};

const deleteATask = (req, res) => {
  const { id } = req.params;
  res.json({ msg: `Deleting a task with id: ${id}` });
};

export { getAllTasks, getATask, createATask, patchATask, deleteATask };
