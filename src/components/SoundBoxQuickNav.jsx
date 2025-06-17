import { Store, Megaphone, DollarSign } from "lucide-react";
import { QuickNav } from "./QuickNav";


export const SoundBoxQuickNav = ({ soundBoxId }) => {
  function handleMerchantClick(){
    console.log(`Merchant clicked for ${soundBoxId}`);
  };

  function handleMarketingClick() {
    console.log(`Marketing clicked for ${soundBoxId}`);
  };
  function handleLoanClick(){
    console.log(`Go loans clicked for ${soundBoxId}`);
    
  }

  const items = [
  { label: "Go device by phone", icon: Store, onClick: handleMerchantClick },
  { label: "Go verify flags", icon: Megaphone, onClick: handleMarketingClick },
  { label: "Go loans", icon: DollarSign, onClick: handleLoanClick }
];


  return <QuickNav trigger={soundBoxId} items={items} />;
};
