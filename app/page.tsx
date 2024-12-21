
import { Button } from "@/components/ui/button";
import { MarqueeDemoVertical } from "@/components/MarqueeDemoVertical";
import { Marquee3D } from "@/components/Marquee3D";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
// import { CoolMode } from "@/components/ui/cool-mode";
import {TypingAnimationDemo} from "@/components/TypingAnimationDemo";
export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TypingAnimationDemo/>
        Let's Play with Magic UI
       
        <Button>Click me</Button>
        <NeonGradientCard className="max-w-sm items-center justify-center text-center">
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Vinod Kumar Saini
          </span>
          
        </NeonGradientCard>
        <MarqueeDemoVertical />
        <Marquee3D />
      </main>
    </div>
  );
}