/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiUsers, FiAward, FiMapPin } from "react-icons/fi";

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRefs = useRef([]);
  const ctaRef = useRef(null);
  const imageRefs = useRef([]);
  const statRefs = useRef([]);
  const decorRef = useRef(null);
  const [activeTab, setActiveTab] = useState('heritage');

  // Stats counter animation function
  const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      obj.innerHTML = value;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Main heading animation with character split
    const headingText = headingRef.current.innerText;
    headingRef.current.innerHTML = '';

    [...headingText].forEach((char, index) => {
      const charSpan = document.createElement('span');
      charSpan.innerHTML = char === ' ' ? '&nbsp;' : char;
      charSpan.style.display = 'inline-block';
      charSpan.style.opacity = '0';
      charSpan.style.transform = 'translateY(50px) rotate(10deg)';
      headingRef.current.appendChild(charSpan);

      gsap.to(charSpan, {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        delay: 0.05 * index,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
    });

    // Subheading animation
    gsap.from(subheadingRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });

    // Paragraphs staggered animation
    gsap.from(paragraphRefs.current, {
      y: 30,
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

    // CTA button animation
    gsap.from(ctaRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      delay: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        toggleActions: "play none none none"
      }
    });

    // Images staggered reveal animation
    gsap.from(imageRefs.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    });

    // Stats counter animation
    gsap.from(statRefs.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: statRefs.current[0],
        start: "top 80%",
        onEnter: () => {
          // Animate counters when they come into view
          animateValue(document.getElementById('stat-years'), 0, 15, 2000);
          animateValue(document.getElementById('stat-artisans'), 0, 250, 2500);
          animateValue(document.getElementById('stat-locations'), 0, 12, 1500);
        },
        toggleActions: "play none none none"
      }
    });

    // Decorative element animation
    gsap.from(decorRef.current, {
      opacity: 0,
      width: 0,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    });

    // Parallax effect for images
    imageRefs.current.forEach((img, index) => {
      gsap.to(img, {
        y: index % 2 === 0 ? -30 : -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about w-full py-20 px-5 bg-neutral overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-neutral-dark/30 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-neutral-dark/30 to-transparent opacity-50"></div>

      <div className="container mx-auto">
        {/* Header section with title and decorative elements */}
        <div className="text-center mb-16 relative">
          <div className="w-20 h-1 bg-secondary mx-auto mb-6 animate-pulse"></div>
          <h2
            ref={headingRef}
            className="abouttxt uppercase text-5xl md:text-6xl text-primary mb-4 tracking-wide"
          >
            Our Heritage
          </h2>
          <p
            ref={subheadingRef}
            className="text-accent-light text-lg md:text-xl max-w-2xl mx-auto"
          >
            Celebrating India's rich cultural legacy through timeless fashion
          </p>

          {/* Decorative SVG pattern */}
          <svg
            ref={decorRef}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
            width="200"
            height="20"
            viewBox="0 0 200 20"
          >
            <path
              d="M0,10 C40,0 60,20 100,10 C140,0 160,20 200,10"
              stroke="#D4AF37"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left column with images */}
          <div className="md:col-span-5 space-y-6 relative">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-700">
              <img
                ref={el => imageRefs.current[0] = el}
                src="/images/saree3.webp"
                alt="Traditional Indian saree craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end">
                <p className="text-neutral p-4 text-sm font-medium">Handcrafted with precision and care</p>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg ml-12 transform hover:scale-105 transition-transform duration-700">
              <img
                ref={el => imageRefs.current[1] = el}
                src="/images/dress3.webp"
                alt="Artisan creating traditional embroidery"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end">
                <p className="text-neutral p-4 text-sm font-medium">Preserving traditional techniques</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-secondary/10 blur-2xl"></div>
          </div>

          {/* Right column with text content */}
          <div className="md:col-span-7 pl-0 md:pl-10">
            {/* Tabs for different content sections */}
            <div className="flex space-x-4 mb-6 border-b border-primary/20 pb-2">
              <button
                onClick={() => setActiveTab('heritage')}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-300 ${
                  activeTab === 'heritage'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-accent-light hover:text-primary'
                }`}
              >
                Our Heritage
              </button>
              <button
                onClick={() => setActiveTab('artisans')}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-300 ${
                  activeTab === 'artisans'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-accent-light hover:text-primary'
                }`}
              >
                Our Artisans
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-300 ${
                  activeTab === 'mission'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-accent-light hover:text-primary'
                }`}
              >
                Our Mission
              </button>
            </div>

            {/* Tab content */}
            <div className="tab-content">
              {activeTab === 'heritage' && (
                <div className="animate-fadeIn">
                  <p
                    ref={el => paragraphRefs.current[0] = el}
                    className="text-accent-light mb-4 leading-relaxed hover:text-primary transition-colors duration-300"
                  >
                    At Tabeer, we blend traditional craftsmanship with contemporary designs
                    to create ethnic wear that honors our cultural roots while embracing modern aesthetics.
                    Our collections are a celebration of India's rich textile heritage, featuring techniques
                    that have been perfected over centuries.
                  </p>
                  <p
                    ref={el => paragraphRefs.current[1] = el}
                    className="text-accent-light mb-6 leading-relaxed hover:text-primary transition-colors duration-300"
                  >
                    Each piece in our collection tells a story of India's diverse textile heritage,
                    handcrafted by skilled artisans using techniques passed down through generations.
                    From intricate embroidery to delicate weaving, every garment represents the pinnacle
                    of Indian craftsmanship.
                  </p>
                </div>
              )}

              {activeTab === 'artisans' && (
                <div className="animate-fadeIn">
                  <p className="text-accent-light mb-4 leading-relaxed">
                    Our network of over 250 skilled artisans across India forms the backbone of Tabeer.
                    These master craftspeople specialize in various traditional techniques including
                    zardozi embroidery, block printing, bandhani tie-dye, and handloom weaving.
                  </p>
                  <p className="text-accent-light mb-6 leading-relaxed">
                    We work directly with artisan communities, ensuring fair wages and sustainable
                    practices while preserving their invaluable skills. By creating a bridge between
                    these artisans and global markets, we help keep these ancient crafts alive for
                    future generations.
                  </p>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="animate-fadeIn">
                  <p className="text-accent-light mb-4 leading-relaxed">
                    Our mission at Tabeer is to celebrate and preserve India's rich textile heritage
                    while creating sustainable livelihoods for traditional artisans. We believe in
                    fashion that honors its origins and the hands that create it.
                  </p>
                  <p className="text-accent-light mb-6 leading-relaxed">
                    Through our work, we aim to introduce the world to the beauty of Indian craftsmanship,
                    creating garments that are not just beautiful but meaningful. Each Tabeer piece
                    represents our commitment to cultural preservation, artisan empowerment, and
                    sustainable fashion.
                  </p>
                </div>
              )}

              {/* Stats section */}
              <div className="grid grid-cols-3 gap-4 my-8">
                <div
                  ref={el => statRefs.current[0] = el}
                  className="text-center p-4 rounded-lg bg-neutral-dark/20 hover:bg-neutral-dark/40 transition-colors duration-300 transform hover:scale-105"
                >
                  <FiAward className="text-secondary text-2xl mx-auto mb-2" />
                  <span id="stat-years" className="block text-4xl font-bold text-primary">0</span>
                  <span className="text-accent-light text-sm">Years of Heritage</span>
                </div>

                <div
                  ref={el => statRefs.current[1] = el}
                  className="text-center p-4 rounded-lg bg-neutral-dark/20 hover:bg-neutral-dark/40 transition-colors duration-300 transform hover:scale-105"
                >
                  <FiUsers className="text-secondary text-2xl mx-auto mb-2" />
                  <span id="stat-artisans" className="block text-4xl font-bold text-primary">0</span>
                  <span className="text-accent-light text-sm">Skilled Artisans</span>
                </div>

                <div
                  ref={el => statRefs.current[2] = el}
                  className="text-center p-4 rounded-lg bg-neutral-dark/20 hover:bg-neutral-dark/40 transition-colors duration-300 transform hover:scale-105"
                >
                  <FiMapPin className="text-secondary text-2xl mx-auto mb-2" />
                  <span id="stat-locations" className="block text-4xl font-bold text-primary">0</span>
                  <span className="text-accent-light text-sm">Artisan Locations</span>
                </div>
              </div>

              {/* CTA button */}
              <button
                ref={ctaRef}
                className="group flex items-center gap-2 px-6 py-3 bg-primary text-neutral rounded-full hover:bg-primary-light transition-colors duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
              >
                <span>Discover Our Heritage</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
