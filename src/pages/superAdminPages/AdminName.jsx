import NumberInputForm from "../../forms/NumberInputForm"
import ButtonUI from "../../ui/ButtonUI"
import { useNavigate } from "react-router-dom"
const AdminName = () => {
    const navigate = useNavigate()
  return (
   <>
    <div className="flex flex-col gap-4 mt-[4rem]">
      <NumberInputForm type='name' label={"Enter Admin Name"} name={"adminId"} />
      <ButtonUI onClick={()=>navigate('/admin/1/name/amount')} >
        <div className="flex items-center justify-center gap-2">
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </ButtonUI>
    </div>
   </>
  )
}

export default AdminName