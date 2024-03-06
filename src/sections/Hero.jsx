import { useState } from 'react';
import { motion } from 'framer-motion';
import { shoes } from '../constants';
import { bigShoe1, bigShoe2 } from '../assets/images';

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
    <section className="container pt-6 ss:pb-[60px] pb-8" id="hero">
      <div className="relative bg-[#F3F1F1] rounded-[40px]  ">
        <motion.div
          className="relative z-10 md:py-20 sm:py-16 xs:py-14 py-10 sm:px-14 px-6 h-[80vh] min-h-[700px]"
          variants={textVariants}
          initial="initial"
          animate="animate">
          <motion.p
            className="text-xl text-grey font-medium sm:mb-1  mb-2 uppercase"
            variants={textVariants}>
            New impressionism collection
          </motion.p>
          <motion.p
            className={`font-lucky md:text-[88px] ss:text-[72px] xs:text-[60px] text-[50px] leading-[1] sm:mb-5 mb-3 ${
              bigShoeImg === bigShoe2 ? 'text-accent' : 'text-[#C54425]'
            }
            `}
            variants={textVariants}>
            Artistry in Motion:
          </motion.p>
          <motion.h1
            className="sm:text-[44px] xs:text-4xl text-3xl leading-[1.2] font-medium text-primary uppercase max-w-[550px] w-full sm:mb-8 mb-4"
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
          width={850}
          height={500}
          className="absolute z-1 bottom-0 right-0 max-w-[850px] w-full object-contain"
        />

        <ul className="absolute z-20 flex items-center gap-3 sm:bottom-[5%]  bottom-[3%] left-[5%] right-[5%]">
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
