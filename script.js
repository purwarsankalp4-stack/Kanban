body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #121212;
  color: white;
  text-align: center;
}

h1 {
  margin: 20px;
}

.board {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.column {
  background: #1e1e1e;
  width: 300px;
  border-radius: 10px;
  padding: 15px;
}

.tasks {
  min-height: 200px;
}

.task {
  background: #2a2a2a;
  padding: 10px;
  margin: 8px 0;
  border-radius: 5px;
  cursor: grab;
}

.task:active {
  cursor: grabbing;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background: #333;
  color: white;
}
