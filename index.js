let doc_title = document.title;
window.addEventListener("blur",()=>{
    document.title = "Come back soon 😉 i am waiting";
});

window.addEventListener("focus",()=>{
    document.title = doc_title;
});
// let p = document.getElementById("p");
// let innert = parseInt(p.innerHTML);

let incre =()=>{
    
    // console.log(innert);
    innert ++;
    console.log(innert);
    p.innerHTML = innert;
} ;

let products = [
    { name: "Liril", quantity: 10, sales: 7, price: 10 },
    { name: "Dove", quantity: 20, sales: 9, price: 20 },
    { name: "Pears", quantity: 35, sales: 20, price: 15 },
    { name: "Surf", quantity: 45, sales: 22, price: 55 },
    { name: "Ariel", quantity: 20, sales: 7, price: 40 },
    { name: "Tide", quantity: 20, sales: 11, price: 35 },
    { name: "Nirma", quantity: 30, sales: 21, price: 20 },
  ];

  let products2 = [
    { name: "Liril", quantity: 10, sales: 7, price: 10 },
    { name: "Dove", quantity: 20, sales: 9, price: 20 },
    { name: "Pears", quantity: 35, sales: 20, price: 15 },
    { name: "Surf", quantity: 45, sales: 22, price: 55 },
    { name: "Ariel", quantity: 20, sales: 7, price: 40 },
    { name: "Tide", quantity: 20, sales: 11, price: 35 },
    { name: "Nirma", quantity: 30, sales: 21, price: 20 },
  ];

  
  let table_data = (arr)=>{
    
    let header = `<tr> <th>NAME</th> <th>STOCK</th> <th>SALES</th> <th>PRICE</th> <th>VALUE</th> </tr>`;
    let tb_data = arr.map((elem)=>{
      let str = `<tr> <td>${elem.name}</td> <td>${elem.quantity}</td> <td>${elem.sales}</td> <td>${elem.price}</td> <td>${elem.price * elem.quantity}</td> </tr>`;
      return str;
    });

    tb_data.sort((a,b)=>{
      return a.price * a.quantity - b.price * b.quantity;
    });
    

    let final_data = `<table>${header} ${tb_data.join("")}</table>`;
    return   [header,final_data];
  };

  console.log(table_data(products));
  let show_data = document.getElementById("show_data");
    show_data.addEventListener("click",()=>{
    let show = document.getElementById("show");
    show.className = "hi";
    show.innerHTML = ` ${table_data(products)[1]}`;
  });

  let sort_by_value = document.getElementById("sort_by_value");
  sort_by_value.addEventListener("click",()=>{
    let show = document.getElementById("show");
    let header = `<tr> <th>NAME</th> <th>STOCK</th> <th>PRICE</th> <th>VALUE</th> </tr>`;

    let new_arr = products.map((elem)=>{
      let json = {name : elem.name, stock : elem.quantity, price : elem.price, value : elem.quantity * elem.price};
      return json;
    });

    new_arr.sort((a,b)=>{
      return a.value - b.value;
    });

    let table_body = new_arr.map((elem)=>{
      let str = `<tr> <td>${elem.name}</td> <td>${elem.stock}</td>  <td>${elem.price}</td> <td>${elem.value}</td></tr>`;
      return str;
    });

    let final_data = `<table>${header} ${table_body}</table>`;
    show.innerHTML = final_data;
  });

  
  for(let i = 0; i<9; i++){
    let check = document.getElementById("check");
    let str = `<li>i am a Billionare</li>`;
    // str+= 
    check.innerHTML += str;
  };

  let cl = document.getElementsByClassName("c");
  console.log(cl[2]);