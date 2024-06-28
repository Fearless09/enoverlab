import { PlayIconSVG } from "@/constant/SVGs";
import Image from "next/image";
import React from "react";

export default function Hero() {
    return (
        <section className="relative px-4 py-7 sm:px-10">
            <div className="container mx-auto">
                <figure>
                    <Image
                        src={"/hero.png"}
                        width={985}
                        height={542}
                        alt="Hero"
                        objectFit="contain"
                        className="mx-auto aspect-video h-full max-h-[542px] w-full max-w-[985px] rounded-[15px]"
                    />
                </figure>

                <button className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#F6F6F6] hover:opacity-[0.98] active:scale-[0.98] sm:h-[84px] sm:w-[84px]">
                    <PlayIconSVG style="ms-0.5 sm:ms-1.5 scale-[45%]" />
                </button>
            </div>
        </section>
    );
}
