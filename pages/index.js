import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import {FaEthereum} from 'react-icons/fa';
import {FaClock} from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main>
        <div className="grid h-screen place-items-center">
          <div className="card-bg rounded-2xl text-white w-1/3">
            <div className="m-4">
              <Image
                className="rounded-2xl w-full"
                src="/images/image-equilibrium.jpg"
                width={300}
                height={300}
                alt="Ethereum Icon"
              />
            </div>
            <div className="m-4">
              <h4 className="font-bold">Equilibrium #3429</h4>
              <p className="mt-4 break-words">Our Equilibrium collection promotes balance and calm.</p>
            </div>
            <div className="grid  mx-4 grid-cols-2">
              <div className="font-bold text-teal-500">
                <FaEthereum className="inline-flex"/><span className="inline-flex">0.041 ETH</span>
              </div>
              <div className="inline-flex text-slate-400 items-baseline mx-4 mb-4">
              <FaClock />
                <span className="px-2 ">3 days left</span>
              </div>
              
              <div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
