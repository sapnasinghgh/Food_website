function myFun() {
   let searchval = document.getElementById("inp").value.toUpperCase();
   let table = document.getElementsByTagName("table");
   let tr = document.getElementsByTagName("tr");
   let front = document.querySelector(".main");

   for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[0];
      let ct = tr[i].getElementsByTagName("ct")[0];

      if (td) {
         let text = td.innerText;
         if (text.toUpperCase().indexOf(searchval) > -1) {
            tr[i].style.display = "";
            front.style.display = "none";
         } else {
            tr[i].style.display = "none"
         }

      }

   }

   if (searchval == "") {
      front.style.display = "flex";
   }

   // console.log(searchval);
}


// login page icon js

function loginicn() {
   let p = document.getElementById("loginid");
   if (p.style.display === "block") {
      p.style.display = "none";
   } else {
      p.style.display = "block";
   }
}


// for bar icons


function vernav() {
   let d = document.getElementById("verticalnav");
   if (d.style.display === "block") {
      d.style.display = "none";
   } else {
      d.style.display = "block";
   }
}


// slide bar

let slides = document.querySelectorAll(".customer");
let count = 0;

slides.forEach(function (myslide, index) {
   myslide.style.left = `${index * 100}%`
})

function forslide() {
   slides.forEach(function (slideval) {
      slideval.style.transform = `translateX(-${count * 100}%)`
   })
}

setInterval(function () {
   count++;
   if (count == slides.length) {
      count = 0;
   }
   forslide();
}, 2000)


// form js

document.getElementById("contactForm").addEventListener("submit", function (event) {
   event.preventDefault();

const coname = document.getElementById("conname")
const conemail = document.getElementById("conemail")
const connumber = document.getElementById("connumber")
const conmsg = document.getElementById("conmessage")
         console.log(coname.value);
           console.log(conemail.value);
           console.log(connumber.value);
           console.log(conmsg.value);

            coname.value = ""
             conemail.value = ""
             connumber.value = ""
             conmsg.value = ""


   alert("Thank you, " + coname.value + "!  Your message has been sent");

});



  let eml = document.getElementById("myemail").value;
   let psw = document.getElementById("mypassword").value;
   let loginfm = document.getElementById("loginform")

   loginfm.addEventListener("click",()=>{
      console.log(eml+psw);
   })











// for the navbar active text color
let homesec = document.getElementById("homenav")
let foodsec = document.getElementById("foodnav");
let blogsec = document.getElementById("blognav");
let reviewsec = document.getElementById("reviewnav");
let contactsec = document.getElementById("contactnav");


foodsec.addEventListener("click", () => {
   foodsec.style.color = "rgb(255, 98 , 0)";
   blogsec.style.color = "white";
   reviewsec.style.color = "white";
   contactsec.style.color = "white";
   homesec.style.color = "white";

})

blogsec.addEventListener("click", () => {
   blogsec.style.color = "rgb(255, 98 , 0)";
   foodsec.style.color = "white";
   reviewsec.style.color = "white";
   contactsec.style.color = "white";
   homesec.style.color = "white";

})

reviewsec.addEventListener("click", () => {
   reviewsec.style.color = "rgb(255, 98 , 0)";
   blogsec.style.color = "white";
   foodsec.style.color = "white";
   contactsec.style.color = "white";
   homesec.style.color = "white";

})

contactsec.addEventListener("click", () => {
   contactsec.style.color = "rgb(255, 98 , 0)";
   blogsec.style.color = "white";
   reviewsec.style.color = "white";
   foodsec.style.color = "white";
   homesec.style.color = "white";

})





// get data login form

 const form = document.querySelector("form");
 const myemail = document.getElementById("myemail");
 const mypass = document.getElementById("mypassword");

 form.addEventListener("submit",function (e){
      
   e.preventDefault() 
   console.log(myemail.value);
   console.log(mypass.value);
    myemail.value =""
      mypass.value = ""
     

 })






// for order page 

const card = document.querySelectorAll(".card")
console.log(card);

card.forEach((carditem)=>{
    carditem.addEventListener("click", ()=>{
       console.log(carditem);
        
       document.querySelector("body").innerHTML = ""
       let domdiv = document.createElement("div")
       domdiv.classList.add("newdiv");
       domdiv.innerHTML =`
        <img src="${carditem.firstElementChild.src}" alt="">
          <div class="orderdeatails">
            <h1>Eat Best with Food Hub</h1>
            <h3>Price : $25.00 </h3>
            <h4>Exciting offer Upto 50% Off</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          <button>Buy Now</button>
          <button><a href="foodweb.html">Back</a></button>
          </div>
       `

       document.querySelector("body").appendChild(domdiv)
    })
})








