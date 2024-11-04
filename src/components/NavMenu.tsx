import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"

const NavMenu = () => {
  const location = useLocation();
  
  const items = [
    { name: "Key Metrics", path: "/" },
    { name: "dUSD Collaterals", path: "/collaterals" },
    { name: "AMO & SMO", path: "/amo-smo" },
    { name: "Treasury", path: "/treasury" }
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-6">
        {items.map((item) => (
          <NavigationMenuItem key={item.path}>
            <Link to={item.path}>
              <NavigationMenuLink
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path 
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenu