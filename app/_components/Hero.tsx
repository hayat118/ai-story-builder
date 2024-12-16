import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="px-10 md:px-28 lg:px-44 py-10 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-[70px] text-primary font-bold py-10">
            Craft Magical Stories for Kids in Minutes
          </h2>
          <p className="text-2xl text-primary font-light">
            Create fun and personalised stories that bring your child's
            adventures to life and spark their passion for readund. It takes
            only few seconds!
          </p>
          <Link href={"/create-story"}>
            <Button
              size="lg"
              color="primary"
              className="mt-5 font-bold text-xl p-8"
            >
              Create Story
            </Button>
          </Link>
        </div>
        <div className="mt-8">
          <Image src={"/hero.png"} alt="hero-image" width={700} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
