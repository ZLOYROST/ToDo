
let currentPage = 1
let cnt = 5; //сколько отображаем тасок на странице
const inputTask = document.getElementById('task-input');
let TODOARRAY = []
let filter = 'All'
const taskList = document.querySelector('#taskList')
let chbox = document.querySelector('#AllChecked') 
let i = 0
let a = 0
let b = 0
let total = document.querySelector('#total') 
let Selected = document.querySelector('#Selected')  
let Unselected = document.querySelector('#Unselected')

// чекбокс который загорается если все элементы выделены
function ChangeStatusForAllChecked () {
  const result = TODOARRAY.every(el => {
    return el.status == true
  })
  if(result == true) {
    chbox.setAttribute('checked', 'true')
  } else {
    chbox.removeAttribute('checked')
  }
}

// функция очищения taskList после ввода
function cldiv() {
  taskList.innerHTML = '';
}
// Функция (фильтрации) по кнопкам 
function Filter () {
  let ArrayForRender 
  let Buttons = document.querySelectorAll('.filterButton')
  Buttons.forEach( el => el.classList.remove('Active'))
  document.querySelector(`[data-filter="${filter}"]`).classList.add('Active')
  
 switch (filter) {
  case 'Active':
    ArrayForRender = TODOARRAY.filter((el) => {
      return el.status == false
   })
    break;
    case 'Done':
      ArrayForRender = TODOARRAY.filter((el) => {
        return el.status == true
 })
 break;
 case 'All':
  ArrayForRender = TODOARRAY
}

return ArrayForRender
}
// сохранение в в локальную память
function saveToLocalStorage() { 
  localStorage.setItem('TODOARRAY', JSON.stringify(TODOARRAY))
}
if (localStorage.getItem('TODOARRAY')) {
  
  TODOARRAY = JSON.parse(localStorage.getItem('TODOARRAY'))
}
 render()

 // функция чтобы если на странице не осталось тасок, тебя перекинуло на 1 страницу
 function returnToPage(TabulateArr) {
  let cnt_page = Math.ceil(TabulateArr.length / cnt)
   if(currentPage > cnt_page) {
}
}

// функция для переключиния страниц
function Pagination(TabulateArr) {
  let a = document.querySelector('.pagination').innerHTML = "";
  let cnt_page = Math.ceil(TabulateArr.length / cnt)
  // currentPage = 1
    for(let i = 1; i <= cnt_page; i++) {
    let buttonForPag = document.createElement('li')
    let link1 = document.createElement('a')
    link1.textContent = `${i}`
    buttonForPag.appendChild(link1)
    link1.setAttribute('data-action', 'switch')
    link1.id = i
    link1.classList.add("page-link")
    buttonForPag.classList.add("page-item")
    let kk = document.querySelector('.pagination')
    kk.append(buttonForPag)
    buttonForPag.addEventListener('click', switchPage) 
  }
  }

  function switchPage(event) {
    if(event.target.dataset.action == 'switch') {
      currentPage = event.target.id
     render()
    }
  }
      
  // отрисовка массива в DOM
  function render() {  
      howMuchTask ()
      howMuchSelected ()
      howMuchUnSelected ()
      total.textContent = i
      Selected.textContent = a
      Unselected.textContent = b
      cldiv()
      let TabulateArr = Filter()
      let page = currentPage - 1
      let tasksForQurentPages = TabulateArr.slice(page * cnt  , page * cnt + cnt)
      
      returnToPage(TabulateArr)
      Pagination(TabulateArr)
        tasksForQurentPages.forEach((el) => { 
        let firstElem = document.createElement("li");
        firstElem.id = el.id
        // блок который относится к созданию чекбокса
        let newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox'
        newCheckBox.id = el.id
        if(el.status) {
          newCheckBox.setAttribute('checked', 'true');
        }
        firstElem.appendChild(newCheckBox)

        //созадние дива с текстом
        let div = document.createElement('div')
        let textToList = document.createTextNode(el.text);
        div.appendChild(textToList)
        firstElem.appendChild(div)

        // добавляем дочерний элемент внутрь основного (firstElem родитель)
        let closeBtnForOne = document.createElement('button')
        closeBtnForOne.textContent = 'X'
        closeBtnForOne.setAttribute('data-action', 'delete')
        closeBtnForOne.id = el.id
        firstElem.appendChild(closeBtnForOne)
        closeBtnForOne.classList.add('closeBtnForOne')

        if ( el.status == true) {
          firstElem.classList.add("perecherkuvanue");
          
        } else {
          firstElem.classList.remove("perecherkuvanue");
        }
        //кнопка изменения
        let buttonEdit = document.createElement('img');
        buttonEdit.classList.add('eddit')
        buttonEdit.type = 'image';
        buttonEdit.src = './2.png'
        buttonEdit.id = el.id
        buttonEdit.setAttribute('data-action', 'edit')
        document.body.appendChild(buttonEdit)
        firstElem.appendChild(buttonEdit)

        //кнопка сохранения
        let buttonSaveTaskstype = document.createElement('img')
        buttonSaveTaskstype.classList.add('imgSave')
        buttonSaveTaskstype.type = 'image'
        buttonSaveTaskstype.src ='./1.png'
        buttonSaveTaskstype.id = el.id
        buttonSaveTaskstype.setAttribute('data-action', 'save')
        document.body.appendChild(buttonSaveTaskstype)
        firstElem.appendChild(buttonSaveTaskstype)
        
        

        // в элемент list добавляется готовый элемент
        taskList.appendChild(firstElem);
      });
      saveToLocalStorage()
      ChangeStatusForAllChecked()
      howMuchTask()
      
    }
    // счетчик который показывает сколько всего тасок на странице
