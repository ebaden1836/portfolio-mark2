'use strict'
{
    const profile =document.getElementById('profile')
    const skills =document.getElementById('skills')
    const service =document.getElementById('service')
    const works =document.getElementById('works')

    function Anime(e){
    e.animate([{opacity: '0'},{opacity:'1'}],2000);
    }
    Anime(policey);
    window.addEventListener('scroll',()=>{
        const y =document.documentElement.scrollTop || document.body.scrollTop;
    if(y > 100){
        profile.classList.add('active')
    }
    if(y > 800){
        skills.classList.add('active')
    }
    if(y > 1400){
        service.classList.add('active')
    }
    if(y > 1870){
        works.classList.add('active')
    }
});

// モーダルウィンドウの処理

const preview = document.getElementById('preview')
let images =[
    'img/airbnb.png',
    'img/isara.lifeの模写.png',
    'img/progate.png',
];
const img = document.querySelector('#preview>img');
const mask = document.getElementById('mask');




function showImage(select){
    img.src= images[select]
    if(select===0){
        img.style.width ='62%'
    } else if(select === 1){
        img.style.width ='30%'
    }else{
        img.style.width ='100%'
    }

}

let clicker = document.querySelectorAll('#workbox>img')
function get(){
    
}
for(let i = 0; i<clicker.length;i++){
    clicker[i].addEventListener('click',()=>{
        img.src= images[i]
        mask.classList.add('show');
        preview.classList.add('show');
        showImage(i)
    })
    }




const btn = document.querySelector('#mask> button');
function rmv(){
    mask.classList.remove('show');
    preview.classList.remove('show');
}

btn.addEventListener('click',()=>{
    rmv();
});



}