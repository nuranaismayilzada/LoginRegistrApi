
let signUp=document.querySelector(".signUp")
let passwoRd=document.querySelector(".passwoRd")
let usernameRegistr=document.querySelector(".usernameRegistr")
signUp.addEventListener("click",(e)=>{
    e.preventDefault()
    let obj={}
    obj.companyName=usernameRegistr.value
    obj.postalCode=passwoRd.value
    console.log(obj);
    axios.post("https://northwind.vercel.app/api/suppliers/",obj)
        .then(response => {
            console.log("Gonderildi:", response.data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
        window.location.src="http://127.0.0.1:5500/homepage.html"
})
