import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const Nav2 = () => {
  const nav = useNavigate();
  useEffect(() => {
    nav("/home");
  }, [])
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>/home</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>/home</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu >
      </div>
      <Outlet></Outlet>
    </>
  )
}
export default Nav2;
