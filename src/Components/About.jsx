/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRefs = useRef([]);
  const ctaRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading animation
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });

    // Paragraphs staggered animation
    gsap.from(paragraphRefs.current, {
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    });

    // CTA animation
    gsap.from(ctaRef.current, {
      width: 0,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        toggleActions: "play none none none"
      }
    });

    // Text reveal animation for heading
    const splitText = headingRef.current.innerText.split(' ');
    headingRef.current.innerHTML = '';

    splitText.forEach((word, index) => {
      const wordSpan = document.createElement('span');
      wordSpan.innerHTML = word + (index < splitText.length - 1 ? ' ' : '');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.overflow = 'hidden';

      const innerSpan = document.createElement('span');
      innerSpan.innerHTML = word + (index < splitText.length - 1 ? ' ' : '');
      innerSpan.style.display = 'inline-block';
      innerSpan.style.transform = 'translateY(100%)';
      innerSpan.style.opacity = '0';

      wordSpan.appendChild(innerSpan);
      headingRef.current.appendChild(wordSpan);

      gsap.to(innerSpan, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.1 * index,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
    });

    // Parallax effect
    gsap.to(headingRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(paragraphRefs.current, {
      y: -20,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="about w-full mt-16 flex h-[45vh] px-5 bg-neutral overflow-hidden"
      >
        <div className="left w-9/12 pr-40 pt-7">
          <h1
            ref={headingRef}
            className="abouttxt uppercase text-5xl text-primary"
          >
            Celebrating India's rich heritage through timeless fashion.
          </h1>
        </div>
        <div className="right w-[40%] pl-7 flex flex-col justify-around">
          <p
            ref={el => paragraphRefs.current[0] = el}
            className="pr-24 text-accent-light hover:text-primary transition-colors duration-300"
          >
            At Tabeer, we blend traditional craftsmanship with contemporary designs
            to create ethnic wear that honors our cultural roots while embracing modern aesthetics.
          </p>
          <p
            ref={el => paragraphRefs.current[1] = el}
            className="pr-[7.4rem] text-accent-light hover:text-primary transition-colors duration-300"
          >
            Each piece in our collection tells a story of India's diverse textile heritage,
            handcrafted by skilled artisans using techniques passed down through generations.
          </p>
          <div className="overflow-hidden">
            <h5
              ref={ctaRef}
              className="uppercase font-mono text-[12px] mr-[19rem] pb-2 border-b-[1px] border-primary text-primary cursor-pointer hover:text-accent hover:border-accent transition-colors duration-300 group relative"
            >
              Discover Our Heritage
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500"></span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
