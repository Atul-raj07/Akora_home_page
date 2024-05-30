function loading(){
    var tl = gsap.timeline()
    tl.to(".loader",{
        transform:"translateX(-100%)",
        duration:.5,
           display:"none",
    })
    tl.from(".blink",{
        opacity :"0",
        delay:-0.5,
        transform:"translateX(100%)",
        duration:.4,
        rotationY:360,
        stagger:0.1
    })
    
}
loading()


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})
tl.to("#box1",{
    transform:"translateX(-100%)",
},"a")
// tl.to(".akaru",{
//     // width:0,
//     // x:"-100%",   
//     transform:"translateX(-100%)",
//     // opacity:0,
// },"a")
// tl.to("nav",{
//     // width:0,
//     // x:"-100%",   
//     transform:"translateX(-100%)",
//     // opacity:0,
// },"a")

tl.to("#box2",{
    width:"60%",  
    left:0  
},"a")

tl.to(".inner-box",{
    height:"50%"
},"a")
tl.to(".inner-box img",{
    scale:1
},"a")
tl.to(".imerge",{
    opacity:1
},"a")

tl.to("#box3",{
    width:"40%",
    right:0
},"a")
tl.to(".inner-box2",{
    height:"50%"
},"a")
tl.to(".inner-box2 img",{
    scale:1,
},"a")

tl.to("#box4",{
    width:0
},"a")

tl.to("#box2",{
    transform:"translateX(-100%)",
    
},"b")

tl.to("#box3",{
    right:"30%",
    width:"70%"
},"b")

tl.to("#box4",{
    width:"60%",
    right:"-30%"
},"b")

tl.to(".inner-box2",{
    height:"100%",
    bottom:"50%"
},"b")
tl.to(".inner-box2 img",{
    scale:1
},"b")
tl.to("#box3",{
    transform:"translateX(-100%)",

},"c")
tl.to("#box4",{
    right:"40%"
},"c")
tl.to(".inner-box3",{
    height:"100%",
    bottom:"50%"
},"c")
tl.to(".inner-box3 img",{
    scale:1
},"c")




const colors = ['#E49366', '#798E7B', '#B692A1', '#BFCCD8']; 

document.querySelectorAll('.nav-links a').forEach((link, index) => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    circle.style.backgroundColor = colors[index % colors.length];


    link.prepend(circle);

    link.addEventListener('mouseenter', () => {
        gsap.to(circle, { scale: 2.7, duration: 0.02 });
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(circle, { scale: .7, duration: 0.2 });
    });
});
gsap.from("#box2 .imerge", {
    y:"100%",
    stagger:0.05,
    opacity:0,
    scrollTrigger:{
        trigger:"#box2",
        scroller:"body",
        start : "top -10%",
        end:"top -20%",
        scrub:2,
        }
    });
gsap.from("#box3 .imerge", {
    opacity:0,
    display:"none",
    y:"100%",
    stagger:0.05,
    scrollTrigger:{
        trigger:"#box3",
        scroller:"body",
        start : "top -40%",
        end:"top -50%",
        scrub:2,
        }
    });
gsap.from("#box4 .imerge", {
    opacity:0,
    display:"none",
    y:"100%",
    stagger:0.05,
    scrollTrigger:{
        trigger:"#box4",
        scroller:"body",
        start : "top -80%",
        end:"top -90%",
        scrub:2,
        }
    });