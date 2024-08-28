var exit = () =>{
    localStorage.removeItem("giris")
    window.location.href="login.html"
}
if (localStorage.getItem("giris") == null) {
    window.location.href="login.html"
    
}