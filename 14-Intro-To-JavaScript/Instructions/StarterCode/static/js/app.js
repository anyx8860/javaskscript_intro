// from data.js
var tableData = data;

console.log('we are totalling running app.js')
// YOUR CODE HERE!


function createtable(data){
    var tblbody = document.getElementsByTagName("tbody")[0];
    for(var i = 0; i < data.length; i++){
        var row = document.createElement("tr");
        
            var cell = document.createElement("th");
            var date = document.createTextNode(data[i].datetime);
            cell.appendChild(date)
            row.appendChild(cell)
            
            var city = document.createTextNode(data[i].city);
            var cell_city = document.createElement("th");
            cell_city.appendChild(city);
            row.appendChild(cell_city);

            var state = document.createTextNode(data[i].state);
            var cell_state = document.createElement("th");
            cell_state.appendChild(state);
            row.appendChild(state);
            
            var country = document.createTextNode(data[i].country);
            var cell_country = document.createElement("th");
            cell_country.appendChild(country);
            row.appendChild(cell_country);
            var shape = document.createTextNode(data[i].shape);
            var cell_shape = document.createElement("th");
            cell_shape.appendChild(shape);
            row.appendChild(cell_shape);
            var time = document.createTextNode(data[i].durationMinutes);
            var cell_time = document.createElement("th");
            cell_time.appendChild(time);
            row.append(cell_time);
            var com = document.createTextNode(data[i].comments);
            var cell_com = document.createElement("th");
            cell_com.appendChild(com);
            row.appendChild(cell_com);

            //cell.appendChild(date);
            //cell.appendChild(city);
            //cell.appendChild(state);
            //cell.appendChild(country);
            //cell.appendChild(shape);
            //cell.appendChild(time);
            //cell.appendChild(com);
            //row.appendChild(cell);

           // console.log('works')
        tblbody.appendChild(row);
    }
    //tbl.appendChild(tblbody);
    //body.appendChild(tbl);
    
}

createtable(data)

d3.select("#filter-btn").on("click", function(){
    d3.event.preventDefault();
    //d3.select("#ufo-table").find("tr:not(:first)").remove();
    d3.select('.my_marker').html("")
    /*
    for (var i = 0; i <= data.length -1 ; i++) {
        document.getElementById("ufo-table").deleteRow(1);
    }
    */
    var inputValue = d3.select("#datetime").property("value");
    if(inputValue == ""){
        createtable(data)
        return
    }
    console.log(`input value: ${inputValue}`)
    // var tblbody = document.getElementsByTagName("tbody")[0];
    var filtered_data = data.filter(function (x){
        return inputValue == x.datetime
    })
    createtable(filtered_data)
});


    /*
    for(var i = 0; i <= data.length - 1; i++){
        var row = document.createElement("tr");
        if(inputValue === data[i].datetime){
            var cell = document.createElement("th");
            var date = document.createTextNode(data[i].datetime);
            cell.appendChild(date)
            row.appendChild(cell)
            
            var city = document.createTextNode(data[i].city);
            var cell_city = document.createElement("th");
            cell_city.appendChild(city);
            row.appendChild(cell_city);

            var state = document.createTextNode(data[i].state);
            var cell_state = document.createElement("th");
            cell_state.appendChild(state);
            row.appendChild(state);
            
            var country = document.createTextNode(data[i].country);
            var cell_country = document.createElement("th");
            cell_country.appendChild(country);
            row.appendChild(cell_country);
            var shape = document.createTextNode(data[i].shape);
            var cell_shape = document.createElement("th");
            cell_shape.appendChild(shape);
            row.appendChild(cell_shape);
            var time = document.createTextNode(data[i].durationMinutes);
            var cell_time = document.createElement("th");
            cell_time.appendChild(time);
            row.append(cell_time);
            var com = document.createTextNode(data[i].comments);
            var cell_com = document.createElement("th");
            cell_com.appendChild(com);
            row.appendChild(cell_com);

            //cell.appendChild(date);
            //cell.appendChild(city);
            //cell.appendChild(state);
            //cell.appendChild(country);
            //cell.appendChild(shape);
            //cell.appendChild(time);
            //cell.appendChild(com);
            //row.appendChild(cell);

           // console.log('works')
        tblbody.appendChild(row);
        }
    }
    //tbl.appendChild(tblbody);
    //body.appendChild(tbl);
    */
