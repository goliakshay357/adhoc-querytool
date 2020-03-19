got_database = {}
table_selected = []
got_columns = []

let button = document.getElementById("button");
button.style.display="none"

function database1(){
  console.log("Database 1 is selected!!");
  
  // get http call
  got_database = {
    table: ["table1","table2","table3"]
  }
  
  var tables = document.getElementById("tables");
  for(let i=0; i<got_database.table.length;i++){
    console.log(got_database.table[i]);
    
    let p = document.createElement('p')
    let input123 = document.createElement('input')
    input123.setAttribute("type","checkbox")
    input123.setAttribute("id",got_database.table[i])
    input123.setAttribute("onclick","table()")
 
    p.textContent = got_database.table[i]
    p.appendChild(input123)
    tables.appendChild(p)
  }
  // console.log(table.length);  
}

function database2() {
  
  console.log("Database 2 is selected!!");
  
  // get http call
  got_database = {
    table: ["table1","table2","table3"]
  }

}


// Getting tables 
function table() {


  for(let i=0;i<got_database.table.length;i++){
    var table_id = document.getElementById(got_database.table[i])


    if(table_id.checked == true){
      // console.log(got_database.table[i] + " is Selected!!");
      if(!table_selected.includes(got_database.table[i])){
        table_selected.push(got_database.table[i])
        // console.log(table_selected);
      }
    } else{
      table_selected = table_selected.filter(e => e !== got_database.table[i])
      // console.log(table_selected);
    }
  }
  // console.log("Selected table 1");
  console.log("tables selected!!",table_selected.length); 
    // showing button
  if(table_selected.length){
      button.style.display = "block";
    } else{
      button.style.display = "none";
    }
}



