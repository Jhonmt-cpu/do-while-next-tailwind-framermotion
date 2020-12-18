import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <motion.img
          src={imgSrc}
          className="w-full h-full"
          layoutId={layoutId}
        />
      </div>
    </Link>
  )
}

export default function Home() {
  const constraintsRef = useRef(null)
  return (
    <div>
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Construa sites modernos com agilidade sem precisar sair do HTML
      </motion.h1>

      <div className="mt-10 mb-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card
          href="/nextjs"
          imgSrc="/img/nextjs.svg"
          layoutId="nextjs-logo"
        />
        
        <Card
          href="/tailwind"
          imgSrc="/img/tailwind.svg"
          layoutId="tailwind-logo"
        />
        <Card
          href="/framermotion"
          imgSrc="/img/framermotion.svg"
          layoutId="framermotion-logo"
        />
      </div>
    </div>
  )
}
