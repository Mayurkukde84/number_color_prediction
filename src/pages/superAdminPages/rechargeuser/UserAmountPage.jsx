import { useState } from "react";
import NumberInputForm from "../../../forms/NumberInputForm";
import ButtonUI from "../../../ui/ButtonUI";
import ConfettiExplosion from "react-confetti-explosion";
// import useWindowSize from 'react-use/lib/useWindowSize'

const UserAmountPage = () => {
  // const { width, height } = useWindowSize()
  // const [show,hide] = useState(false)
  // console.log(show)
  // onClick={()=>hide(!show)}
  const [isExploding, setIsExploding] = useState(false);
  return (
    <div className="flex flex-col gap-4 mt-[4rem]">
      {isExploding && <ConfettiExplosion />}
      <NumberInputForm
        type="number"
        label={"Enter User Recharge Amount"}
        name={"adminId"}
      />
      <ButtonUI onClick={() => setIsExploding(!isExploding)}>Recharge</ButtonUI>
      {/* {
show &&   <Confetti
      width={'100rem'}
      height={'800rem'}
    />
      } */}
    </div>
  );
};

export default UserAmountPage;
