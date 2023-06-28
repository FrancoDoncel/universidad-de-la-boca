function hideOrShowPassword(){
    let password2,check;

    password2=document.getElementById("password2");
    check=document.getElementById("ver");

    if(check.checked==true) // Si la checkbox de mostrar contraseña está activada
    {
        password2.type = "text";
    }
    else // Si no está activada
    {
        password2.type = "password";
    }
}

// function holaAlumno(){
    
//     let nomre = document.getElementById("nombre").value;
//     h3 = document.getElementById("h3");
//     h3.innerHTML = "Hola " + nomre;
// }