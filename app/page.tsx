import Link from "next/link";
import Background from "@/components/background-components/Background";
import Logo from "@/components/background-components/Logo";


///keep migrating this  to app dir from the site tutorial
export default function Home() {
  return (
    // <div>Hello</div>
    <div>
      <div className="w-full h-full relative">
        <Logo classes="absolute z-10 top-1/4 left-1/2 -translate-x-1/2 max-h-300" /> 
        <Background bgVideo="/jingmeistudypan.mp4" loadImg="/grafstudy.jpg" />
      </div> 
      <div className="bg-gray-900 text-blue-100 text-left p-10">
        <h1 className="text-3xl font-black">Acre Studio</h1>
        <p>Welcome to the art world.</p>
      </div>
      <div className="relative">
        <Background bgVideo="/digilapse.mp4" loadImg="/"></Background> 
        <div className="z-10 absolute top-0 min-[852px]:w-1/2 right-0 h-screen bg-black opacity-80 text-blue-100 max-[851px]:w-full">
          <Link href="/illustrations">
            <h1 className="m-10 text-3xl">Illustration</h1>
          </Link>
          <p className="max-[851px]:m-10 min-[852px]:m-20">
            &quot;I never saw a value you in it, in myself. In the ways I could
            copy the world, observe it&apos;s details, and reproduce them. I
            never realized no one else saw what I saw. And maybe it was this
            dillusion, fed to my pursuit of mastery, that made it unthinkable to
            give up.&quot;
          </p>
          <Link href="/illustrations">
            <p className="max-[851px]:m-10 min-[852px]:m-20 underline text-yellow-200">
              Show me the yield of your efforts...
            </p>
          </Link>
        </div>
      </div>
      </div>
  );
}
