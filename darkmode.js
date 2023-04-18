function toggleDarkMode() {
    // احصل على جميع العناصر التي تحتاج إلى تغيير اللون
    var body = document.body;
    var header = document.getElementsByTagName('header')[0];
    var footer = document.getElementsByClassName('footer')[0];
    var form = document.getElementsByTagName('form')[0];
    let theme;
    // قم بتغيير الألوان
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    form.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode'))
    {
        theme="DARK";
    }
    else {
        theme="LIGHT";
    }



    localStorage.setItem('PageTheme',JSON.stringify(theme))
}



let Gettheme = JSON.parse(localStorage.getItem('PageTheme'))
console.log(Gettheme);
if(Gettheme=="DARK")
{
    document.body.classList = "dark-mode"
}