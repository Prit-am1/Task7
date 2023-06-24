function details(){

    let obj = {
        Name : document.getElementById("name").value,
        EmailId : document.getElementById("email").value,
        PhoneNumber : document.getElementById("phone").value,
        Date : document.getElementById("call").value,
        Time : document.getElementById("time").value
    }
    localStorage.setItem("UserDetails",JSON.stringify(obj));
    document.getElementById("name").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("phone").value = " ";
    document.getElementById("call").value = " ";
    document.getElementById("time").value = " ";
}