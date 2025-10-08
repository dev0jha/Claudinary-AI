"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  LogOutIcon,
  MenuIcon,
  LayoutDashboardIcon,
  Share2Icon,
  UploadIcon,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";

const sidebarItems = [
  { href: "/home", icon: LayoutDashboardIcon, label: "Home Page" },
  { href: "/social-share", icon: Share2Icon, label: "Social Share" },
  { href: "/video-upload", icon: UploadIcon, label: "Video Upload" },
];

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="drawer lg:drawer-open bg-gray-900">
      <input
        id="sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <header className="w-full bg-gray-800 border-b border-gray-700">
          <div className="navbar max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 min-h-[60px]">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="sidebar-drawer"
                className="btn btn-square btn-ghost drawer-button text-white hover:bg-gray-700 btn-sm"
              >
                <MenuIcon className="w-5 h-5" />
              </label>
            </div>
            <div className="flex-1 lg:-ml-6 -ml-2">
              <Link href="/" onClick={handleLogoClick}>
                <div className="btn btn-ghost normal-case text-lg sm:text-xl lg:text-2xl font-bold tracking-tight cursor-pointer text-white pl-0 py-1 h-auto min-h-0">
                  <span className="hidden sm:inline">Cloudinary Showcase</span>
                  <span className="sm:hidden">Cloudinary</span>
                </div>
              </Link>
            </div>
            <div className="flex-none flex items-center space-x-2 sm:space-x-4">
              {user && (
                <>
                  <div className="avatar hidden sm:block">
                    <div className="w-8 h-8 rounded-full">
                      <Image
                        src={user.imageUrl}
                        alt={
                          user.username || user.emailAddresses[0].emailAddress
                        }
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm truncate max-w-[80px] sm:max-w-xs lg:max-w-md text-gray-200 hidden sm:inline-block">
                    {user.username || user.emailAddresses[0].emailAddress}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-ghost btn-circle text-white hover:bg-gray-700 btn-sm sm:btn-md"
                  >
                    <LogOutIcon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        </header>
        {/* Page content */}
        <main className="flex-grow bg-gray-900">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-8">
            {children}
          </div>
        </main>
      </div>
      <div className="drawer-side">
        <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
        <aside className="bg-gray-800 w-64 h-full flex flex-col border-r border-gray-700">
          <div className="flex items-center justify-center py-4">
            <ImageIcon className="w-10 h-10 text-blue-400" />
          </div>
          <ul className="menu p-4 w-full text-gray-200 flex-grow">
            {sidebarItems.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-4 px-4 py-2 rounded-lg ${
                    pathname === item.href
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-700 text-gray-200"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-6 h-6" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          {user && (
            <div className="p-4">
              <button
                onClick={handleSignOut}
                className="btn bg-red-600 hover:bg-red-700 text-white border-none w-full"
              >
                <LogOutIcon className="mr-2 h-5 w-5" />
                Sign Out
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}