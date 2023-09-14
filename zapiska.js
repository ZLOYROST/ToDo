const inputTask = document.getElementById('task-input');
const TODOARRAY = []


function cldiv() {
  document.getElementById("new").innerHTML = '';
  
}


function render () {
    cldiv()
    TODOARRAY.forEach((el) => {
        let firstElem = document.createElement("li");
        
        let newCheckBox = document.createElement('input');
        
        if(el.status) {
          newCheckBox.setAttribute('checked', 'true');
          
        }
        
        newCheckBox.id = el.id
        firstElem.id = document.getElementById("ggg")
        newCheckBox.type = 'checkbox';
        let textToList = document.createTextNode(el.text);
        
        
        firstElem.appendChild(textToList);
        firstElem.appendChild(newCheckBox)
        
        let list = document.getElementById("new");

        if ( el.status == true) {
          firstElem.classList.add("perecherkuvanue");
      
           
        } else {
          firstElem.classList.remove("perecherkuvanue");
        }


       
        list.appendChild(firstElem);
  });
}


function addTask () {   
  if ( inputTask.value == '' ) {
    console.log('stop')
    return 
  }                  

  let value = inputTask.value;
  
  const element = { 
   id: Date.now(),
   text: value,
   status: false
  }
  TODOARRAY.push(element)
  inputTask.value = '';  
}



let butnAdd = document.querySelector("#butnAdd")
butnAdd.addEventListener('click', function() {
  addTask()
  render()
})


  document.getElementById('task-input').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      addTask()
      render()
}
  });
 
document.addEventListener('click', function(event) {
    TODOARRAY.map((el) => {
        if(event.target.id == el.id) {
            if(el.status == false) {
                el.status = true 
                return
            }
        }

        if(event.target.id == el.id) {
            if(el.status == true) {
                el.status = false
                return
            }
        }
     })
    render()
})

  



























































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