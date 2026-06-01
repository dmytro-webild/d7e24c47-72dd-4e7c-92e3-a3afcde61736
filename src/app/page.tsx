"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Heart, Users, ChefHat, GlassWater } from "lucide-react";

const assetMap = [
    {"id":"hero-restaurant-interior","url":"http://img.b2bpic.net/free-photo/dining-room-beige-color-tones-interior-design_114579-2225.jpg","alt":"luxurious restaurant interior fine dining"},
    {"id":"testimonial-avatar-1","url":"http://img.b2bpic.net/free-photo/portrait-male-chef-kitchen_23-2149646280.jpg","alt":"chef portrait smiling professional"},
    {"id":"testimonial-avatar-2","url":"http://img.b2bpic.net/free-photo/handshake-with-smiling-businessman_23-2147708181.jpg","alt":"woman smiling portrait elegant"},
    {"id":"testimonial-avatar-3","url":"http://img.b2bpic.net/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148135.jpg","alt":"man happy professional headshot"},
    {"id":"testimonial-avatar-4","url":"http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-cutting-onion_23-2149631686.jpg","alt":"female chef portrait kitchen"},
    {"id":"testimonial-avatar-5","url":"http://img.b2bpic.net/free-photo/close-up-portrait-senior-man_23-2149207225.jpg","alt":"senior man smiling portrait"},
    {"id":"testimonial-avatar-6","url":"http://img.b2bpic.net/free-photo/confident-beautiful-young-woman-portrait_23-2148148150.jpg","alt":"young woman smiling portrait"},
    {"id":"about-chef-cooking","url":"http://img.b2bpic.net/free-photo/professional-chef-preparing-food-kitchen_23-2149728031.jpg","alt":"gourmet chef preparing dish kitchen"},
    {"id":"feature-dining-experience","url":"http://img.b2bpic.net/free-photo/couple-having-dinner-restaurant_23-2148018852.jpg","alt":"couples fine dining romantic setting"},
    {"id":"feature-private-events","url":"http://img.b2bpic.net/free-photo/champagne-flutes-decorated-with-tiny-roses-stand-table_8353-611.jpg","alt":"private dining room luxury setup"},
    {"id":"feature-chefs-table","url":"http://img.b2bpic.net/free-photo/cooking-vlogger_23-2148161762.jpg","alt":"chef's table close up dish"},
    {"id":"product-dish-1","url":"http://img.b2bpic.net/free-photo/alfredo-fettuccine-with-mushroom-grated-parmesan-cherry-tomato_140725-6482.jpg","alt":"gourmet pasta dish plated artfully"},
    {"id":"product-dish-2","url":"http://img.b2bpic.net/free-photo/beef-steak-wooden-board_93675-129779.jpg","alt":"steak frites gourmet presentation"},
    {"id":"product-dish-3","url":"http://img.b2bpic.net/free-photo/front-view-delicious-chocolate-cake_23-2148549959.jpg","alt":"dessert chocolate lava cake"},
    {"id":"product-dish-4","url":"http://img.b2bpic.net/free-photo/dipping-soy-sauce_23-2148142529.jpg","alt":"fresh sushi platter artfully arranged"},
    {"id":"product-dish-5","url":"http://img.b2bpic.net/free-photo/homemade-chanterelle-stuffed-round-zucchini-plate_53876-101537.jpg","alt":"vegetarian curry bowl vibrant colors"},
    {"id":"product-dish-6","url":"http://img.b2bpic.net/free-photo/friends_23-2148014952.jpg","alt":"signature cocktail elegant glass"},
    {"id":"metric-award","url":"http://img.b2bpic.net/free-photo/plate-silhouette-tableware_23-2147694060.jpg","alt":"golden award trophy culinary"},
    {"id":"metric-chef","url":"http://img.b2bpic.net/free-photo/female-chef-carefully-pouring-sauce-dish_23-2148763167.jpg","alt":"smiling chef with arms crossed"},
    {"id":"metric-dining-table","url":"http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157774.jpg","alt":"elegant set dining table"},
    {"id":"metric-review-stars","url":"http://img.b2bpic.net/free-photo/top-view-arrangement-emotions_23-2148860285.jpg","alt":"five star rating review glowing"},
    {"id":"testimonial-img-1","url":"http://img.b2bpic.net/free-photo/front-view-serious-chef-posing_23-2148723257.jpg","alt":"chef smiling kitchen uniform"},
    {"id":"testimonial-img-2","url":"http://img.b2bpic.net/free-photo/having-lunch-spacious-restaurant_52683-117480.jpg","alt":"woman smiling dining restaurant"},
    {"id":"testimonial-img-3","url":"http://img.b2bpic.net/free-photo/excited-lady-holding-blue-idea-board-looking-camera-restaurant_114579-92458.jpg","alt":"man smiling suit formal"},
    {"id":"testimonial-img-4","url":"http://img.b2bpic.net/free-photo/woman-with-beer-eating-olives_23-2147680959.jpg","alt":"woman laughing dining experience"},
    {"id":"testimonial-img-5","url":"http://img.b2bpic.net/free-photo/senior-friends-having-wonderful-time-together_23-2149262200.jpg","alt":"older couple romantic dinner"},
    {"id":"testimonial-img-6","url":"http://img.b2bpic.net/free-photo/young-couple-celebrating-valentine-s-day-while-having-lunch-wine-together_23-2149216161.jpg","alt":"young couple romantic restaurant"},
    {"id":"footer-restaurant-exterior","url":"http://img.b2bpic.net/free-photo/lit-diner-place-city-night_23-2149001294.jpg","alt":"elegant restaurant entrance evening"}
];

