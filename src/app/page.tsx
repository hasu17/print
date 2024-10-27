import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Photo from "@/components/Photo";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:item-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="\Borcelle.png" className="w-full"></img>
              </div>
              <h1 className="relativ w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-blue-950 px-2 text-white">Custom</span>MDF
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap  text-gray-900">
                {" "}
                Capture your favorite memorys with your own ,
                <span className="font-semibold">one-of-one</span> Photo's. Turn
                Your Memories into Masterpieces—Printed on Wood, Built to Last
                with Woodprint Wonder!
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left  text-gray-900">
                    <Check className="h-5 w-5 shrink text-blue-950" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left  text-gray-900">
                    <Check className="h-5 w-5 shrink text-blue-950" />5 Year
                    print gurantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left  text-gray-900">
                    <Check className="h-5 w-5 shrink text-blue-950" />
                    Any modern models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-offset-slate-100 "
                    src="\user-1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-offset-slate-100 "
                    src="\user-2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-offset-slate-100 "
                    src="\user-3.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-offset-slate-100 "
                    src="\user-4.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-offset-slate-100 "
                    src="\user-5.jpg"
                    alt="user image"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-blue-950 fill-blue-950" />
                    <Star className="h-4 w-4 text-blue-950 fill-blue-950" />
                    <Star className="h-4 w-4 text-blue-950 fill-blue-950" />
                    <Star className="h-4 w-4 text-blue-950 fill-blue-950" />
                    <Star className="h-4 w-4 text-blue-950 fill-blue-950" />
                  </div>
                  <p className="text-gray-900">
                    <span className="font-semibold">1.250</span> Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl"> </div>
            <img
              src="/your-image.png"
              className="absolute w-40  lg:w-55 right-20  -top-23  select-none hidden sm:block lg:hidden xl:block"
            />
            <img
              src="/line.png"
              className="absolute w-20 -left-10  -bottom-6  select-none"
            />

            <Photo className="w-64" imgSrc="/testimonials/1.jpg" />
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
