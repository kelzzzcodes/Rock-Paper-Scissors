
import { CustomCardProps } from '../../types'

const CustomCard = ({cardId,backgroundColor, value, title,isDisabled,isActive}:CustomCardProps) => {

  return (
    <div   className={`flex flex-col gap-4 w-[200px] h-[200px] items-center justify-center rounded-xl  border-2 ${backgroundColor}`}>
   <div key={cardId}>
   {
        value && (
          <div className='rounded-full  bg-white text-black p-4'>
          <p className='font-bold text-xl'>{value}</p>
      </div>
        )

       }
        <div>
            <h2 className='font-bold text-2xl'>{title}</h2>
        </div>
   </div>

    </div>
  )
}

export default CustomCard
