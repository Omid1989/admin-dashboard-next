const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow  relative  border border-gray-300">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">اطلاعیه ها</h1>
        <span className="text-xs text-gray-400">نمایش بیشتر</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md  p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium ">اطلاعیه شماره 1</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              1368-10-05
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaYellow rounded-md  p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium ">اطلاعیه شماره 2</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              1368-10-05
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaPruple rounded-md  p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium ">اطلاعیه شماره 3</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              1368-10-05
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
      </div>
    </div>
  );
};
export default Announcements;
