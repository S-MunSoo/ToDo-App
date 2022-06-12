const API_URL =
  "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos";
const API_KEY = "FcKdtJs202204";
const USER_NAME = "KDT2_ShinMunSoo";
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("task-input");
const addButton = document.querySelector("#addTodo");
const todoSection = document.querySelector(".task-list");
const taskTabs = document.querySelectorAll(".task-tabs div");
let mode = "all";
let todos = [];
let filterList = [];

// TAB 필터링
for (let i = 1; i < taskTabs.length; i++) {
  //
  taskTabs[i].addEventListener("click", (e) => filter(e));
}

function filter(e) {
  mode = e.target.id;
  let todosData = todos.slice(-15);
  filterList = [];
  // 바 움직이기
  document.getElementById("under-line").style.width =
    event.target.offsetWidth + "px";
  // document.getElementById("under-line").style.top =
  //   event.target.offsetTop + event.target.offsetHeight + "px";
  document.getElementById("under-line").style.left =
    event.target.offsetLeft + "px";

  if (mode === "all") {
    render(todosData);
  } else if (mode === "ongoing") {
    for (let i = 0; i < todosData.length; i++) {
      if (todosData[i].done === false) {
        filterList.push(todosData[i]);
      }
    }
    render(todosData);
  } else if (mode === "done") {
    for (let i = 0; i < todosData.length; i++) {
      if (todosData[i].done === true) {
        filterList.push(todosData[i]);
      }
    }
    render(todosData);
  }
  console.log("fr???", filterList);
}

const onInit = async (e) => {
  await getTodo();
  await render(todos);
};

todoForm.addEventListener("submit", (e) => onSubmit(e, todoInput.value));

function onSubmit(e, todoValue) {
  e.preventDefault();
  console.log("e", e);
  console.log("todoValue", todoValue);
  createToDo(todoValue);

  todoInput.value = "";
  todoInput.focus();
  render(todos);
}

// Requst
async function request({ url = API_URL, method = "", data = {} }) {
  const response = await axios({
    url,
    method,
    headers: {
      "content-type": "application/json",
      apikey: API_KEY,
      username: USER_NAME,
    },
    data,
  });
  return response;
}

// 등록된 할일을 가져(조회)온다.
async function getTodo() {
  try {
    const res = await request({
      method: "GET",
    });
    let data = res.data.slice(-10);
    data.forEach((item) => {
      todos.push(item);
    });
    // console.log("res.data??", data);
    console.log("투두쓰?", todos);
    return res;
  } catch (err) {
    throw err;
  }
}

// 유저가 할일을 등록
async function createToDo(todoValue, todoOrder) {
  try {
    const res = await request({
      method: "POST",
      data: {
        title: todoValue,
        // order: todoOrder,
      },
    });
    todos.push(res.data);
    console.log("Res??", res.data);
    render(todos);
    return res;
  } catch (err) {
    console.error(err);
  } finally {
    render(todos);
  }
}
// toggle
function toggleComplete(id) {
  let todosData = todos.slice(-15);
  for (let i = todosData.length - 1; i >= 0; i--) {
    if (todosData[i].id === id) {
      todosData[i].done = !todosData[i].done;

      break;
    }
  }
  render(todos);
}
// 할일 삭제
async function deleteTask(id) {
  console.log("삭제되뉘?");

  try {
    todos = todos.filter((item) => item.id !== id);
    const res = await request({
      url: `${API_URL}/${id}`,
      method: "DELETE",
    });
    return res;
  } catch (err) {
    alert(err);
  } finally {
    render(todos);
  }
}

// render
function render(todos) {
  let todosData = todos.slice(-15);

  let list = [];
  if (mode === "all") {
    list = todosData;
  } else if (mode === "ongoing" || "done") {
    list = filterList;
  }
  let resultHTML = "";
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i].done == true) {
      resultHTML += /*HTML*/ ` <div class="task-list">
    <div>
    <label class="task-done">${list[i].title}</label>
    </div>
    <div class ="task-btn">
      <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-arrow-rotate-left return-btn"></i></button>
      <button><i class="fa-solid fa-gear"></i></button>
      <button onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
    </div>
  </div>`;
    } else {
      resultHTML += /*HTML*/ ` <div class="task-list">
      <div>
      <label>${list[i].title}</label>
      </div>
      <div class ="task-btn">
        <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-check"></i></button>
        <button><i class="fa-solid fa-gear"></i></button>
        <button onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>`;
    }
  }

  // return todoItem;
  document.getElementById("task-board").innerHTML = resultHTML;
}

onInit();
