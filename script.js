// variables UI

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDleteAll');
const taskList = document.querySelector('#task-list');
let items ;

//load items
loadItems();




//call event listener
eventListeners();

function eventListeners(){
    //submit event
form.addEventListener('submit',addNewItem);
//delete an item
taskList.addEventListener('click',deleteItem);
//delete all items
btnDeleteAll.addEventListener('click',btnDeleteAllItems);
}

function loadItems(){
    items = getItemsFromLS();

items.forEach(function(item){
createtem(item);
});
}

//get items from Local storage
function getItemsFromLS(){
if(localStorage.getItem('items') === null){
    items = [];

}
    else {
        items = JSON.parse(localStorage.getItem('items'));


    }
    return items;
}
//set item to local storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}
//deleete item from ls
function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if (item===text){
        items.splice(index,1);
    }
});
localStorage.setItem('items', JSON.stringify(items));
}

function createtem(text){
    //create li
    const li= document.createElement('li');
        li.className='list-group-item list-group-item-secondary';
        li.appendChild(document.createTextNode(text));
    //create a
        const a = document.createElement('a');
        a.classList='delete-item float-right';
        a.setAttribute('href','#');
        a.innerHTML='<i class="fas fa-times"></i>'

        li.appendChild(a);

        //add li to ul
taskList.appendChild(li);
console.log(li);
}

function addNewItem(e){
    if (input.value === ''){
    alert('Lutfen alani doldurunuz');
}
//createitem
createtem(input.value);
//SAVE TO LS
setItemToLS(input.value);
//clear input
input.value='';
e.preventDefault();
} 



//delete all items
function btnDeleteAllItems(e){
    if(confirm('are you sure')) {
    //birinci yol taskList.innerHTML='';
   while(taskList.firstChild){
       taskList.removeChild(taskList.firstChild);
   }
    localStorage.clear();
    }
        e.preventDefault();
    
    }

    //delete an item
function deleteItem(e){
    
if (e.target.className==='fas fa-times'){
    if(confirm('are you sure')) {
  e.target.parentElement.parentElement.remove();
  (e.target.parentElement.parentElement.textCotent);
  
}
    }
e.preventDefault();
}