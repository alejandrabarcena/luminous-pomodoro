let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
  const timerEl = document.getElementById("timer");
  timerEl.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        isRunning = false;
        alert("¡Pomodoro terminado!");
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  isRunning = false;
  updateDisplay();
}

function stopTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  isRunning = false;
  updateDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  // Mostrar tiempo inicial
  updateDisplay();

  // Botones del temporizador
  document.getElementById("start-btn").addEventListener("click", startTimer);
  document.getElementById("pause-btn").addEventListener("click", pauseTimer);
  document.getElementById("reset-btn").addEventListener("click", resetTimer);
  document.getElementById("stop-btn").addEventListener("click", stopTimer);
  document.getElementById("short-break-btn").addEventListener("click", () => {
    clearInterval(timer);
    minutes = 5;
    seconds = 0;
    isRunning = false;
    updateDisplay();
  });
  document.getElementById("long-break-btn").addEventListener("click", () => {
    clearInterval(timer);
    minutes = 15;
    seconds = 0;
    isRunning = false;
    updateDisplay();
  });

  // Tareas
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
      taskList.appendChild(li);
      taskInput.value = "";
    }
  });
});

