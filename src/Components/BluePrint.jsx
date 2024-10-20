const BluePrint = () => {
  return (
    <div>
      <div className="">
        {/* navbar */}
        <div className="grid grid-flow-row grid-cols-12 h-12">
          <div className="bg-yellow-800 p-2 col-span-1"></div>
          <div className="bg-blue-800  col-span-11"></div>
        </div>

        {/* sidebar and section area */}
        <div className="grid grid-flow-row grid-cols-12">
          {/* sidebar */}
          <div className="bg-teal-400 p-2 h-screen col-span-1"></div>

          {/* content-area */}
          <div className="grid grid-flow-row grid-cols-12 col-span-11 ">
            <div className=" h-screen col-span-12">
              {/* uppr navbar */}
              <div className="bg-pink-400 p-6 shadow-md"></div>

              {/* contebt area */}
              <div className="  p-4">
                <div className="grid grid-flow-row grid-cols-12 gap-4">
                  {/* left content area */}
                  <div className="col-span-6 mr-3">
                    <h1>Quick Access</h1>

                    {/* inbox */}
                    {/* card component */}

                    <div className="mt-8 cd shadow-lg">
                      <div className="h-[200px] group w-full border border-1 rounded-md p-2">
                        <div className="relative">
                          <div className="inline p-2 mb-4 hover:text-green-500">
                            Inbox
                          </div>
                        </div>
                        {/* Center the content excluding Inbox */}
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="text-sm text-stone-400 text-center">
                            Good job!
                          </div>
                          <div className="text-sm text-stone-400">
                            You have no pending actions
                          </div>
                        </div>
                      </div>
                    </div>
                    

                    {/* holidays */}
                    {/* card component */}
                    <div className="mt-8 cd shadow-lg">
                      <div className="h-[200px] group w-full border border-1 rounded-md p-2">
                        <div className="flex items center justify-between p-2">
                          <div className="inline p-2 mb-4 hover:text-green-500">
                            Holidays
                          </div>
                          <div>View All</div>
                        </div>
                        {/* Center the content excluding Inbox */}
                        <div className="flex flex-col justify-start h-full p-2 text-2xl">
                                Bank Holiday
                          
                        </div>
                      </div>
                    </div>
                    

                    {/* on Leave Today */}
                    {/* card component */}
                    <div className="mt-8 cd shadow-lg">
                      <div className="h-[200px] group w-full border border-1 rounded-md p-2">
                        <div className="flex items center justify-between p-2">
                          <div className="inline p-2 mb-4 hover:text-green-500">
                            On Leave Today
                          </div>
                        </div>
                        {/* Center the content excluding Inbox */}
                        <div className="flex flex-col justify-start h-full p-2 text-sm text-stone-400">
                                Everyone is working today fine!
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* right content area */}
                  <div className="col-span-6 ml-3">
                    <div className="flex items-center">
                      <button className="bg-gray-400 hover:bg-gray-500 p-3 rounded-sm border border-1 border-slate-700 ">
                        organisation
                      </button>
                      <button className="bg-gray-400 hover:bg-gray-500 p-3 rounded-sm hoverborder border border-1 border-slate-700 ">
                        DPIT
                      </button>
                      <div></div>
                    </div>

                    {/* card component */}
                    <div className=" mt-8  cd shadow-lg">
                      <div className="h-[200px] group w-full border border-1 rounded-md p-2">
                        <div className="relative border-b-2">
                          <div className="inline p-2 mb-4 hover:text-green-500 my-2">
                            praise
                          </div>
                        </div>
                        <div className="text-stone-400 mt-2">
                          Give praise from here
                        </div>
                      </div>
                    </div>

                    <div className=" mt-8  cd shadow-lg">
                      <div className="h-[200px] group w-full border border-1 rounded-md p-2">
                        <div className="flex border-b-2">
                          <ul className="flex items-center justify-around gap-8">
                            <li>
                              <a href="">Announcements</a>
                            </li>
                            <li>
                              <a href="">Birthdays</a>
                            </li>
                            <li>
                              <a href=""></a>Work Anniversaries
                            </li>
                            <li>
                              <a href=""></a>New joinees
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluePrint;
