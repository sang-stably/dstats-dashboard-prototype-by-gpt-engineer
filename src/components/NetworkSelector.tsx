import { Button } from "@/components/ui/button"

const NetworkSelector = () => {
  return (
    <Button 
      variant="outline" 
      className="flex items-center gap-2 bg-card/50 border-card hover:bg-card"
    >
      <img 
        src="https://fraxscan.com/assets/frax/images/svg/logos/chain-light.svg?v=24.10.4.1" 
        alt="Fraxtal Network" 
        className="w-5 h-5"
      />
      <span className="text-sm font-medium">Fraxtal Network</span>
    </Button>
  )
}

export default NetworkSelector