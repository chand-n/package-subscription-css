var backdrop=document.querySelector('.backdrop');
var modal= document.querySelector('.modal');
var mobileNav = document.querySelector('.mobile-nav');
var toggleButton = document.querySelector('.toggle-button');

var modalNoButton=document.querySelector('.modal__action--negative');
var selectPlanButtons= document.querySelectorAll('.plan button');

for(let i=0; i<selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', ()=>{
        // modal.style.display='block';
        // backdrop.style.display='block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

toggleButton.addEventListener('click', openSideNav);

function openSideNav(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
}

backdrop.addEventListener("click", ()=>{
    mobileNav.classList.remove('open');
    closeModal();
});
if(modalNoButton){
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal(){
    backdrop.classList.remove('open');
    if(modal){
    modal.classList.remove('open');
    }
}