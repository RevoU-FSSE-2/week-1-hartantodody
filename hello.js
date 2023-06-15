function guestName(){
    var name = document.forms["input-name"]["nickname"].value;

    if (name == ""){
        alert("Please type your name first inside the text field! :D");
        return false;
    }
    // NOTE: HAPUS COMMENT LINE 9-10 KALAU MAU BUAT MASUK KE P HELLO DI LINE 37 INDEX.HTML
    // document.getElementById("guest-nickname").innerText = name;
    // return false;

    // COMMENT DI BAWAH KALAU MAU AKTIFIN FUNGSI DI LINE 9-10, BEGITUPUN JUGA SEBALIKNYA
    alert("Hello " + name + ", Welcome to my page!! XD");
}