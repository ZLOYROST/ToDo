const inputTask = document.getElementById('task-input');
const TODOARRAY = []

function cldiv() {
  document.getElementById("new").innerHTML = '';
  
}


function render () {
  cldiv()

  TODOARRAY.forEach((el) => {
    let firstElem = document.createElement("li");
  
    let textToList = document.createTextNode(el.text);
    console.log(el.text)
   
    firstElem.appendChild(textToList);
    let list = document.getElementById("new");
    
    list.appendChild(firstElem);
    
  });
  
  
  }

function addTask () {
  let getInput = document.getElementById("task-input");
  console.log('stop')
    
  if ( getInput.value == '' ) {
    console.log('stop')
    return 
  }                  

  
  let value = inputTask.value;
  
  const element = { 
   id: Date.now(),
   text: value
  }
  TODOARRAY.push(element)
  getInput.value = '';  
  render()
 
 

  
}



let butnAdd = document.querySelector("#butnAdd")

butnAdd.addEventListener("click", () => {addTask()})



  document.getElementById('task-input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      addTask()
      
    }
  });































































// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//  var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//  span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Нажмите на кнопку "Закрыть", чтобы скрыть текущий элемент списка
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Добавить "checked" символ при нажатии на элемент списка
// var list = document.querySelector('#myUL');
// console.log(list)
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//  }
// }, false);
// console.log(list);
// // Создайте новый элемент списка при нажатии на кнопку "Добавить"
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//  var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("Вы должны что-то написать!");
//   } else {
//    document.getElementById("myUL").appendChild(li);
//   }
//  document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//  span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//      var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }