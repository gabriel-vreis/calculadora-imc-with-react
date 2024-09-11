import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState(''); // Guarda a tarefa atual
  const [tasks, setTasks] = useState([]); // Guarda a lista de tarefas

  // Função para adicionar tarefa
  const addTask = () => {
    if (task !== '') {
      setTasks([...tasks, task]); // Adiciona a nova tarefa à lista
      setTask(''); // Limpa o campo de entrada
    }
  };

  // Função para remover uma tarefa
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite uma tarefa..."
      />
      <button onClick={addTask}>Adicionar</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
