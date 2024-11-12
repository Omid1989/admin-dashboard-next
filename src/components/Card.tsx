const Card = () => {
  return (
    <div className=" w-full h-[350px] md:h-[250px]   ">
      <div className="pb-4 flex justify-between">
        <h1 className="font-bold text-white">گزارش عمومی </h1>
      </div>
      <div
        className="w-full h-full   relative rounded-md bg-white shadow 
       flex items-center justify-center
       after:content-[''] after:w-[95%] after:h-11 after:rounded-md after:-z-10   after:bg-white after:absolute
       after:-bottom-3 after:shadow p-2"
      >
        <div className="flex bg-red-500 w-full h-full rounded">sssssss</div>
      </div>
    </div>
  );
};
export default Card;
