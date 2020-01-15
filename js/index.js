// Your code goes here


// Click Event
const navBar = document.querySelector('.main-navigation');
navBar.addEventListener('click', () =>{
    navBar.style.background = 'papayawhip';
});
const containerHome = document.querySelector('.home');
containerHome.addEventListener('click', () =>{
    containerHome.style.background = 'white';
})
// Mouse Enter 
const logoHeading = document.querySelector('h1');
logoHeading.addEventListener('mouseenter', () =>{
    logoHeading.style.transform = "scale(1.5)";
    logoHeading.style.transition = "transform 1.5s";
})
// Mouse Leave Events
logoHeading.addEventListener('mouseleave', () =>{
    logoHeading.style.transform = 'scale(1)';
    logoHeading.style.transition = "transform 1.5s";
})

// Mouse Over Event 
const links = document.querySelectorAll('a');
links.forEach(elem =>{
    elem.addEventListener('mouseover', function(){
        elem.style.color='dodgerblue';
    });
})

// Mouse Out Event
links.forEach(elem =>{
    elem.addEventListener('mouseout', ()=>{
        elem.style.color = 'black';
    })
})

// Focus Event
// const images = document.querySelectorAll('img');
// images.forEach(elem =>{
//     elem.addEventListener('focus', (event) =>{
//         event.target.style.background = 'pink';
//     }, true);
// })

// images.forEach(elem =>{
//     elem.addEventListener('blur', (event) =>{
//         event.target.style.background = '';
//     }, true);
// })

// Double-click Event

containerHome.addEventListener('dblclick', () =>{
    containerHome.style.background = 'lightgrey';
})

navBar.addEventListener('dblclick', () =>{
    navBar.style.background = 'white';
});


// On load Event
window.onload = () =>{
    document.querySelector('#audio').play();
}

// Wheel Event
document.querySelectorAll(".text-content").forEach(elem =>{
    elem.addEventListener('wheel', ()=>{
        elem.style.background = 'red';
    })
})

// Keydown Event
// document.querySelectorAll("p").forEach(elem =>{
//     elem.addEventListener('keydown', ()=>{
//         elem.style.color = 'white';
//     })
// })

//Mouse Move Event
document.querySelectorAll("p").forEach(elem =>{
    elem.addEventListener('mousemove', ()=>{
        elem.style.color = 'purple';
    })
})

// context menu Event
const images = document.querySelectorAll('img');
images.forEach(elem =>{
    elem.addEventListener('contextmenu', (event)=>{
        event.preventDefault();
    })
})

// Prevent Default
links.forEach(elem =>{
    elem.addEventListener('click', (e) =>{
        e.preventDefault();
    });
})

// Propagation
const child = document.querySelector('h1');
child.addEventListener('click', (event)=>{
    child.style.color = 'green';
    event.stopPropagation();
})