const getAssetUrl = (id) => {
  const asset = assetMap.find((a) => a.id === id);
  return asset ? asset.url : null;
};

const getAssetAlt = (id, fallback) => {
  const asset = assetMap.find((a) => a.id === id);
  return asset && asset.alt ? asset.alt : fallback;
};

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="largeSmallSizeMediumTitles"
      background="grid"
      cardStyle="outline"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Takshashila House"
          navItems={[
            { name: "Home", id: "#home" },
            { name: "About Us", id: "#about" },
            { name: "Menu", id: "#menu" },
            { name: "Services", id: "#services" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "FAQ", id: "#faq" },
            { name: "Reservations", id: "#contact" }
          ]}
          bottomLeftText="Culinary Excellence"
          bottomRightText="reservations@takshashilahouse.com"
          button={{ text: "Book Now", href: "#contact" }}
        />
      </div>
      <div id="home" data-section="home">
        <HeroOverlayTestimonial
          title="Experience Exquisite Flavors at Takshashila House"
          description="Indulge in a culinary journey where authentic recipes meet modern innovation, crafted with passion and precision."
          testimonials={[
            { name: "Chef Rahul Sharma", handle: "@rahul_chef", testimonial: "Takshashila House is a true gem. Their dedication to flavor and presentation is unparalleled. A must-visit for any food enthusiast!", rating: 5, imageSrc: getAssetUrl("testimonial-avatar-1"), imageAlt: getAssetAlt("testimonial-avatar-1", "Chef Rahul Sharma") },
            { name: "Priya Singh", handle: "@priya.eats", testimonial: "An unforgettable dining experience! The ambiance, service, and especially the food, were absolutely perfect. Highly recommend their tasting menu.", rating: 5, imageSrc: getAssetUrl("testimonial-avatar-2"), imageAlt: getAssetAlt("testimonial-avatar-2", "Priya Singh") },
            { name: "Arjun Mehta", handle: "@arjun_critic", testimonial: "Simply spectacular. Takshashila House sets a new standard for fine dining. Every dish tells a story of culinary artistry.", rating: 5, imageSrc: getAssetUrl("testimonial-avatar-3"), imageAlt: getAssetAlt("testimonial-avatar-3", "Arjun Mehta") },
            { name: "Deepika Rao", handle: "@gourmet_gal", testimonial: "From the moment we stepped in, we were treated like royalty. The flavors were bold yet balanced, and the wine pairing was exquisite. 10/10!", rating: 5, imageSrc: getAssetUrl("testimonial-avatar-4"), imageAlt: getAssetAlt("testimonial-avatar-4", "Deepika Rao") },
            { name: "Anil Kumar", handle: "@foodie_anil", testimonial: "Consistently excellent. Takshashila House never disappoints. It's our go-to place for special occasions and a guaranteed delightful meal.", rating: 5, imageSrc: getAssetUrl("testimonial-avatar-5"), imageAlt: getAssetAlt("testimonial-avatar-5", "Anil Kumar") }
          ]}
          testimonialRotationInterval={5000}
          tag="Award-Winning Cuisine"
          buttons={[
            { text: "Make a Reservation", href: "#contact" },
            { text: "View Our Menu", href: "#menu" }
          ]}
          avatars={[
            { src: getAssetUrl("testimonial-avatar-1"), alt: getAssetAlt("testimonial-avatar-1", "Chef Rahul Sharma") },
            { src: getAssetUrl("testimonial-avatar-2"), alt: getAssetAlt("testimonial-avatar-2", "Priya Singh") },
            { src: getAssetUrl("testimonial-avatar-3"), alt: getAssetAlt("testimonial-avatar-3", "Arjun Mehta") },
            { src: getAssetUrl("testimonial-avatar-4"), alt: getAssetAlt("testimonial-avatar-4", "Deepika Rao") }
          ]}
          avatarText="Join our delighted guests"
          imageSrc={getAssetUrl("hero-restaurant-interior")}
          imageAlt={getAssetAlt("hero-restaurant-interior", "Elegant restaurant interior with fine dining setup")}
          showBlur={true}
          textPosition="bottom"
          useInvertedBackground={false}
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>
      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[{ type: "text", content: "Our Legacy of Culinary Excellence" }]
          }
          buttons={[
            { text: "Discover Our Story", href: "#about" }
          ]}
          useInvertedBackground={true}
          buttonAnimation="slide-up"
        />
      </div>
      <div id="services" data-section="services">
        <FeatureHoverPattern
          features={[
            { icon: Heart, title: "Unforgettable Dining", description: "Savor a curated menu of contemporary Indian cuisine, blending traditional flavors with innovative techniques for a truly unique experience." },
            { icon: Users, title: "Private Events & Catering", description: "Host your special occasions in our exquisite private dining spaces, or let us bring the Takshashila House experience to your chosen venue." },
            { icon: ChefHat, title: "Chef's Tasting Menu", description: "Embark on an epicurean adventure with our exclusive tasting menu, personally crafted by our Head Chef, paired with exquisite wines." },
            { icon: GlassWater, title: "Artisan Cocktails", description: "Our expert mixologists craft bespoke cocktails and mocktails, perfectly complementing your meal with fresh ingredients and creative flair." }
          ]}
          animationType="slide-up"
          title="Crafting Extraordinary Culinary Moments"
          description="At Takshashila House, we are dedicated to providing more than just a meal; we offer a journey through taste, aroma, and impeccable service."
          tag="Our Signature Experiences"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          tagAnimation="slide-up"
        />
      </div>
      <div id="menu" data-section="menu">
        <ProductCardFour
          products={[
            { id: "d1", name: "Saffron Infused Risotto", price: "$32", variant: "Main Course", imageSrc: getAssetUrl("product-dish-1"), imageAlt: getAssetAlt("product-dish-1", "Saffron Infused Risotto") },
            { id: "d2", name: "Pan-Seared Duck Breast", price: "$48", variant: "Main Course", imageSrc: getAssetUrl("product-dish-2"), imageAlt: getAssetAlt("product-dish-2", "Pan-Seared Duck Breast") },
            { id: "d3", name: "Chocolate Lava Indulgence", price: "$18", variant: "Dessert", imageSrc: getAssetUrl("product-dish-3"), imageAlt: getAssetAlt("product-dish-3", "Chocolate Lava Indulgence") },
            { id: "d4", name: "Artisan Sushi Platter", price: "$55", variant: "Appetizer", imageSrc: getAssetUrl("product-dish-4"), imageAlt: getAssetAlt("product-dish-4", "Artisan Sushi Platter") },
            { id: "d5", name: "Exotic Vegetable Biryani", price: "$28", variant: "Main Course", imageSrc: getAssetUrl("product-dish-5"), imageAlt: getAssetAlt("product-dish-5", "Exotic Vegetable Biryani") },
            { id: "d6", name: "Signature Crafted Cocktail", price: "$16", variant: "Beverage", imageSrc: getAssetUrl("product-dish-6"), imageAlt: getAssetAlt("product-dish-6", "Signature Crafted Cocktail") }
          ]}
          carouselMode="buttons"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          title="Our Signature Dishes"
          description="Discover a selection of our most celebrated culinary creations, meticulously crafted by our chefs with the finest ingredients."
          tag="Culinary Masterpieces"
          textboxLayout="default"
          useInvertedBackground={true}
          buttonAnimation="slide-up"
          tagAnimation="slide-up"
        />
      </div>
      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          metrics={[
            { id: "m1", value: "15+", title: "Years of Excellence", description: "Serving discerning palates with consistent quality and innovation since 2008.", imageSrc: getAssetUrl("metric-award"), imageAlt: getAssetAlt("metric-award", "Award trophy") },
            { id: "m2", value: "100%", title: "Customer Satisfaction", description: "Our commitment to impeccable service ensures every guest leaves with a smile and a desire to return.", imageSrc: getAssetUrl("metric-review-stars"), imageAlt: getAssetAlt("metric-review-stars", "Five star rating") },
            { id: "m3", value: "3+", title: "National Culinary Awards", description: "Recognized for our pioneering approach to fine dining and exceptional culinary artistry.", imageSrc: getAssetUrl("metric-chef"), imageAlt: getAssetAlt("metric-chef", "Chef portrait") },
            { id: "m4", value: "5000+", title: "Happy Diners", description: "Thousands of satisfied guests have experienced the unique charm and taste of Takshashila House.", imageSrc: getAssetUrl("metric-dining-table"), imageAlt: getAssetAlt("metric-dining-table", "Elegant dining table") }
          ]}
          animationType="slide-up"
          title="Our Culinary Journey & Achievements"
          description="Celebrating the milestones and accolades that underscore our unwavering dedication to gastronomic perfection and guest delight."
          tag="Driven by Passion"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          tagAnimation="slide-up"
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            { id: "t1", name: "Rajesh Kumar", imageSrc: getAssetUrl("testimonial-img-1"), imageAlt: getAssetAlt("testimonial-img-1", "Rajesh Kumar") },
            { id: "t2", name: "Smita Sharma", imageSrc: getAssetUrl("testimonial-img-2"), imageAlt: getAssetAlt("testimonial-img-2", "Smita Sharma") },
            { id: "t3", name: "Vikram Patel", imageSrc: getAssetUrl("testimonial-img-3"), imageAlt: getAssetAlt("testimonial-img-3", "Vikram Patel") },
            { id: "t4", name: "Ananya Gupta", imageSrc: getAssetUrl("testimonial-img-4"), imageAlt: getAssetAlt("testimonial-img-4", "Ananya Gupta") },
            { id: "t5", name: "Dr. Vijay Singh", imageSrc: getAssetUrl("testimonial-img-5"), imageAlt: getAssetAlt("testimonial-img-5", "Dr. Vijay Singh") },
            { id: "t6", name: "Sarah Khan", imageSrc: getAssetUrl("testimonial-img-6"), imageAlt: getAssetAlt("testimonial-img-6", "Sarah Khan") }
          ]}
          cardTitle="Our Guests Rave About Us"
          cardTag="Exceptional Dining Experiences"
          buttons={[
            { text: "Read More Reviews", href: "#testimonials" }
          ]}
          cardAnimation="slide-up"
          useInvertedBackground={true}
          buttonAnimation="slide-up"
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqBase
          faqs={[
            { id: "faq1", title: "Do you offer vegetarian and vegan options?", content: "Yes, our menu features a diverse selection of meticulously crafted vegetarian and vegan dishes. Please inform your server of any dietary preferences." },
            { id: "faq2", title: "How can I make a reservation?", content: "Reservations can be made directly through our website via the 'Make a Reservation' button, or by calling us at [Restaurant Phone Number]." },
            { id: "faq3", title: "Do you accommodate large groups or private events?", content: "Absolutely. Takshashila House offers private dining rooms and catering services for groups of various sizes. Please contact us for bespoke event planning." },
            { id: "faq4", title: "What is the dress code?", content: "We encourage smart casual attire to maintain the elegant ambiance of Takshashila House. Formal wear is always welcome." },
            { id: "faq5", title: "Is parking available?", content: "Yes, we offer valet parking services for our esteemed guests. Self-parking options are also available nearby." }
          ]}
          title="Frequently Asked Questions"
          description="Find quick answers to common queries about dining, reservations, and special requests at Takshashila House."
          tag="Your Questions Answered"
          buttons={[]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="smooth"
          showCard={true}
          buttonAnimation="slide-up"
          tagAnimation="slide-up"
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactText
          text="Ready for an Unforgettable Dining Experience? Book Your Table Now."
          animationType="entrance-slide"
          buttons={[
            { text: "Make a Reservation", href: "#contact" },
            { text: "Contact Us", href: "mailto:reservations@takshashilahouse.com" }
          ]}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc={getAssetUrl("footer-restaurant-exterior")}
          imageAlt={getAssetAlt("footer-restaurant-exterior", "Exterior view of Takshashila House Restaurant at night")}
          videoSrc=""
          logoText="Takshashila House"
          columns={[
            { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Our Story", href: "#about" }, { label: "Careers", href: "#" }] },
            { title: "Menu", items: [{ label: "Starters", href: "#menu" }, { label: "Main Courses", href: "#menu" }, { label: "Desserts", href: "#menu" }, { label: "Beverages", href: "#menu" }] },
            { title: "Help", items: [{ label: "FAQ", href: "#faq" }, { label: "Reservations", href: "#contact" }, { label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
          ]}
          copyrightText="© 2024 Takshashila House. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
