var totalPrice = 0

var btnAddToCart = document.querySelectorAll(".card a")

var cartCounter = document.querySelector("nav i small")

var counter = 0

var myList = document.getElementById("myList")


btnAddToCart.forEach(function (item) {
    item.onclick = function () {
        // Incriment of Cart Counter
        counter++;
        cartCounter.innerHTML = counter

        // Add Items to List
        var createItem = document.createElement("a")
        var newItem = myList.appendChild(createItem)
        newItem.setAttribute("class", "list-group-item list-group-item-action")
        newItem.innerHTML = item.name


        // check Empty 
        if (myList.textContent != "") {
            document.getElementById("fill").style = "display: block"
            document.getElementById("empty").style = "display: none"
        } else {
            document.getElementById("empty").style = "display: block"
            document.getElementById("fill").style = "display: none"
        }

        // Incriment of Total Cost
        totalPrice += parseInt(item.getAttribute("price"))
        document.getElementById("totalPrice").innerHTML = totalPrice
        console.log(totalPrice)

    }
})

// Reset to Default
function clear() {
    counter = 0;
    totalPrice = 0
    myList.textContent = ""
    document.getElementById("empty").style = "display: block"
    document.getElementById("fill").style = "display: none"
    cartCounter.innerHTML = counter
}


document.getElementById("clear").onclick = clear

document.getElementById("pay").onclick = function () {
    alert("Congratulations Sir You Have orderd with " + totalPrice + " LE succssfully")
    clear()
}