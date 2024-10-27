// var tl = gsap.timeline(); // this will make boxes animate synchronously 1 by 1

// gsap.to("#box", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
//   rotate: 360,
//   borderRadius: "50%",
//   scale: 0.5,
// });

// // gsap.from('#box',{
// //   x: 1000,
// //   duration: 2,
// //   delay: 1,
// //   backgroundColor: 'blue',
// //   rotate: 360,
// //   borderRadius: '50%',
// //   scale: 0.5,
// // })

// gsap.from("h1", {
//   y: 50,
//   duration: 2,
//   delay: 1,
//   opacity: 0,
//   stagger: 1, // 1s delay between each h1
// });

// gsap.to("#circle", {
//   x: 1400,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
//   rotate: 360,
//   borderRadius: "10%",
//   repeat: 1,
//   yoyo: true,
// });

// tl.to("#box1", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
// });

// tl.to("#box2", {
//   x: 1000,
//   duration: 2,
//   rotate: 360,
// });

// tl.to("#box3", {
//   x: 1000,
//   duration: 2,
//   backgroundColor: "blue",
//   rotate: -360,
// });


gsap.to('#page1 #box', {
  scale: 0,
  rotation: 360,
  duration: 1,
  delay: 1,
})

gsap.to('#page2 #box', {
  scale: 0,
  rotation: 360,
  duration: 1,
  scrollTrigger: {  // this will trigger the animation when the element is in the viewport
    trigger: '#page2 #box',
    scroller: 'body', // this will make the animation work when the element is in the viewport
    markers: true, // this will show the markers in the viewport
    start: 'top 50%', // this will start the animation when the element is in the middle of the viewport
    scrub: 2, // this will make the animation smooth
    end: 'top 30%', // this will end the animation when the element is in the middle of the viewport
  }
})

gsap.to('#page3 #box', {
  x: 600,
  duration: 2,
  scrollTrigger: {
    trigger: '#page3 #box',
    scroller: 'body',
    markers: true,
    start: 'top 60%',
    scrub: 2, // animation will happen based on scroll
    end: 'top 30%',
    pin: true, // this will pin the element in the viewport
  }
})