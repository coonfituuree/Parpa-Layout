import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return <div className="min-h-[70vh] bg-white">
    
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
              404 - Page Not Found
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Seems like the page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href={"./"} className="bg-white text-zinc-900 px-8 py-3 rounded hover:bg-[#be9b84] hover:text-white cursor-pointer transition-colors inline-flex items-center gap-2">
                Go Back Home
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
  </div>;
};

export default NotFound;
