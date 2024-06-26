"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { CircuitBoard, LayoutDashboard, Star, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
const font = Poppins({ subsets: ["latin"], weight: "600" });

const OrganizationSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[200px] pl-5 pt-5">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src={"/logo.png"} alt="logoI" height={40} width={40} />
          <span className={cn("font-semibold text-2xl ", font.className)}>
            Miro
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />
      <div className="space-y-1 w-full">
        <Button
          asChild
          size="lg"
          variant={favorites ? "ghost" : "secondary"}
          className="font-normal  justify-start px-2 w-full "
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Team boards
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant={favorites ? "secondary" : "ghost"}
          className="font-normal  justify-start px-2 w-full "
        >
          <Link href={{ pathname: "/", query: { favorites: true } }}>
            <Star className="h-4 w-4 mr-2" />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrganizationSidebar;
