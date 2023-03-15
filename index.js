// // document
//
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
//
// // Get element by id
//
// console.log(document.getElementById("header-title"));
// var headerTitle=document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent="hello";
// headerTitle.innerHTML="GoodBye";
// headerTitle.innerHTML="<h4>Hello</h4>"
//
// // Getting elements by tagname
//
// var li=document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello';
// li[1].style.fontWeight='bold';
//
//
// // Query Selector
//
// var header=document.querySelector('#main-header');
// header.style.borderBottom="solid 4px black";


// Make the 3 rd element in the list have green background color
var items= document.getElementsByTagName('li');
items[2].style.background='green';

// Make all the elements in the list have bold color font
for(let i=0;i<items.length;i++){
  items[i].style.fontWeight='bold';
  items[i].style.color='red';
}
