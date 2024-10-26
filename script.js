var tl = gsap.timeline() // this will make boxes animate synchronously 1 by 1 

gsap.to('#box',{
    x: 1000,
    duration: 2,
    delay: 1,
    backgroundColor: 'blue',
    rotate: 360,
    borderRadius: '50%',
    scale: 0.5,
});

// gsap.from('#box',{
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   backgroundColor: 'blue',
//   rotate: 360,
//   borderRadius: '50%',
//   scale: 0.5,
// })

gsap.from('h1',{
  y: 50,
  duration: 2,
  delay: 1,
  opacity: 0,
  stagger: 1, // 1s delay between each h1
})

gsap.to('#circle', {  
  x: 1400,
  duration: 2,
  delay: 1,
  backgroundColor: 'blue',
  rotate: 360,
  borderRadius: '10%',
  repeat: 1,
  yoyo: true,

})


tl.to('#box1', {
  x: 1000,
  duration: 2,
  delay: 1,
})

tl.to('#box2', {
  x: 1000,
  duration: 2,
  rotate: 360,
})

tl.to('#box3', {
  x: 1000,
  duration: 2,
  backgroundColor: 'blue',
  rotate: -360,
})