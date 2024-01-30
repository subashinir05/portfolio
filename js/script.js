const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('navtoggle','navmenu')
//active
const nav_Link=document.querySelectorAll('.navlink')
nav_Link.forEach(n => n.classList.remove('active'))

function linkAction(){
    nav_Link.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu=document.getElementById('navmenu')
    navMenu.classList.remove('show')
}
nav_Link.forEach(n => n.addEventListener('click',linkAction))