"use client";

//image
import Image from "next/image";

//icons

import { MdOutlineMapsHomeWork, MdOutlineBuildCircle } from "react-icons/md";

import CountUp from "react-countup";

//react intersection observer
import { useInView } from "react-intersection-observer";

//motion
import { motion } from "framer-motion";
import { FadeIn } from "@/variants";
import { FaBurger } from "react-icons/fa6";

//variants

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="w-full h-full md:h-screen flex items-center text-black z-50 bg-[#fbf4df] p-10"
      id="About"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between md:items-center xl:items-center items-center">
          {/* image */}
          <motion.div
            variants={FadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              src={"/images/burger.webp"}
              alt=""
              width={600}
              height={448}
              className="rounded-[20px]"
            />
          </motion.div>
          {/* text and stats */}
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={FadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className=" mb-5 text-black font-bold text-2xl"
              >
                What we do?
              </motion.h2>
              <motion.p
                variants={FadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Welcome to our burger restaurant, where we believe in the power
                of a great burger. Our mission is to provide our customers with
                delicious, high-quality burgers made from the freshest
                ingredients. We source our beef from local farms and use only
                the finest toppings and condiments to create a truly
                unforgettable burger experience. Our menu also includes a
                variety of vegetarian and vegan options, so there&apos;s
                something for everyone. At our restaurant, we&apos;re not just
                selling burgers - we&apos;re creating a community of burger
                lovers who appreciate the art of a perfectly crafted meal. Come
                join us and taste the difference for yourself!
              </motion.p>
              {/* stats */}

              <motion.div
                variants={FadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                {/* car types */}
                <div className="flex flex-col w-[100px]">
                  <FaBurger />
                  <div className="text-3xl font-bold mb-2">
                    {inView ? (
                      <CountUp start={0} end={10} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-black">
                    Burger <br /> types
                  </div>
                </div>
                {/* rental outlets */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork />
                  <div className="text-3xl font-bold mb-2">
                    {inView ? (
                      <CountUp start={0} end={15} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-black">
                    Restaurants
                  </div>
                </div>

                {/* repair points */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle />
                  <div className="text-3xl font-bold mb-2">
                    {inView ? (
                      <CountUp start={0} end={5} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-accent">
                    Open <br /> In cities
                  </div>
                </div>
                {/* btn */}
              </motion.div>
              <motion.button
                variants={FadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-black hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                see all Burgers
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
