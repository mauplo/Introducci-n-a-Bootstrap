async function hola(){
    let param = "name="+ document.getElementById("nombre").value;
    let response = await fetch("/myfirstapp/asincrono?"+param);
    if (response.ok) {
        let texto = await response.text();
        alert(texto);
    } else {
        alert("Error en la solicitud HTTP ");
    }
}