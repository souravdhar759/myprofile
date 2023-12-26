function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


}


loco();

gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`1% top`,
        end:`bottom top`,
        scroller:`#main`
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }})
    gsap.to("#page",{
      scrollTrigger:{
          trigger:`#page`,
          start:`top top`,
          end:`bottom top`,
          scroller:`#main`,
          pin:true
      }
  })
  var tl=gsap.timeline({
    
  })
    

    // var tl=gsap.timeline({
    //     scrollTrigger:{
    //       trigger:`#page`,
    //       start:`top top`,
    //       scroller:`#main`,
    //       scrub:1,
    //       markers:true,
    //       pin:true
    //     }
    //     })
    //     tl.to("#page>h1",{
    //       top:`-50%`
    //   })
    let clip = document.querySelector(".vid")
    clip.addEventListener("mouseover", function (e) {
      clip.play();
   })
   clip.addEventListener("mouseout", function (e) {
    clip.pause();
 })