"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { imageUrl } from "../lib/image-url";

const menus = [
  {
    name: "About Me",
    url: "#about-me",
  },
  {
    name: "Publications",
    url: "#publications",
  },
  {
    name: "Blog",
    url: "#blog",
  },
  {
    name: "Invited Keynote Talks",
    url: "#invited-keynote-talks",
  },
  {
    name: "Editoral Roles",
    url: "#editoral-roles",
  },
  {
    name: "Future of Work",
    url: "#future-of-work",
  },
  {
    name: "Teachings",
    url: "#teachings",
  },
  {
    name: "Visitings",
    url: "#visitings",
  },
  {
    name: "Media",
    url: "#media",
  },
  {
    name: "Contact Me",
    url: "#contact-me",
  },
];

function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Aşağı scroll
      if (currentScrollY > lastScrollY) {
        if (currentScrollY > 200) {
          setVisible(false);
        }
      }
      // Yukarı scroll
      else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-20 z-50 bg-white shadow-md transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <header className="container mx-auto flex items-center justify-between py-2 px-4 lg:px-0">
          <Image
            src={imageUrl("logo.webp")}
            className="w-auto h-14"
            width={200}
            height={60}
            alt="Yasin Rofcanin Logo"
          />
          <div className="hidden lg:flex justify-between items-center gap-8">
            {menus.map((item, index) => (
              <Link
                className="text-[13px] font-bold text-[#555555] transition-all hover:text-[#23a455]"
                key={index}
                href={item.url}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Icon
            icon={"mdi:menu"}
            className="w-10 h-10 lg:hidden cursor-pointer"
            onClick={toggleDrawer}
          />
        </header>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <Icon
              icon="mdi:close"
              className="w-8 h-8 cursor-pointer"
              onClick={toggleDrawer}
            />
          </div>
          <div className="flex flex-col gap-4 mt-8">
            {menus.map((item, index) => (
              <Link
                className="text-[15px] font-bold text-[#555555] transition-all hover:text-[#23a455]"
                key={index}
                href={item.url}
                onClick={toggleDrawer}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={toggleDrawer} />
      )}
    </>
  );
}

export default Header;
