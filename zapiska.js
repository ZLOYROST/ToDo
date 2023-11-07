let currentPage = 1
const cnt = 5; // сколько отображаем тасок на странице
const inputTask = document.getElementById('task-input')
let TODOARRAY = []
let filter = 'All'
const taskList = document.querySelector('#taskList')
const chbox = document.querySelector('#AllChecked')
let countTotal = 0
let countSelected = 0
let countUnselected = 0
const total = document.querySelector('#total')
const Selected = document.querySelector('#Selected')
const Unselected = document.querySelector('#Unselected')
// ChangeStatusForAllChecked
// чекбокс который загорается если все элементы выделены
function сhange_status_for_all_checked() {
  const result = TODOARRAY.every((el) => el.status === true)
  if (result == true) {
    chbox.setAttribute('checked', 'true')
  } else {
    chbox.removeAttribute('checked')
  }
}

// функция очищения taskList после ввода
function clearDiv() {
  taskList.innerHTML = ''
}
// Функция (фильтрации) по кнопкам
function Filter() {
  let ArrayForRender
  const Buttons = document.querySelectorAll('.filterButton')
  Buttons.forEach((el) => el.classList.remove('Active'))
  document.querySelector(`[data-filter="${filter}"]`).classList.add('Active')

  switch (filter) {
    case 'Active':
      ArrayForRender = TODOARRAY.filter((el) => el.status === false);
      break;
    case 'Done':
      ArrayForRender = TODOARRAY.filter((el) => el.status === true);
      break;
    case 'All':
      ArrayForRender = TODOARRAY;
  }

  return ArrayForRender;
}
// сохранение в в локальную память
function saveToLocalStorage() {
  localStorage.setItem('TODOARRAY', JSON.stringify(TODOARRAY))
}
if (localStorage.getItem('TODOARRAY')) {
  TODOARRAY = JSON.parse(localStorage.getItem('TODOARRAY'))
}
render()

//  // функция чтобы если на странице не осталось тасок, тебя перекинуло на 1 страницу
function returnToPage(TabulateArr) {
  const cnt_page = Math.ceil(TabulateArr.length / cnt)
  if (currentPage > cnt_page) {
    currentPage = 1
  }
}
render();

// функция для переключиния страниц
function Pagination(TabulateArr) {
  document.querySelector('.pagination').innerHTML = ''
  const cnt_page = Math.ceil(TabulateArr.length / cnt)
  currentPage
  for (let i = 1; i <= cnt_page; i++) {
    const buttonForPag = document.createElement('li')
    const link1 = document.createElement('a')
    link1.textContent = `${i}`
    buttonForPag.appendChild(link1);
    link1.setAttribute('data-action', 'switch')
    link1.id = i
    link1.classList.add('page-link')
    buttonForPag.classList.add('page-item')
    const kk = document.querySelector('.pagination')
    kk.append(buttonForPag)
    buttonForPag.addEventListener('click', switchPage)
  }
}

function switchPage(event) {
  if (event.target.dataset.action == 'switch') {
    currentPage = event.target.id
    render();
  }
}

// отрисовка массива в DOM
function render() {
  countTotal = TODOARRAY.length
  howMuchSelected()
  howMuchUnSelected()
  total.textContent = countTotal
  Selected.textContent = countSelected
  Unselected.textContent = countUnselected
  clearDiv()
  const TabulateArr = Filter()
  const page = currentPage - 1
  const tasksForQurentPages = TabulateArr.slice(page * cnt, page * cnt + cnt)

  returnToPage(TabulateArr);
  Pagination(TabulateArr);
  tasksForQurentPages.forEach((el) => {
    const firstElem = document.createElement('li')
    firstElem.id = el.id
    // блок который относится к созданию чекбокса
    const newCheckBox = document.createElement('input')
    newCheckBox.type = 'checkbox'
    newCheckBox.id = el.id
    if (el.status) {
      newCheckBox.setAttribute('checked', 'true')
    }
    firstElem.appendChild(newCheckBox)

    // созадние дива с текстом
    const div = document.createElement('div')
    const textToList = document.createTextNode(el.text)
    div.appendChild(textToList)
    firstElem.appendChild(div)
    // добавляем дочерний элемент внутрь основного (firstElem родитель)
    const closeBtnForOne = document.createElement('button')
    closeBtnForOne.textContent = 'X'
    closeBtnForOne.setAttribute('data-action', 'delete')
    closeBtnForOne.id = el.id
    firstElem.appendChild(closeBtnForOne)
    closeBtnForOne.classList.add('closeBtnForOne')

    if (el.status == true) {
      firstElem.classList.add('perecherkuvanue')
    } else {
      firstElem.classList.remove('perecherkuvanue')
    }
    // кнопка изменения
    const buttonEdit = document.createElement('img')
    buttonEdit.classList.add('eddit')
    buttonEdit.type = 'image'
    buttonEdit.src = './2.png'
    buttonEdit.id = el.id
    buttonEdit.setAttribute('data-action', 'edit')
    document.body.appendChild(buttonEdit)
    firstElem.appendChild(buttonEdit)

    // кнопка сохранения
    const buttonsaveTaskstype = document.createElement('img')
    buttonsaveTaskstype.classList.add('imgSave')
    buttonsaveTaskstype.type = 'image'
    buttonsaveTaskstype.src = './1.png'
    buttonsaveTaskstype.id = el.id
    buttonsaveTaskstype.setAttribute('data-action', 'save')
    document.body.appendChild(buttonsaveTaskstype)
    firstElem.appendChild(buttonsaveTaskstype)

    // в элемент list добавляется готовый элемент
    taskList.appendChild(firstElem)
  });
  saveToLocalStorage()
  сhange_status_for_all_checked()
  countTotal = TODOARRAY.length
}

// Сколько выделенных тасок
function howMuchSelected() {
  const sum = TODOARRAY.filter((el) => el.status === true)
  countSelected = sum.length
}
// сколько не выделенных тасок
function howMuchUnSelected() {
  const sum = TODOARRAY.filter((el) => el.status === false)
  countUnselected = sum.length
}

// если пустое поле в инпуте, и пытаются нажать на кнопку добавить, то в консол выведет stop
function addTask() {
  if (inputTask.value == '') {
    return
  }
  // формирование замечания и добавление в массив
  const { value } = inputTask

  const element = {
    id: Date.now(),
    text: value,
    status: false,
  };

  TODOARRAY.push(element)
  inputTask.value = ''; // очищение инпута!!!
}
const buttons = document.querySelectorAll('.filterButton');
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    filter = event.target.dataset.filter
    render();
  })
})

function deleteTask(event) {
  if (event.target.dataset.action === 'delete') {
    TODOARRAY.forEach((el, index) => {
      if (event.target.id == el.id) {
        TODOARRAY.splice(index, 1)
      }
    })
    render()
  }
}

const butnDelete = document.querySelector('#butnDelete')
butnDelete.addEventListener('click', () => {
  const result = TODOARRAY.filter((el) => el.status === false)
  TODOARRAY = result
  render()
})

// Функция изменения таски с последующим сохранением ее через enter и отмена изменения по ESCAPE
taskList.addEventListener('click', editTask)
function editTask(event) {
  if (event.target.dataset.action == 'edit') {
    render();
    const input = document.createElement('input')
    input.setAttribute('inputEdit', '1')
    const perem = event.target.id
    input.id = `edit${perem}`
    const vstavka = document.querySelector(`#taskList [id="${perem}"] button`)
    const replaceText = document.querySelector(`#taskList [id="${perem}"] div`)
    const proba = replaceText.innerHTML
    replaceText.textContent = input.value
    vstavka.before(input)
    input.value = proba
    const input2 = document.querySelector(`#taskList #edit${perem}`)

    // сохранение по кнопки ENTER
    input2.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        TODOARRAY.forEach((el) => {
          const a = event.target.id;
          const b = a.slice(4)
          if (b == el.id) {
            el.text = input.value
          }
        })
        render()
      }
    });
    // Отмена изменения по Escape
    input2.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        TODOARRAY.forEach((el) => {
          const a = event.target.id
          if (a == el.id) {
            el.text
          }
          render()
        })
      }
    })
  }
}

// сохранение изменений таски по кнопке
function saveTask(event) {
  if (event.target.dataset.action == 'save') {
    TODOARRAY.forEach((el) => {
      if (event.target.id == el.id) {
        const targetid = event.target.id
        event.target.id = el.id
        const input2 = document.querySelector(`#edit${targetid}`)
        el.text = input2.value
        render();
      }
    });
  }
}

// Добавить задачу
const butnAdd = document.querySelector('#butnAdd')
butnAdd.addEventListener('click', () => {
  addTask();
  render();
});

// чекбокс на выделить все
chbox.addEventListener('click', () => {
  const result = TODOARRAY.every((el) => el.status === true, render());

  for (let i = 0; i < TODOARRAY.length; i++) {
    TODOARRAY[i].status = true
    if (result == true) {
      TODOARRAY[i].status = false
    }
  }
});

// что бы по нажатию enter добавлялась таска
inputTask.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
    render();
  }
});

// перечеркиваем
document.addEventListener('click', (event) => {
  if (event.target.type == 'checkbox') {
    TODOARRAY.map((el) => {
      if (event.target.id == el.id) {
        if (el.status == false) {
          el.status = true
          return
        }
      }
      // отменяем перечеркивание
      if (event.target.id == el.id) {
        if (el.status == true) {
          el.status = false
        }
      }
    });
    render()
  }
});

taskList.addEventListener('click', saveTask)
taskList.addEventListener('click', deleteTask)
