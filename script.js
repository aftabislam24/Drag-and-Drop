let lists = document.querySelectorAll(`.list`);
let leftBox = document.querySelector(`.left`);
let rightBox = document.querySelector(`.right`);
let notification = document.querySelector(`.notification`);

for(item of lists){
    item.addEventListener(`dragstart`,(e)=>{
        let selected = e.target;

        rightBox.addEventListener(`dragover`,(e)=>{
            e.preventDefault();
        });
        rightBox.addEventListener(`drop`,(e)=>{
            rightBox.appendChild(selected);
            selected= null;
            notification.style.display = `block`;
            setTimeout(()=>{
                notification.style.display = `none`;
            }, 1000)
        })
        leftBox.addEventListener(`dragover`,(e)=>{
            e.preventDefault();
        })
        leftBox.addEventListener(`drop`,(e)=>{
            leftBox.appendChild(selected);
            selected= null;
            notification.style.display = `block`;
            setTimeout(()=>{
                notification.style.display = `none`;
            }, 1000)
        })
    })
}