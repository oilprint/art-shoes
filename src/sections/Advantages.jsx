import { motion } from 'framer-motion';
import { advantagesList } from '../constants';
import { collDali } from '../assets/images';

const Advantages = () => {
  return (
    <section className="container sm:mb-20 mb-12">
      <div className=" py-[60px]  bg-[#F7F7F6] rounded-[40px] border border-solid border-primary  ">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
              delay: 0.2,
            },
          }}
          className="block font-lucky  lg:text-[76px] ss:text-[60px] text-[50px] text-[#FC7B43] text-center leading-[0.8] mb-10 ">
          <span className="text-stroke ss:text-[136px] lg:text-[110px] xs:text-[90px] text-[60px] text-[#F7F7F6] text-right">
            Why
          </span>
          our sneakers
        </motion.h2>
        <div className="flex flex-1 justify-between items-center gap-4 md:pl-[56px] px-4 md:flex-row flex-col">
          <ul className="flex flex-col md:gap-12 gap-5 max-w-[550px] w-full ">
            {advantagesList.map((item) => (
              <li key={item.id} className="flex gap-6 items-start">
                <span className="font-lucky sm:text-[56px] text-5xl leading-[1.3] text-grey">
                  {item.number}
                </span>
                <div>
                  <h3 className=" sm:text-3xl text-2xl text-primary font-bold sm:mb-3 mb-1 ">
                    {item.title}
                  </h3>
                  <p className="text-grey text-lg">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <motion.img
            className="flex-grow md:w-[40vw] w-full h-auto object-contain"
            src={collDali}
            alt="sneakers collection"
            width={510}
            height={384}
            initial={{ scale: 0.3, opacity: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,

              transition: {
                duration: 1.2,
                delay: 0.1,
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
