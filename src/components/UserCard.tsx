import Image from "next/image";
import { convertToPersianNumber } from "Omid1989/lib/numberHelpers";
const UserCard = ({
  type,
  caption,
  color,
}: {
  type: string;
  caption: string;
  color: string;
}) => {
  return (
    <div className=" h-[150px] min-w-[150px] p-4 flex-1">
      <div
        className="w-full h-full  border  relative rounded-lg bg-white shadow-md 
        flex items-center justify-center
        after:content-[''] after:w-[95%] after:h-4 after:rounded-lg after:-z-10  after:border  after:bg-white after:absolute
        after:-bottom-3 after:shadow p-1"
      >
        <div className={` ${color} flex w-full h-full rounded-lg `}></div>
      </div>
    </div>
  );
};
export default UserCard;
