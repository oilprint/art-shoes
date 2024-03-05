import { useState } from 'react';
import { motion } from 'framer-motion';
import { shoes } from '../constants';
import { bigShoe1, bigShoe2 } from '../assets/images';
import { Favorite } from '../assets/icons';

const textVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className="container" id="hero">
      <div className="relative pt-6 ss:pb-[60px] pb-8">
        <motion.div
          className="absolute lg:top-[110px] top-[8%] sm:left-14 left-[5%] right-[5%]"
          variants={textVariants}
          initial="initial"
          animate="animate">
          <motion.p
            className="text-xl text-grey font-medium sm:mb-1  mb-2 uppercase"
            variants={textVariants}>
            New impressionism collection
          </motion.p>
          <motion.p
            className={`font-lucky ss:text-[88px] text-[60px]  leading-[1] mb-5 ${
              bigShoeImg === bigShoe2 ? 'text-accent' : 'text-[#C54425]'
            }
            `}
            variants={textVariants}>
            Artistry in Motion:
          </motion.p>
          <motion.h1
            className="sm:text-[44px] xs:text-4xl text-xl leading-[1.2] font-medium text-primary uppercase max-w-[550px] w-full mb-8"
            variants={textVariants}>
            Discover Our Inspired Sneaker Collection
          </motion.h1>
          <motion.a
            href="#catalog"
            className="inline-block cursor-pointer shrink-0 px-10 py-2 font-lucky text-base rounded-[40px] border-2  bg-accent text-light border-primary border-solid  hover:text-primary transition ease-in-out duration-300 "
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}>
            Buy Now
          </motion.a>
        </motion.div>
        <img
          src={bigShoeImg}
          alt="new collection"
          width={1200}
          height={720}
          className="object-cover rounded-[40px]"
        />

        <ul className="absolute  flex items-center gap-3 sm:bottom-[100px]  bottom-[8%] left-[5%] right-[5%]">
          {shoes.map((item, index) => (
            <li key={index}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                className={`cursor-pointer object-cover border-2 border-solid rounded-[20px] ${
                  bigShoeImg === item.bigShoe ? 'border-accent' : 'border-dark'
                } hover:border-accent transition ease-in-out duration-300`}
                onClick={() => setBigShoeImg(item.bigShoe)}
                src={item.thumbnail}
                alt="new collection"
                width={160}
                height={110}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
