let login = document.querySelector(".logiN")
login.addEventListener("click", (e) => {
    e.preventDefault()
    let userName = document.querySelector(".usserName")
    let passWord = document.querySelector(".passWordd")
    fetch("https://northwind.vercel.app/api/suppliers").
        then((res) => res.json()).
        then((data) => {
            const check=data.find(element=>userName.value==element.contactName)
            if (check) {
                console.log("salam");
                window.location.href="http://127.0.0.1:5500/homepage.html"
            }
            else{
                alert("Istifadeci username-i tapilmadi.")
            }
//   axios.post("https://northwind.vercel.app/api/suppliers/", obj)
//         .then(response => {
//             console.log("Gonderildi:", response.data);
//             createCard(response.data); 
//         })
//         .catch(error => {
//             console.error("Error:", error);
//         });
        })
})
