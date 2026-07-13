let tasks = [];
let nextId = 1;

export function getTasks() {
  return [...tasks].sort((a, b) => a.id - b.id);
}

export function createTask(title) {
  const task = {
    id: nextId++,
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  return task;
}

export function updateTask(id, patch) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return null;
  const idx = tasks.indexOf(task);
  // fixed
  tasks[idx] = { ...task, ...patch };
  return tasks[idx];
}

// MISSING FEATURE: export function deleteTask(id) — not implemented
// Tests expect DELETE /api/tasks/:id (applicant adds route + function)

export function deleteTask(id) {
  const idx = tasks.findIndex((t) => t.id === id);

  if (idx === -1) return null;

  const deletedTask = tasks.splice(idx, 1)[0];

  return deletedTask;
}

export function _resetForTests() {
  tasks = [];
  nextId = 1;
}
