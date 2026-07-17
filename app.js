'use strict';
const switcher = document.getElementById('theme-switcher');

if(switcher){
    switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const isDark = document.body.classList.contains('dark-theme');
    if(isDark) {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});
}