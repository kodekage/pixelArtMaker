// Select color input
let color = document.getElementById('colorPicker');
// Select size input
const form = document.forms['sizePicker'];

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function makeGrid(e) {

    e.preventDefault();
    
    let pixelCanvas = document.getElementById('pixel_canvas');
    
    //Code for getting the user inputs for gridWidth and gridHeight
    let gridWidth = document.getElementById('input_width').value;
    let gridHeight = document.getElementById('input_height').value;
    
    //Condition for iterating the creation of tr and td elements.
    for (var i = 1; i <= gridWidth; i++) {
        let tr = document.createElement('tr');
        pixelCanvas.appendChild(tr);
    
        for (var j = 1; j <= gridHeight; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);

            // Adding the color to the created td
            td.addEventListener('click', function(e){
                e.target.style.background = color.value;
            });   
        }
    }    
});


