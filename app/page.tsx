import { Logout } from "@/actions/auth";
import { AnimatedGradientTextEffect } from "@/components/animated-gradient-text";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plans } from "@/data/pricing-plans";
import {
  ArrowUpAZIcon,
  BookMarked,
  Check,
  CircleCheck,
  CircleCheckBig,
  CloudIcon,
  Fingerprint,
  Lock,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: Lock,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowUpAZIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: Fingerprint,
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <Navbar />
      <div className="text-center mt-24 lg:mt-24 max-w-5xl mx-auto space-y-5 bg-[#f9f8fd]">
        <AnimatedGradientTextEffect title="Saas-Validator" />
        <h1 className="text-4xl font-bold md:text-7xl">
          Validate Your SaaS Idea with AI-Powered Insights
        </h1>
        <p className="text-muted-foreground pt-5 lg:text-xl">
          Validate your next big idea with comprehensive market research and
          competitive analysis.
        </p>

        <div className="flex gap-x-3 items-center justify-center">
          <Button>Let's get started</Button>
          <Button className="" variant={"outline"}>
            Watch Demo
          </Button>
        </div>

        <div className="relative aspect-video border-2 border-gray-300 p-2 rounded-md shadow-md">
          <Image
            src={"/images/howIsthat.jpg"}
            alt="website screenshot"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="py-24 sm:py-32 bg-secondary my-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Deploy faster
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full flex items-center justify-center flex-col">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Pricing
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-10">
              Everything you need to deploy your app
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p> */}
          </div>

          {plans.map((plan) => (
            <Card className="shadow-lg px-4">
              <CardHeader>
                <CardTitle className="text-indigo-600 text-4xl">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div>
                  <span className="text-5xl font-bold">${plan.price}</span>
                  /month
                </div>
                <div className="flex flex-col items-start gap-y-1">
                  {plan.features.map((feature) => (
                    <div className="flex items-center lg:text-lg">
                      <Check className="h-5 w-5 mr-2 text-blue-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full h-fit bg-white px-14 py-14 mt-10">
        <div className="flex flex-row">
          <div className="flex flex-col gap-2 justify-center w-[35%]">
            <div className="flex items-center w-full gap-4">
              <img
                src="https://tailwind-generator.b-cdn.net/favicon.png"
                width="42"
                alt="Logo Preview"
              />
              <div className="text-3xl font-semibold ">SaaS-Validator</div>
            </div>
            <div className="grid grid-cols-3 gap-6 w-fit p-4">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>{" "}
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>{" "}
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-2">
                <div className="font-bold uppercase text-[#9ca3af] pb-3">
                  Comany
                </div>{" "}
                <a href="#xxx" className="hover:underline">
                  About Us
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Contact
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Support
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  News
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold uppercase text-[#9ca3af] pb-3">
                  Legal
                </div>{" "}
                <a href="#xxx" className="hover:underline">
                  Imprint
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Privacy Policy
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Terms of Use
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-[#9ca3af] pb-3">
                Newsletter
              </div>
              <p className="text-muted-foreground mb-2">
                Subscribe to our newsletter.
              </p>
              <form className="flex items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 text-gray-700 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-purple-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#7e22ce] text-[#ffffff] font-semibold py-3 px-6 rounded-r-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-8"></div>
        <div className="text-center">
          © 2024 saas-validator-ai - All rights reserved.
        </div>
      </div>
    </div>
  );
}
