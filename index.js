var giris = (name , password ) => {
    
   var name =  document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (document.getElementById("email").value == "") {
        alert("Email Alanı Boş Bırakılamaz");
        
    }
    if (document.getElementById("password").value == "") {
        alert("Şifre Alanı Boş Bırakılamaz");

    }
    if(name == "orhanseyran35@gmail.com" && password == 142536)
    {
        window.location.href = "index.html";
        localStorage.setItem("giris", "true");
    }

}
