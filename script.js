//your JS code here. If required.

let tBody = document.getElementById("output");
let tr = document.createElement('tr');
tr.id = "loading"
let td = document.createElement('td');
td.colSpan = "2";
td.innerText = "Loading..."
tr.appendChild(td);

tBody.appendChild(tr);

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, (Math.floor(Math.random()*3)+1) * 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, (Math.floor(Math.random()*3)+1) * 1000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, (Math.floor(Math.random()*3)+1) * 1000);
});
let p1t1 = new Date();
Promise.all([promise1,promise2,promise3]).then((r)=>{
  // [r1,r2,r3]
  tr.remove();
  console.log(r[0]);
  let p1t2 = new Date();
  let tr1 = document.createElement('tr');
  tr1.innerHTML = `<tr>
                        <td>${r[0]}</td>
                        <td>${p1t2-p1t1}<td>
                      </tr>`;
  tBody.appendChild(tr1);
  console.log(p1t2-p1t1);

  console.log(r[1]);
  let p2t2 = new Date();
  let tr2 = document.createElement('tr');
  tr2.innerHTML = `<tr>
                        <td>${r[1]}</td>
                        <td>${p2t2-p1t1}<td>
                      </tr>`;
  tBody.appendChild(tr2);
  console.log(p2t2-p1t1);
  
  console.log((r[2]));
  let p3t2 = new Date();
  let tr3 = document.createElement('tr');
  tr3.innerHTML = `<tr>
                        <td>${r[2]}</td>
                        <td>${p3t2-p1t1}<td>
                      </tr>`;
  tBody.appendChild(tr3);
  console.log(p3t2 - p1t1);

  let tr4 = document.createElement('tr');
  tr4.innerHTML = `<tr>
                        <td>Total</td>
                        <td>${p3t2-p1t1}<td>
                      </tr>`;
  tBody.appendChild(tr4);
});