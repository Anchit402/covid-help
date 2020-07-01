// const request = require('request');

const navlinks = document.querySelector('nav #nav-links');
const burger = document.getElementById('burger');
const newstitle = document.querySelector('#newsheading');
const newstitleload = document.querySelector('#news h2');
const navlink = document.querySelectorAll('nav #nav-links ul li a');
const url = 'https://cryptic-ravine-96718.herokuapp.com/';

burger.addEventListener('click', ()=>{
    navlinks.classList.toggle('fade');  
})

fetch(url).then((res)=>{
    return res.json();
}).then((data)=>{
    for(let i=0; i<data.news.length; i++)
        if(data.news[i].title.indexOf('vaccine') >= 0 || data.news[i].title.indexOf('Vaccine') >= 0 || data.news[i].title.indexOf('drug') >= 0 || data.news[i].title.indexOf('Drug') >= 0)
        {
            const newstitleno = document.createElement('li');
            const newslink = document.createElement('a');
            newslink.href = data.news[i].link;
            newslink.textContent = 'Read More';
            newstitleno.append(data.news[i].title);
            newstitleno.append(newslink);
            newstitle.append(newstitleno);
            
            console.log(newstitleno);
            console.log(newslink);
            
            newstitleload.remove('Loading...')
        }
})

navlinks.addEventListener('click', ()=>{
    navlinks.classList.toggle('fade');
})


const downloadl = document.querySelector('#helpline #downloadlink a');
downloadl.download = 'helpline.pdf';


