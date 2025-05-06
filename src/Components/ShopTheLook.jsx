import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPlus, FiX, FiShoppingBag } from 'react-icons/fi';

const looks = [
  {
    id: 1,
    title: "Wedding Guest Elegance",
    image: "/images/dress2.webp",
    items: [
      {
        id: 101,
        name: "Embroidered Anarkali Suit",
        price: 8999,
        position: { top: "25%", left: "30%" },
        image: "/images/anarkali.webp"
      },
      {
        id: 102,
        name: "Zari Work Dupatta",
        price: 2499,
        position: { top: "40%", left: "60%" },
        image: "/images/saree2.webp"
      },
      {
        id: 103,
        name: "Kundan Jewelry Set",
        price: 5999,
        position: { top: "20%", left: "70%" },
        image: "/images/dress3.webp"
      }
    ]
  },
  {
    id: 2,
    title: "Festive Season Ready",
    image: "/images/saree.webp",
    items: [
      {
        id: 201,
        name: "Banarasi Silk Saree",
        price: 12999,
        position: { top: "30%", left: "40%" },
        image: "/images/saree3.webp"
      },
      {
        id: 202,
        name: "Gold Plated Bangles",
        price: 3499,
        position: { top: "50%", left: "70%" },
        image: "/images/dress4.webp"
      },
      {
        id: 203,
        name: "Embroidered Clutch",
        price: 1999,
        position: { top: "70%", left: "30%" },
        image: "/images/trouser.webp"
      }
    ]
  }
];

const ShopTheLook = () => {
  const [activeLook, setActiveLook] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lookRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Look image animation
    gsap.from(lookRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  // Format price to Indian Rupees
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleItemClick = (itemId) => {
    if (activeItem === itemId) {
      setActiveItem(null);
    } else {
      setActiveItem(itemId);
    }
  };

  const currentLook = looks[activeLook];

  return (
    <div ref={sectionRef} className="w-full bg-neutral py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className="text-3xl md:text-4xl font-['Rozha_One'] text-primary mb-3">Shop The Look</h2>
          <p className="text-accent-light max-w-2xl mx-auto">
            Complete outfits curated by our stylists for your special occasions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 relative" ref={lookRef}>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              <img
                src={currentLook.image}
                alt={currentLook.title}
                className="w-full h-full object-cover"
              />

              {/* Hotspots */}
              {currentLook.items.map((item) => (
                <div
                  key={item.id}
                  className="absolute"
                  style={{ top: item.position.top, left: item.position.left }}
                >
                  <button
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeItem === item.id
                        ? 'bg-primary transform scale-110'
                        : 'bg-neutral/80 hover:bg-primary/80 animate-pulse'
                    }`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    {activeItem === item.id ? (
                      <FiX className="text-neutral" />
                    ) : (
                      <FiPlus className={`${activeItem === item.id ? 'text-neutral' : 'text-primary'}`} />
                    )}
                  </button>

                  {/* Item details popup */}
                  {activeItem === item.id && (
                    <div className="absolute z-10 w-64 bg-neutral shadow-lg rounded-lg overflow-hidden transform -translate-x-1/2 mt-2 animate-fadeIn">
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-primary font-medium mb-1">{item.name}</h4>
                        <p className="text-accent-light text-sm mb-3">{formatPrice(item.price)}</p>
                        <button className="w-full bg-primary text-neutral py-2 rounded-full text-sm flex items-center justify-center gap-2 hover:bg-primary-light transition-colors">
                          <FiShoppingBag />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Look title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-['Rozha_One'] text-neutral">{currentLook.title}</h3>
              </div>
            </div>

            {/* Look selector dots */}
            <div className="flex justify-center mt-4 gap-2">
              {looks.map((look, index) => (
                <button
                  key={look.id}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeLook === index ? 'bg-primary scale-125' : 'bg-neutral-dark'
                  }`}
                  onClick={() => {
                    setActiveLook(index);
                    setActiveItem(null);
                  }}
                  aria-label={`View ${look.title}`}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-neutral-dark p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-['Rozha_One'] text-primary mb-4">{currentLook.title}</h3>
              <p className="text-accent-light mb-6">
                Click on the + icons to explore individual pieces and create your perfect ensemble.
              </p>

              <div className="space-y-4">
                {currentLook.items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                      activeItem === item.id ? 'bg-primary/10' : 'hover:bg-neutral'
                    }`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-primary font-medium">{item.name}</h4>
                      <p className="text-accent-light text-sm">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="w-full bg-primary text-neutral py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary-light transition-colors">
                  <FiShoppingBag />
                  Shop Complete Look
                </button>
                <p className="text-center text-xs text-accent-light mt-2">
                  {formatPrice(currentLook.items.reduce((total, item) => total + item.price, 0))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopTheLook;
