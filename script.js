let lists = document.getElementsByClassName('list');

let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');

for( list of lists){
    list.addEventListener('dragstart', function(event){
        let selected = event.target;

        rightBox.addEventListener('dragover', (event)=>{
            event.preventDefault();
        })

        rightBox.addEventListener('drop', (event)=>{
            rightBox.appendChild(selected);
            selected = null;
        })

        leftBox.addEventListener('dragover', (event)=>{
            event.preventDefault();
        })

        leftBox.addEventListener('drop', (event)=>{
            leftBox.appendChild(selected);
            selected = null;
        })

        
    })
}