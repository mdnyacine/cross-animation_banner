
var tl;

function initObjects() {
    tl = new TimelineLite({paused: true});

    tl
    .set('#car,#legal', {opacity:0})
    .set('#logo', {opacity:0})
    .set('#screen3,#screen2,#cta', {opacity:0, x: -400})
    .set('.bg-img', {y:10})
    .set('#screen1', {opacity:0, scale:0})
    .set('#container', {opacity:1, delay: .2})
    .to('#screen1', .5, {scale: 0.8, opacity:1, transformOrigin:'50% 50%', ease: Expo.easeOut})
    .to('#container_paint', .5, {opacity: 1})
    .to('#screen1', 4, {scale: 1, ease: Expo.easeOut}, 0.5)
    .from('#trait-mask-1', .5, {x:-300,y:-270, transformOrigin:'50% 50%', ease: Expo.easein}, 0.8)
    .from('#trait-mask-2', .5, {x:300,y:-270, transformOrigin:'50% 50%', ease: Expo.easein}, 1)

    .to('#logo', .5, {opacity: 1},1.7)
    .to('.bg-img', 1.2, {scale: 1.1, transformOrigin:'50% 50%', ease: Expo.easeOut},1.7)
    .to('#screen1', 1, {opacity: 0, ease: Expo.easeOut}, 1.7)
    .to('#trait-mask-1', 1, {scale:20, transformOrigin:'50% 50%', ease: Power4.easeIn},1.4)
    .to('#trait-mask-2', 1, {scale:20, transformOrigin:'50% 50%', ease: Power4.easeIn},1.4)
    .to('#trait-1', 1, {scale:20, transformOrigin:'50% 50%', ease: Power4.easeIn},1.4)
    .to('#trait-2', 1, {scale:20, transformOrigin:'50% 50%', ease: Power4.easeIn},1.4)

    .to('.bg-img', 1, {scale: 1, y:0, transformOrigin:'50% 50%', ease: Expo.easeOut},'-=1.8')
    .to('#screen2', 1, {x: 0, opacity:1, transformOrigin:'50% 50%', ease: Elastic.easeOut.config(1, 2)},'-=1.8')
    .to('#screen3', 1, {x: 0, opacity:1, transformOrigin:'50% 50%', ease: Elastic.easeOut.config(1, 2)}, '-=1')
    .to('#cta', 1, {x: 0, opacity:1, transformOrigin:'50% 50%', ease: Elastic.easeOut.config(1, 2)}, '-=0.5')
    .to('#legal', 1.3, {opacity: 1}, '-=.4')

}

function launch() {
  tl.play()
}
initObjects();
launch();
