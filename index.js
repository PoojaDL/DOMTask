// document

console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

// Get element by id

console.log(document.getElementById("header-title"));
var headerTitle=document.getElementById("header-title");
console.log(headerTitle);
headerTitle.textContent="hello";
headerTitle.innerHTML="GoodBye";
headerTitle.innerHTML="<h4>Hello</h4>"

// Getting elements by tagname

var li=document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent='Hello';
li[1].style.fontWeight='bold';


// Query Selector

var header=document.querySelector('#main-header');
header.style.borderBottom="solid 4px black";


// Make the 3 rd element in the list have green background color
var items= document.getElementsByTagName('li');
items[2].style.background='green';

// Make all the elements in the list have bold color font
for(let i=0;i<items.length;i++){
  items[i].style.fontWeight='bold';
  items[i].style.color='red';
}

// Add a new li element without the same class Name

var item5=document.getElementsByClassName('item-5');
console.log(item5);

// And try editing it with getelementsbyclassname

var item5=document.getElementsByClassName('item-5');
console.log(item5);
item5[0].style.background='green';
item5[0].style.color='pink';
item5[0].style.fontWeight='bolder';

// and then by getelementbytagname

var item5=document.getElementsByTagName('li');
console.log(item5[4]);
item5[4].style.background='green';
item5[4].style.color='pink';
item5[4].style.fontWeight='bolder';

// Make the 2nd item have green background color
var item2=document.getElementsByClassName('list-group-item')[1];
console.log(item2);
item2.style.background='green';

// Make the 3rd item invisible
var item3=document.getElementsByClassName('list-group-item')[2];
console.log(item3);
item3.style.visibility='hidden';

// Using QuerySelectorALL change the font color to green for 2nd item in the item list
var item2=document.querySelectorAll('li')[1];
console.log(item2);
item2.style.background='green';

// Choose all the odd elements and make their background green using QuerySelectorALL﻿
var items=document.querySelectorAll('li');
for(let i=0;i<items.length;i++){
  if(i%2==0){
    items[i].style.background='green';
  }
}


