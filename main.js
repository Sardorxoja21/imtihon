let boshmassiv = [];


$.ajax({
    url: "http://myjson.dit.upm.es/api/bins/emgj",
    
    success: function (qiymat) {
        console.log(qiymat);
        boshmassiv = qiymat;
        Element1(boshmassiv)
    }
})

function Element1(asus) {
    $(".cardlar1").html("")
asus.map((v,i)=>{
    let card = `
    <div class="col-4">
    <div class="card mt-5">
       <p class="ps-3 pt-3 fs-4" id="like" onclick="like()"><i class="bi bi-heart"></i></p>
        <img class"cardimg shadow-lg ms-3" src="${v.img}" alt="">
        <a href="" class="link text-center mt-3">${v.name}</a>
        <div class="btn1 mt-3">
        <button class="korzinkastyle btn btn-primary" onclick="addTocard()" id="add">Korzina</button>
        </div>
    </div>
 </div>

    `
    $(".cardlar1").append(card)

    
})
}

let card =[];
const count=0
$("#add").on("click",()=>{
    ++count==1
    console.log(salom);
})

$("#searc").on("input",()=>{
    let yangimassiv = boshmassiv.filter(soz=>{
        return soz.name.toLowerCase().includes($("#searc").val().toLowerCase())
    })
    Element1(yangimassiv)
    console.log($("#searc").val());
})

function like() {
    $("#like").toogleClass("btn-light")
    $("#like").toogleClass("btn-danger")
}