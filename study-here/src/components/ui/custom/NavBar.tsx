import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  return (
    <NavigationMenu className="sticky top-0 left-0 max-w-full shadow-md bg-primary-foreground">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
            <NavigationMenuList className="flex p-6 w-full">
              <NavigationMenuItem className="flex-grow">
                <NavigationMenuLink href="/" className="text-xl font-bold hover:text-gray-30">
                  ByteSchool
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium grow-0"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/products"
                  className="hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
        </div>
    </NavigationMenu>
  );
};

export default Navbar;