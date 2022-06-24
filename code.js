let items = JSON.parse( localStorage.getItem('records')) ?
JSON.parse(localStorage.getItem('records')) : [
    {
        id: 1,
        item: 'TV Stand',
        createdDate: new Date()
    }
] 

document.addEventListener("DOMContentLoaded", ()=> {showData();});
    const addItems = document.querySelector('#add');

items.forEach((item,index)=>{
        document.querySelector('#content').innerHTML += `
        <div class="items">
        <div><input type="checkbox" id="check" onclick="visible(${index})"></div>
        <div id="name">${item.item}</div>
        <div><i class="bi bi-x" id="remove" onclick="removeItem(${index})"></i></div>
        </div>
        `
    })

function showData(){
    addItems.addEventListener('click',()=>{
        document.querySelector('#content').innerHTML = '';
        items.forEach((item,index)=>{
            document.querySelector('#content').innerHTML += `
            <div class="items">
            <div><input type="checkbox" id="check" onclick="visible(${index})"></div>
            <div id="name">${item.item}</div>
            <div><i class="bi bi-x" id="remove" onclick="removeItem(${index})"></i></div>
            </div>
            `
        })
    
    })
}

function addData() {
    // e.preventDefault();
    items.push(
        {
            id: items.length+1,
            item: document.querySelector('#text').value,
            createdDate: new Date()
        }
    );
    localStorage.setItem('records',JSON.stringify(items));
    (function loadData() {
        console.table(items);
    })()
    showData();
}

let icon = document.querySelector('#remove')
function visible(id){
      if (document.querySelectorAll('#check')[id].checked) {
        document.querySelectorAll('#remove')[id].style.display = 'block';
      } else {
        document.querySelectorAll('#remove')[id].style.display = 'none';
      }
    }
addItems.addEventListener('click', addData);

function removeItem(id) {
    if(id > -1) {
        items.splice(id, 1); 
        // Apply the change
        localStorage.setItem('records', JSON.stringify(items));        
    }else {
        console.log('Name was not found')
    }
}

document.querySelector('#sort').addEventListener('click', ()=> {
    items.sort( (a, b)=> {
        return (a.item < b.item) ? -1: 0; 
    });
    // Save new data to the localstorage
    localStorage.setItem('records', JSON.stringify(items));   
    showData(); 
});

// localStorage.removeItem('records');



// let list = ['Tv stand','Banana'];
// function submit(){
//     let task = document.getElementById('add').value;
//     console.log(task);
//     list.push(task);
//     Read();
// };

// function Read(){
//     let data = '';
//     for(let i=0;i<list.length;i++)
//     {
//         data+= '<li>'+ list[i] +'</li>';
//     }
//     document.getElementById('results').innerHTML = data;
// }
// Read();

// function deleteall(item){
//     list.splice(item,1);
//     Read();
// }
