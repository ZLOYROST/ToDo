// создаем масив, и инпут
const inputTask = document.getElementById('task-input');
let TODOARRAY = []
const taskList = document.querySelector('#taskList')
let chbox = document.querySelector('#AllChecked') 
let i = 0
let total = document.querySelector('#total') 
let a = 0
let Selected = document.querySelector('#Selected')  
let b = 0
let Unselected = document.querySelector('#Unselected')
// функция очищения taskList после ввода
function cldiv() {
  taskList.innerHTML = '';
}

// сохранение в в локальную память
function saveToLocalStorage() { 
  localStorage.setItem('TODOARRAY', JSON.stringify(TODOARRAY))
}
if (localStorage.getItem('TODOARRAY')) {
  
  TODOARRAY = JSON.parse(localStorage.getItem('TODOARRAY'))
}
 render()

// отрисовка массива в DOM
function render () {  
  howMuchTask ()
  howMuchSelected ()
  howMuchUnSelected ()
  total.textContent = i
  Selected.textContent = a
  Unselected.textContent = b
  cldiv()
  inputTask.focus()
    TODOARRAY.forEach((el) => {
        let firstElem = document.createElement("li");

        // блок который относится к созданию чекбокса
        let newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';
        newCheckBox.id = el.id
        if(el.status) {
          newCheckBox.setAttribute('checked', 'true');
        }
        firstElem.appendChild(newCheckBox)
        
        let textToList = document.createTextNode(el.text);
        // добавляем дочерний элемент внутрь основного (firstElem родитель)
        firstElem.appendChild(textToList);
        
        let closeBtnForOne = document.createElement('button')
        closeBtnForOne.textContent = 'X'
        closeBtnForOne.setAttribute('data-action', 'delete')
        closeBtnForOne.id = el.id
        firstElem.appendChild(closeBtnForOne)

        if ( el.status == true) {
          firstElem.classList.add("perecherkuvanue");
          
        } else {
          firstElem.classList.remove("perecherkuvanue");
        }
        // в элемент list добавляется готовый элемент
        taskList.appendChild(firstElem);
      });
      saveToLocalStorage()
      ChangeStatusForAllChecked ()
      howMuchTask ()
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
    taskList.addEventListener('click', deleteTask)

    
function deleteTask(event) {
  
  if(event.target.dataset.action === 'delete') {
    TODOARRAY.forEach((el,index) => {
      if(event.target.id == el.id) {
      TODOARRAY.splice(index,1)
      }
    })
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
 })
 

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

 // перечеркиваем отмеченное 
 document.addEventListener('click', function(event) {
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
})
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
   