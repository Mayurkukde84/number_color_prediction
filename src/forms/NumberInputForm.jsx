import { Input } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const NumberInputForm = ({type,label,name}) => {
  return (
    <Input color="purple" type={type} label={label} name={name} />
  )
}

export default NumberInputForm