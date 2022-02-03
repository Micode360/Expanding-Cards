


const cards = document.querySelectorAll(".img-card");

 cards.forEach((item,id) => {
    item.addEventListener("click", function() {
        cards.forEach((item)=>{
            if(item.className.includes("card-width")){
                item.classList.remove("card-width");
                item.children[0].classList.remove("display");
            }

        });
        item.classList.add("card-width");
        item.children[0].classList.add("display");
    })
 })

