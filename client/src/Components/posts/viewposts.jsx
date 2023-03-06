import React from "react";
import img1 from "../assets/login.jpg";

export function Viewposts() {
  return (
    <>
      <div className="bg-inherit m-4 p-3 sm:m-3 sm:p-2">
        <div class="h-max grid grid-col-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-row-4 gap-10 p-16">
          <div class="text-black bg-white text-center text-5xl rounded-2xl row-span-6 md:row-span-3 ">
            Ads
          </div>

          <div class="bg-white text-black border-slate-300 rounded-2xl shadow-lg">
             <div class="h-42 overflow-hidden">
              <img class=" rounded-lg rounded-r-xl" src={img1} alt="" />
             </div>
            <div className=" pt-4">
              <h3 class="px-4 text-base font-bold">Machine Learning</h3>
              <p class="px-4 text-xs">Posted by ..... "Username"</p>
              <hr class="h-px my-4 ml-2 mr-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <p class="px-4 text-sm mt-3">
                This work is for machine learning. please do this work. I beg
                you fucker. do me. my wnajksan da NKJDkjbashdb,msn dmns hsdbmnc
                dsmn.
              </p>
              <div class="mb-7">
                <button class="bg-slate-300 hover:bg-slate-200 border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  View Details
                </button>
                <button class="bg-slate-300 hover:bg-slate-200  border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  Apply for job
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white text-black border-slate-300 rounded-xl shadow-lg">
            <div class="py-2 px-2 rounded-xl overflow-hidden">
              <img class="rounded-2xl" src="./Images/card.jpg" alt="" />
            </div>
            <div>
              <h3 class="px-4 text-base font-bold">Web Development</h3>
              <p class="px-4 text-xs">Posted by ..... "Username"</p>
              <hr class="h-px my-4 ml-2 mr-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <p class="px-4 text-sm mt-3 ">
                This work is for machine learning. please do this work. I beg
                you fucker. do me. my wnajksan da NKJDkjbashdb,msn dmns hsdbmnc
                dsmn.
              </p>
              <div class="mb-4">
                <button class="bg-slate-300 hover:bg-slate-200 border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  View Details
                </button>
                <button class="bg-slate-300 hover:bg-slate-200  border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  Apply for job
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white text-black border-slate-300 rounded-xl shadow-lg">
            <div class="py-2 px-2 rounded-xl overflow-hidden">
              <img class="rounded-2xl" src="./Images/card.jpg" alt="" />
            </div>
            <div>
              <h3 class="px-4 text-base font-bold">Cyber Security</h3>
              <p class="px-4 text-xs">Posted by ..... "Username"</p>
              <hr class="h-px my-4 ml-2 mr-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <p class="px-4 text-sm mt-3">
                This work is for machine learning. please do this work. I beg
                you fucker. do me. my wnajksan da NKJDkjbashdb,msn dmns hsdbmnc
                dsmn.
              </p>
              <div class="mb-4">
                <button class="bg-slate-300 hover:bg-slate-200 border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  View Details
                </button>
                <button class="bg-slate-300 hover:bg-slate-200  border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  Apply for job
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white text-black border-slate-300 rounded-xl shadow-lg">
            <div class="py-2 px-2 rounded-xl overflow-hidden">
              <img class="rounded-2xl" src="./Images/card.jpg" alt="" />
            </div>
            <div>
              <h3 class="px-4 text-base font-bold">Data Analyst</h3>
              <p class="px-4 text-xs">Posted by ..... "Username"</p>
              <hr class="h-px my-4 ml-2 mr-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <p class="px-4 text-sm mt-3">
                This work is for machine learning. please do this work. I beg
                you fucker. do me. my wnajksan da NKJDkjbashdb,msn dmns hsdbmnc
                dsmn.
              </p>
              <div class="mb-4">
                <button class="bg-slate-300 hover:bg-slate-200 border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  View Details
                </button>
                <button class="bg-slate-300 hover:bg-slate-200  border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  Apply for job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Viewposts;
