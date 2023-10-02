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
  // inputTask.focus()
    TODOARRAY.forEach((el) => {
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
        
        if ( el.status == true) {
          firstElem.classList.add("perecherkuvanue");
          
        } else {
          firstElem.classList.remove("perecherkuvanue");
        }
        let buttonEdit = document.createElement('img');
        buttonEdit.classList.add('eddit')
        // buttonEdit.setAttribute("type", "button");
        buttonEdit.type = 'image';
        buttonEdit.src = './a.png.png'
        buttonEdit.id = el.id
        console.log('555',el);
        buttonEdit.setAttribute('data-action', 'edit')
        document.body.appendChild(buttonEdit)
        firstElem.appendChild(buttonEdit)
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

//ниже рабочий код
taskList.addEventListener('click', editTask)
function editTask(event) { 
  if(event.target.dataset.action == 'edit') { 
      TODOARRAY.forEach((el) => {
        if(event.target.id == el.id)  {
          render()
          let input = document.createElement('input');
          let perem = event.target.id
          let vstavka = document.querySelector(`#taskList [id="${perem}"] button`)
          let replaceText = document.querySelector(`#taskList [id="${perem}"] div`)
          replaceText.textContent = ''
          vstavka.before(input)
          
        }
      })
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
  