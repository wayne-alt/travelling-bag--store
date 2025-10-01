"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingBag,
  Star,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
} from "lucide-react";

export default function WayneTechBagsStore() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState<{ [key: number]: number }>({});
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: number }>({});
// state
const [activeSlides, setActiveSlides] = useState<{ [key: number]: number }>({});

// auto-slide effect (outside of map!)
useEffect(() => {
  const interval = setInterval(() => {
    setActiveSlides((prev) => {
      const updated: { [key: number]: number } = {};
      shoeProducts.forEach((p) => {
        const current = prev[p.id] || 0;
        updated[p.id] = (current + 1) % p.variants.length; // cycle through images
      });
      return { ...prev, ...updated };
    });
  }, 3000); // change every 3s

  return () => clearInterval(interval);
}, []);


const products = [
  { id: 1, name: "Classic Leather Tote", price: "3000 KSH", image: "travelling bag.jpg", rating: 5 },
  { id: 2, name: "Backpack", price: "3000 KSH", image: "/WhatsApp%20Image%202025-08-05%20at%2002.30.56_a2fecae9.jpg", rating: 5 },
  { id: 3, name: "Crossbody Messenger", price: "2500 KSH", image: "/black-crossbody-messenger-bag-luxury-leather.jpg", rating: 4 },
  { id: 4, name: "Designer Backpack", price: "2500 KSH", image: "/luxury-black-leather-backpack-designer-bag.jpg", rating: 5 },
  { id: 5, name: "Mini Shoulder Bag", price: "2200 KSH", image: "/small-black-shoulder-bag-luxury-mini-handbag.jpg", rating: 4 },
  { id: 6, name: "Travel Duffle", price: "3500 KSH", image: "/luxury-black-leather-duffle-travel-bag.jpg", rating: 5 },
  { id: 7, name: "Hidaya Backpack", price: "2800 KSH", image: "/medium_resized_1.jpg", rating: 5 },
  { id: 8, name: "Elsa Backpack", price: "2800 KSH", image: "/medium_resized_2.jpg", rating: 5 },
  { id: 9, name: "Ella Rose Backpack", price: "2800 KSH", image: "/medium_resized_3.jpg", rating: 4 },

  // 🔽 New Products (just update name + image + price if needed)
  { id: 10, name: "Pink backpack", price: "2999 KSH", image: "Pink backpack.jpg", rating: 5 },
  { id: 11, name: "Hala madrid backpack", price: "2999 KSH", image: "Hala madrid backpack.jpg", rating: 5 },
  { id: 12, name: "Bella backpack", price: "2999 KSH", image: "Bella backpack.jpg", rating: 4 },
  { id: 13, name: "Backpack", price: "2999 KSH", image: "Back pack.jpg", rating: 5 },
  { id: 14, name: "Laptop Backpack", price: "2800 KSH", image: "Laptop backpack.jpg", rating: 4 },
];


  const shoeProducts = [
    {
      id: 1,
      name: "Air Jordan J4 ",
      price: "4500 KSH",
      image: "/Air Jordan J4.jpg",
      rating: 5,
      variants: [
        {
          color: "All colours available",
          image: "/Air Jordan J4.jpg",
          description: "Best for outfits",
        },
        
      ],
    },
    {
      id: 2,
      name: "Casual",
      price: "4000 KSH",
      image: "casual.jpg",
      rating: 5,
      variants: [
        { 
          color: "Black", 
          image: "casual-black.jpg", 
          description: "Premium black leather",
          sizes: [39, 40, 41, 42, 43, 44, 45]
        },
        { 
          color: "brown", 
          image: "casual-brown.jpg", 
          description: "Stylish grey and white leather",
          sizes: [39, 40, 41, 42, 43, 44, 45]
        },
      ],
    },
    {
      id: 3,
      name: "zip boot",
      price: "4500 KSH",
      image: "zip boot.jpg",
      rating: 4,
      variants: [
        { 
          color: "Black", 
          image: "zip boot.jpg", 
          description: "Classic black patent leather" 
        },
        { 
          color: "White", 
          image: "zip.jpg", // <-- new image for white shoe
          description: "Versatile nude leather" 
        },
      ],
    },
    
    {
      id: 4,
      name: "Clarks men casual leather boots",
      price: "4200 KSH",
      image: "/clarks men casual leather boots.jpg",
      rating: 5,
      variants: [
        { 
          color: "Black", 
          image: "/clarks men casual leather boots.jpg", 
          description: "Classic black patent leather" 
        },
      ],
    }
    ,
    {
      id: 5,
      name: "Nike shoes",
      price: "4200 KSH",
      image: "/designer-boots.jpg",
      rating: 5,
      variants: [
        { color: "Black", image: "/designer-boots.jpg", description: "Sophisticated black leather" },
      ],
    }
    ,
    {
      id: 6,
      name: "nike shoes black",
      price: "4400 KSH",
      image: "nicky shoes black.jpg",
      rating: 4,
      variants: [
        { color: "Black", image: "nicky shoes black.jpg", description: "Versatile black straps" },
        { color: "Brown", image: "nicky shoes black.jpg", description: "Natural brown leather" },
      ],
    }, 
    {
      id: 7,
      name: "official shoes",
      price: "4200 KSH",
      image: "official shoes.jpg",
      rating: 4,
      variants: [
        { color: "Black", image: "official shoes.jpg", description: "Versatile black straps" },
        { color: "Brown", image: "official shoes.jpg", description: "Natural brown leather" },
      ],
    },
  ];

  const whatsappNumber = "+254705896016";

  const handleWhatsAppClick = (productName: string, price: string, size?: number) => {
    const message = size
      ? `Hi! I'm interested in the ${productName} (${price}), Size ${size}. Can you provide more details?`
      : `Hi! I'm interested in the ${productName} (${price}). Can you provide more details?`;
  
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  

  const handleVariantChange = (productId: number, variantIndex: number) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variantIndex }));
  };

  const getCurrentVariant = (product: any) => {
    const variantIndex = selectedVariants[product.id] || 0;
    return product.variants[variantIndex];
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-accent" />
              <span className="font-playfair text-2xl font-bold text-foreground">
                Prime Collection
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="#products" className="text-foreground hover:text-accent transition-colors">
                Bags
              </a>
              <a href="#shoes" className="text-foreground hover:text-accent transition-colors">
                Shoes
              </a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
              >
                Home
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
              >
                Bags
              </a>
              <a
                href="#shoes"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
              >
                Shoes
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/luxury-handbag-store-interior-black-and-gold-elega.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-balance">
            Luxury Redefined
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-pretty">
            Discover our exquisite collection of handcrafted bags and luxury footwear that blend
            timeless elegance with modern sophistication
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3 transition-all duration-300 hover:scale-105"
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now
          </Button>
        </div>
      </section>
      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Collection
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each piece in our collection is carefully selected for its exceptional quality and
              timeless appeal
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating ? "text-accent fill-current" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-card-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-accent mb-4">{product.price}</p>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                    onClick={() => handleWhatsAppClick(product.name, product.price)}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Buy Now on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Shoes Section */}
      <section id="shoes" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Luxury Footwear Collection
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Step into elegance with our curated collection of premium shoes that combine comfort,
              style, and exceptional craftsmanship
            </p>
            <p className="text-sm text-red-500 mt-2">
              Shoes Section - {shoeProducts.length} products loaded
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shoeProducts.map((product, index) => {
              // 👟 Auto-slide for each shoe
useEffect(() => {
  const interval = setInterval(() => {
    setSelectedVariants((prev) => {
      const updated = { ...prev };
      shoeProducts.forEach((p) => {
        const current = prev[p.id] || 0;
        const next = (current + 1) % p.variants.length; // cycle
        updated[p.id] = next;
      });
      return updated;
    });
  }, 3000); // change every 3s

  return () => clearInterval(interval);
}, []);

              const currentVariant = getCurrentVariant(product);
              // console.log('Rendering shoe product:', product.name, 'Variant:', currentVariant.color);
              return (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="relative w-full h-80 overflow-hidden rounded-lg">
  {product.variants.map((variant, idx) => (
    <img
      key={idx}
      src={variant.image}
      alt={`${product.name} - ${variant.color}`}
      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
        (activeSlides[product.id] || 0) === idx ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}

  {/* Slide controls (dots) */}
  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
    {product.variants.map((_, idx) => (
      <button
        key={idx}
        onClick={() =>
          setActiveSlides((prev) => ({ ...prev, [product.id]: idx }))
        }
        className={`w-3 h-3 rounded-full ${
          (activeSlides[product.id] || 0) === idx ? "bg-black" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</div>

                    <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600">
                      <div className="text-center">
                        <div className="text-6xl mb-4">👟</div>
                        <div className="text-lg font-semibold">{product.name}</div>
                        <div className="text-sm text-gray-500">{currentVariant.color}</div>
                        <div className="text-xs text-gray-400 mt-2">{currentVariant.description}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating ? "text-accent fill-current" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-card-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{currentVariant.color}</p>
                    <p className="text-xs text-muted-foreground mb-3">{currentVariant.description}</p>
                    <p className="text-2xl font-bold text-accent mb-4">{product.price}</p>
                    {/* Color Variants */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-card-foreground mb-2">Available Colors:</p>
                      <div className="flex gap-2 flex-wrap">
                        {product.variants.map((variant: any, variantIndex: number) => (
                          <Button
                            key={variantIndex}
                            variant={selectedVariants[product.id] === variantIndex ? "default" : "outline"}
                            size="sm"
                            className="text-xs"
                            onClick={() => handleVariantChange(product.id, variantIndex)}
                          >
                            {variant.color}
                          </Button>
                        ))}
                      </div>
                    </div>
                    {/* Shoe Sizes */}
{currentVariant.sizes && (
  <div className="mb-4">
    <p className="text-sm font-medium text-card-foreground mb-2">Available Sizes:</p>
    <div className="flex gap-2 flex-wrap">
      {currentVariant.sizes.map((size: number) => (
        <Button
          key={size}
          variant={selectedSizes[product.id] === size ? "default" : "outline"}
          size="sm"
          className="text-xs"
          onClick={() =>
            setSelectedSizes((prev) => ({ ...prev, [product.id]: size }))
          }
        >
          {size}
        </Button>
      ))}
    </div>
  </div>
)}

<Button
  className="w-full bg-green-500 hover:bg-green-600 text-white"
  onClick={() =>
    handleWhatsAppClick(
      product.name,
      product.price,
      selectedSizes[product.id] // ✅ send size too
    )
  }
>
  Buy Now on WhatsApp
</Button>

                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-xl leading-relaxed mb-6">
              Founded with a passion for exceptional craftsmanship, Prime Collection represents the
              pinnacle of luxury accessories. Our journey began with a simple belief: that every
              person deserves to carry and wear pieces of art that reflect their unique style and
              sophistication.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Each bag and shoe in our collection is meticulously crafted by skilled artisans using
              only the finest materials sourced from around the world. From premium Italian leather
              to hand-selected hardware, every detail is considered to ensure lasting beauty and
              functionality.
            </p>
            <p className="text-xl leading-relaxed">
              We believe that luxury is not just about owning beautiful things, but about the
              confidence and joy that comes from carrying something truly special. This philosophy
              drives everything we do, from design to customer service.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section (updated) */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have questions about our products or need styling advice? We're here to help you find the
            perfect dream bag — just reach out and let’s make your dream bag a reality.We are Located in Kenya-Nairobi in Jericho Market just opposite Metropolitan Hospital.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <Phone className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">WhatsApp</h3>
              <a
                href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                {whatsappNumber}
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <Mail className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:wayneway743@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                wayneway743@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <ShoppingBag className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Showroom</h3>
              <p className="text-muted-foreground">By Appointment Only</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-8 w-8" />
            </a>
            <a
              href="mailto:wayneway743@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-8 w-8" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="h-8 w-8 text-accent" />
                <span className="font-playfair text-2xl font-bold">Prime Collection</span>
              </div>
              <p className="text-primary-foreground/80 max-w-md">
                Crafting luxury handbags and footwear that embody elegance, quality, and timeless
                style. Each piece tells a story of exceptional craftsmanship.
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Bags
                  </a>
                </li>
                <li>
                  <a
                    href="#shoes"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Shoes
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Size Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Care Instructions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}