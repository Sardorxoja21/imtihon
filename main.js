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
asus.map((v,i)=>{
    let card = `
    <div class="col-4">
    <div class="card mt-5">
        <img class"cardimg shadow-lg ms-3" src="${v.img}" alt="">
        <p></p>
        <a href="" class="link text-center mt-3">${v.name}</a>
        <div class="btn1 mt-3">
        <button class="korzinkastyle btn btn-primary">Korzina</button>
        </div>
    </div>
 </div>

    `
    $(".cardlar1").append(card)

    
})
}

$("#searc").on("input",()=>{
    let yangimassiv = boshmassiv.filter(soz=>{
        return soz.name.toLowerCase().includes($("#searc").val().toLowerCase())
    })
    Element1(yangimassiv)
    console.log($("#searc").val());
})