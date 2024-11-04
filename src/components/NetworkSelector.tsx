import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const NetworkSelector = () => {
  return (
    <Button 
      variant="ghost" 
      className="flex items-center gap-2 border border-primary/20 hover:border-primary/40"
    >
      <ChevronDown className="w-4 h-4 opacity-50" />
      <img 
        src="https://fraxscan.com/assets/frax/images/svg/logos/chain-light.svg?v=24.10.4.1" 
        alt="Fraxtal" 
        className="w-5 h-5"
      />
      <span className="text-sm font-medium">Fraxtal</span>
    </Button>
  )
}

export default NetworkSelector