function howMuchTask () {
   i = TODOARRAY.length   
   }

//Сколько выделенных тасок
function howMuchSelected () {
     let sum = TODOARRAY.filter(el => {
       return el.status == true
      })
      a = sum.length
}
      //сколько не выделенных тасок
      function howMuchUnSelected () {
        let sum = TODOARRAY.filter(el => {
          return el.status == false
         })
         b = sum.length
      }

    // если пустое поле в инпуте, и пытаются нажать на кнопку добавить, то в консол выведет stop
    function addTask () {
      if ( inputTask.value == '' ) {
        console.log('stop')
        return 
      }                  
      // формирование замечания и добавление в массив
      let value = inputTask.value;
      
      const element = { 
        id: Date.now(),
        text: value,
        status: false
      }
      
      TODOARRAY.push(element)
      saveToLocalStorage()
      inputTask.value = '';    // очищение инпута!!!
      
    }
    const buttons = document.querySelectorAll('.filterButton');
     buttons.forEach((button) => {
     button.addEventListener('click', function(event) {
      filter = event.target.dataset.filter
      render()
    })
     
     })

taskList.addEventListener('click', deleteTask)
function deleteTask(event) {
  
  if(event.target.dataset.action === 'delete') {
    TODOARRAY.forEach((el,index) => { 
      if(event.target.id == el.id) {
      TODOARRAY.splice(index,1)
      }
    })
     render()
  }
}

let butndelete = document.querySelector("#butndelete")                                        
butndelete.addEventListener('click', function() {
    const result = TODOARRAY.filter(el => {
    return el.status == false
  })
  TODOARRAY = result
  render()
})

//Функция изменения таски с последующим сохранением ее через enter и отмена изменения по ESCAPE
taskList.addEventListener('click', editTask)
function editTask(event) { 
  if(event.target.dataset.action == 'edit') { 
    render()
    let input = document.createElement('input');
    input.setAttribute("inputEdit", "1")
    let perem = event.target.id
    input.id = `edit${perem}`
    let vstavka = document.querySelector(`#taskList [id="${perem}"] button`)
    let replaceText = document.querySelector(`#taskList [id="${perem}"] div`)
    let proba = replaceText.innerHTML
    replaceText.textContent = input.value
    vstavka.before(input)
    input.value = proba
    let input2 = document.querySelector(`#taskList #edit${perem}`)
    
    //сохранение по кнопки ENTER
    input2.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
              TODOARRAY.forEach((el) => {
                let a = event.target.id
                let b = a.slice(4)
                if(b == el.id)  {
                el.text = input.value 
                }})
              render()
        }
      } )
     //Отмена изменения по Escape
      input2.addEventListener('keydown', function(event) {
      if(event.key === 'Escape') { 
        TODOARRAY.forEach((el) => {
        let a = event.target.id
        if(a == el.id) {
           el.text
        }
        render()
      }
      )}})
    }
  }
  
  //сохранение изменений таски по кнопке
  taskList.addEventListener('click', SaveTask)
  function SaveTask(event) {
    if(event.target.dataset.action == 'save') {
      TODOARRAY.forEach((el) => {
        if(event.target.id == el.id) {
        let a = event.target.id
        event.target.id = el.id
        let input2 = document.querySelector(`#edit${a}`)
        el.text = input2.value
        render()
    }})
   }
  }

// Добавить задачу
let butnAdd = document.querySelector("#butnAdd")
butnAdd.addEventListener('click', function() {
  addTask()
  render()
})

// чекбокс на выделить все
chbox.addEventListener('click', function() {
  const result = TODOARRAY.every(el => {
  return el.status == true
 }, render())
 
 for(let i = 0; i < TODOARRAY.length; i++) {
   TODOARRAY[i].status = true
   if(result == true) {
     TODOARRAY[i].status = false 
   }
 }
})
 
// что бы по нажатию enter добавлялась таска
  document.getElementById('task-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { 
      addTask()
      render()
    }
  });

 // перечеркиваем  
 document.addEventListener('click', function(event) {
  if(event.target.type == 'checkbox') {
      TODOARRAY.map((el) => {
      if(event.target.id == el.id) {
          if(el.status == false) {
              el.status = true 
              return
          }
      }
         // отменяем перечеркивание
        if(event.target.id == el.id) {
            if(el.status == true) {
                el.status = false
                return
            }
        }
     })
    render()
  }
})



// vvvvvvv
// вавава//