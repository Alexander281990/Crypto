"use strict";

// const select = document.querySelector('select');
// const allLang = ['en', 'ru'];
// select.addEventListener('change', changeURLLanguage);
// function changeURLLanguage() {
//     let lang = select.value;
//     location.href = window.location.pathname + '#' + lang;
//     location.reload();
// }
// function changeLanguage() {
//     let hash = window.location.hash;
//     hash = hash.substring(1);
//     console.log(hash);
//     if(!allLang.includes(hash)) {
//         location.href = window.location.pathname + '#en';
//         location.reload();
//     }
//     select.value = hash;
//  // document.querySelector('title').innerHTML = langArr['join'][hash]; // for tag 'title';
//     for(let key in langArr) {
//         let elem = document.querySelector('.lng-' + key);
//         if(elem) {
//             elem.innerHTML = langArr[key][hash];
//         } 
//     }
// }
// changeLanguage();

const langRu = document.getElementById('lang_ru');
const langEn = document.getElementById('lang_en');
const langText = document.getElementById('launcher_text');
const allLang = ['en', 'ru'];
let lang = 'en';
langRu.addEventListener('click', changeLanguageRU);
langEn.addEventListener('click', changeLanguageEN);

function changeLanguageRU() {
    lang = 'ru';
    langText.textContent = "RU";
    location.href = window.location.pathname + '#' + lang;
    changeLanguage();
}

function changeLanguageEN() {
    lang = 'en';
    langText.textContent = "EN";
    location.href = window.location.pathname + '#' + lang;
    changeLanguage();
}

function changeLanguage() {
        let hash = window.location.hash;
        hash = hash.substring(1);
        //console.log(hash);
        if(!allLang.includes(hash)) {
            location.href = window.location.pathname + '#en';
            location.reload();
        }
        for(let key in langArr) {
            let elem = document.querySelector('.lng-' + key);
            if(elem) {
                elem.innerHTML = langArr[key][hash];
            } 
        }
    }

    changeLanguageEN();

    ///////////////////////////////////////////////
    const faqBtn = document.querySelectorAll('div.faq_list-item_btn');
    const faqInner = document.querySelectorAll('.faq_list-inner');
    
    for(let i = 0; i < faqBtn.length; i ++) {
        faqBtn[i].addEventListener('click', function() {
            for(let j = 0; j < faqInner.length; j ++) {
                if(i === j) {
                    faqInner[j].classList.toggle('faq_list-toggle');
                }
            }
        });
    }



    /////////////////////////////////////////////////
    const phone = document.getElementById('phone_video');
    const windowHeight = window.innerHeight;
    const video = document.getElementById('video');
    //const video = document.querySelector('.community_video-file');
    
    //console.dir(video);

    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        const phoneTop = phone.getBoundingClientRect().top + 300;
        //console.log(phoneTop);
        //console.log(windowHeight);
        if(phoneTop < windowHeight) {
            video.play();
        } else {
            video.pause();
        }
    }
