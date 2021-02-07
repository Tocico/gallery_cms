import { TimelineLite, Power3, gsap, TweenMax } from "gsap";

//open menu
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    width: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1
    }
  });
};

//close menu
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    width: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2
    }
  });
};

// links appear
export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    y: 100,
    duration: 0.8,
    delay: 0.1,
    opacity: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2
    }
  });
};

// Fade up for the hero part
export const fadeInUp = (node) => {
  let tl = new TimelineLite({ delay: 0.5 })
      //content vars
      const headlineFirst = node.children[0].children[0]
      const headlineSecond = headlineFirst.nextSibling
      const headlineThird = headlineSecond.nextSibling
      const contentP = node.children[1];
      const name = node.children[2];
    tl.staggerFrom([headlineFirst.children,headlineSecond.children,headlineThird.children ], 1, {
        y: 44,
        ease: Power3.easeOut,
        delay: 1
      }, .15 )
      .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
      .from(name, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
};

export const overlayAnimation = (node) => {
  const first = node.children[0]
  const second = first.nextSibling
  const third = second.nextSibling

 TweenMax.to(first, 1.5, {
    delay: .5,
    right: '-100%',
    ease: Power3.easeInOut
  })
  TweenMax.to(second, 1.5, {
    delay: .7,
    right: '-100%',
    ease: Power3.easeInOut
  })
  TweenMax.to(third, 1.5, {
    delay: .9,
    right: '-100%',
    ease: Power3.easeInOut
  })

}
