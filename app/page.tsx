import React from "react";
import { ChevronRight, Truck, Shield, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const collections = [
    {
      id: 1,
      title: "Linen Collection",
      image:
        "/linen.jpg",
      description: "Natural elegance for your bedroom",
    },
    {
      id: 2,  
      title: "Cotton Deluxe",
      image:
        "/cotton_deluxe.webp",
      description: "Premium comfort every night",
    },
    {
      id: 3,
      title: "Silk Dreams",
      image:
        "/skill-dreams.jpg",
      description: "Luxurious softness",
    },
  ];

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Delivery",
      description: "On orders over $150",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100 Night Trial",
      description: "Sleep risk-free",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Certified materials",
    },
  ];

  const newArrivals = [
    {
      id: 1,
      name: "Monochrome",
      price: 749.99,
      image: "/bed1.jpg",
    },
    {
      id: 2,
      name: "Dual Cordonetto",
      price: 749.99,
      image:
        "/bed2.jpg",
    },
    {
      id: 3,
      name: "Ornament Abstraction",
      price: 849.99,
      image:
        "/quilts1.jpg",
    },
    {
      id: 4,
      name: "Bedspread Classic",
      price: 849.99,
      image:
        "/quilts2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] min-h-[500px] bg-zinc-900">
        <Image
          fill
          src="/home.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">
              Sleep in Luxury
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Discover our handcrafted bedding collections made from the finest
              natural materials
            </p>
            <Link href={"/catalog"} className="bg-white text-zinc-900 px-8 py-3 rounded hover:bg-[#be9b84] hover:text-white cursor-pointer transition-colors inline-flex items-center gap-2">
              Shop Collections
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-16 border-b border-zinc-200">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#c2a592]/10 text-[#c2a592] mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Our Collections</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Each collection is thoughtfully designed to bring comfort and
              elegance to your bedroom
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded mb-4">
                  <Image
                    width={1000}
                    height={1000}
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">{collection.title}</h3>
                <p className="text-sm text-zinc-600">
                  {collection.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-serif">New Arrivals</h2>
            <button className="text-sm flex items-center gap-2 hover:gap-3 transition-all">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded mb-3">
                  <Image
                    width={1000}
                    height={1000}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium mb-1">{product.name}</h3>
                <p className="text-sm text-zinc-600">from ${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 shadow-2xl mb-10 rounded-2xl">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Crafted with Care</h2>
              <p className="text-zinc-600 mb-4">
                Every piece in our collection is made with attention to detail
                and a commitment to quality. We source only the finest natural
                materials and work with skilled artisans to create bedding that
                transforms your sleep experience.
              </p>
              <p className="text-zinc-600 mb-6">
                Our mission is simple: to help you create a bedroom sanctuary
                where comfort meets elegance.
              </p>
              <button className="text-sm border border-zinc-900 px-6 py-3 rounded cursor-pointer   hover:bg-zinc-900 hover:text-white transition-colors">
                Learn More About Us
              </button>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
