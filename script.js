
const linkList = [{
  name : 'SSES',
  year : '2015',
  link : 'login.html'
},{
  name : 'SSES',
  year : '2016',
  link : 'login.html'
},{
  name : 'SSES',
  year : '2017',
  link : 'login.html'
},{
  name : 'SSES',
  year : '2018',
  link : 'login.html'
},{
  name : 'SSES',
  year : '2019',
  link : 'login.html'
},{
  name : 'SSES',
  year : '2020',
  link : 'login.html'
},{
  name : 'SSES',
  year : '2021',
  link : 'noyearbook.html'
},{
  name : 'SSES',
  year : '2022',
  link : 'noyearbook.html'
},{
  name : 'SSES',
  year : '2023',
  link : 'noyearbook.html'
},{
  name : 'ANHS',
  year : '2015',
  link : 'login.html'
},{
  name : 'ANHS',
  year : '2016',
  link : 'login.html'
},{
  name : 'ANHS',
  year : '2017',
  link : 'login.html'
  
},{
  name : 'ANHS',
  year : '2018',
  link : 'login.html'
},{
  name : 'ANHS',
  year : '2019',
  link : 'login.html'
},{
  name : 'ANHS',
  year : '2020',
  link : 'login.html'
},{
  name : 'ANHS',
  year : '2021',
  link : 'noyearbook.html'
},{
  name : 'ANHS',
  year : '2022',
  link : 'noyearbook.html'
},{
  name : 'ANHS',
  year : '2023',
  link : 'noyearbook.html'
},{
  name : 'AA',
  year : '2015',
  link : 'login.html'
},{
  name : 'AA',
  year : '2016',
  link : 'login.html'
},{
  name : 'AA',
  year : '2017',
  link : 'login.html'
},{
  name : 'AA',
  year : '2018',
  link : 'login.html'
},{
  name : 'AA',
  year : '2019',
  link : 'login.html'
},{
  name : 'AA',
  year : '2020',
  link : 'login.html'
},{
  name : 'AA',
  year : '2021',
  link : 'noyearbook.html'
},{
  name : 'AA',
  year : '2022',
  link : 'noyearbook.html'
},{
  name : 'AA',
  year : '2023',
  link : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2015',
  link : 'login.html'
},{
  name : 'NDA',
  year : '2016',
  link : 'login.html'
},{
  name : 'NDA',
  year : '2017',
  link : 'login.html'
},{
  name : 'NDA',
  year : '2018',
  link : 'login.html'
},{
  name : 'NDA',
  year : '2019',
  link : 'login.html'
},{
  name : 'NDA',
  year : '2020',
  link : 'login.html'
},{
  name : 'NDA',
  year : '2021',
  link : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2022',
  link : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2023',
  link : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2015',
  link : 'login.html'
},{
  name : 'ACC',
  year : '2016',
  link : 'login.html'
},{
  name : 'ACC',
  year : '2017',
  link : 'login.html'
},{
  name : 'ACC',
  year : '2018',
  link : 'login.html'
},{
  name : 'ACC',
  year : '2019',
  link : 'login.html'
},{
  name : 'ACC',
  year : '2020',
  link : 'login.html'
},{
  name : 'ACC',
  year : '2021',
  link : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2022',
  link : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2023',
  link : 'noyearbook.html'
}];


let html = "";
let addHtml = "";
let lists = [];
let display = document.querySelector('.result');

result()


function noPassword(names,years,links) {
  addHtml = `<div class="theResult">
    <div class="resultName">
      ${names}
    </div>
    <div class="resultyear">
      ${years}
    </div>
    <button onclick=" window.location.href = '${links}';"class="resultlink">
      Visit
    </button></div>`;
  html += addHtml;
  addHtml = '';

}

function result() {
  html = '';
  for (let i = 0; i < linkList.length; i++) {
    let names = linkList[i].name;
    let years = linkList[i].year;
    let links = linkList[i].link;
    noPassword(names,years,links);
    
  display.innerHTML = html;
  }
}

function search(Name,Year) {
  lists = [];
  html = "";
  if (Name === "" && Year === "") {
    result()
  }
  for (let i = 0; i < linkList.length; i++) {
    if (Name === linkList[i].name) {
      let names = linkList[i].name;
      let years = linkList[i].year;
      let links = linkList[i].link; 
      if (Name === linkList[i].name && Year === linkList[i].year) {
        noPassword(names,years,links);
      }else {
        lists.push({name : names, year : years, link : links});
      }
    }
  }
  for (let i = 0; i < lists.length; i++) {
    let names = lists[i].name;
    let years = lists[i].year;
    let links = lists[i].link; 
    noPassword(names,years,links);
  }
  display.innerHTML = html;
  
}

