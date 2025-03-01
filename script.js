//your JS code here. If required.
let title=document.getElementById("title").value;
let author =document.getElementById("author").value;
let isbn=document.getElementById('isbn').value;
let addBook=document.getElementById("submit");
const list = document.getElementById('bookList');
let table=document.getElementById("myTable");
	
addBook.addEventListener('click',()=>{
	
    const row = document.creatceElement('tr');
	const td=document.createElement('td');
	const td1=document.createElement('td');
	const td2=document.createElement('td');
	const td3 =document.createElement('td');
	
	const deleteBtn=document.createElement('button');
	td3.appendChild(deleteBtn)
	deleteBtn.addEventListerner('click',()=>{
		list.remove('tr');
		
	})
	td.textContent=title.value;
	td1.textContent=author.value;
	td2.textContent=isbn.value;
	row.appendChild(td);
	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);
	list.appendChild(row);
	
	 
})
