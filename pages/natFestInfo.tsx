// // ********

// import { Festival } from "@prisma/client";
// import type { NextPage } from "next";
// import Link from "next/link";
// import { useCallback, useEffect, useState } from "react";
// // import { json } from "stream/consumers";
// import Layout from "../components/Layout";
// import moment from "moment";
// import "moment/locale/ko";
// import Toggle from "react-toggle";

// type Data = {
//   name: string;
//   createMany?: any;
//   arr_json?: any;
//   // sort:() => void;
//   // setDateSort:() => void;
// };

// const Home: NextPage = () => {
//   const [addDevice, setAddDevice] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(""); //에러 메세지(입력 안 했을 경우)
//   const [enterDevice, setEnterDevice] = useState("");
//   const [festInfo, setFestInfo] = useState<Festival[]>([]);
//   const [bToggle, setBToggle] = useState(false);

//   useEffect(() => {
//     fetch("/api/device/allfest")
//       .then((res) => res.json())
//       .then((json) => setFestInfo(json.allfest));
//   }, []);

//   festInfo.sort((a: Festival, b: Festival) => {
//     return (
//       new Date(b.fstvlStartDate).valueOf() -
//       new Date(a.fstvlStartDate).valueOf()
//     );
//   });

//   const sortedFestinfo = festInfo.slice(0).sort((a: Festival, b: Festival) => {
//     return (
//       new Date(b.fstvlStartDate).valueOf() -
//       new Date(a.fstvlStartDate).valueOf()
//     );
//   });

//   // useCallback(() => {
//   //   // 무한루프 막기
//   //   setFestInfo(sortedFestinfo);
//   // }, [sortedFestinfo]);

//   // SORT BY DATE (TOGGLE)
//   const sortByDate = () => {
//     if (
//       new Date(festInfo[0].fstvlStartDate).valueOf() <
//       new Date(festInfo[festInfo.length - 1].fstvlStartDate).valueOf()
//     ) {
//       const sortedFestinfo = festInfo
//         .slice(0)
//         .sort((a: Festival, b: Festival) => {
//           return (
//             new Date(b.fstvlStartDate).valueOf() -
//             new Date(a.fstvlStartDate).valueOf()
//           );
//         });
//       setFestInfo(sortedFestinfo);
//     } else {
//       const sortedFestinfo = festInfo
//         .slice(0)
//         .sort((a: Festival, b: Festival) => {
//           return (
//             new Date(a.fstvlStartDate).valueOf() -
//             new Date(b.fstvlStartDate).valueOf()
//           );
//         });
//       setFestInfo(sortedFestinfo);
//     }
//   };

//   return (
//     <Layout title={"NATFESTINFO"}>
//       <div className="p-6 space-y-20">
//         {/* <div className="bg-red-200 select-none flex items-center space-x-2 ">
//           <Toggle
//             id={"cheese-status"}
//             onChange={sortByDate}
//             defaultChecked={bToggle}
//           />
//           <label htmlFor="cheese-status">
//             날짜 정렬 <span>{bToggle ? "오름차순" : "내림차순"}</span>
//           </label>
//         </div> */}
//         {festInfo &&
//           festInfo.map((festinfom, idx) => (
//             <div className="bg-red-300 flex flex-wrap relative">
//               <img
//                 src="img/fire.png"
//                 className="flex-wrap w-60 h-52 hover:bg-red-200"
//               />

//               <div
//                 key={idx}
//                 className="text-white absolute py-5 m-5 w-60 h-52 p-4 flex flex-col justify-between"
//                 // className="absolute py-5 m-5 bg-[#94bcd6] dark:bg-[#6c899c] rounded-3xl w-60 h-52 p-4 flex flex-col justify-between hover:bg-slate-50"
//               >
//                 <div>
//                   <h1 className="font-bold">{festinfom.fstvlNm}</h1>
//                   {/* {festinfom.opar}) */}
//                 </div>

//                 {/* <img
//                   src="img/fire.png"
//                   className="w-60 h-52 hover:bg-red-200"
//                 /> */}
//                 <button>{festinfom.fstvlStartDate}</button>
//               </div>
//             </div>
//           ))}
//       </div>
//     </Layout>
//   );
// };
// export default Home;

import { Festival } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout";
import "moment/locale/ko";
import React from "react";
import Modal from "../components/Modals/Modal";

type Data = {
  name: string;
  createMany?: any;
  arr_json?: any;
};

const Home = ({ data }: any) => {
  const [festInfo, setFestInfo] = useState<Festival[]>([]);
  const [modalOpen, setModalOpen] = useState(false); // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    fetch("/api/device/allfest")
      .then((res) => res.json())
      .then((json) => setFestInfo(json.allfest));
  }, []);

  festInfo.sort((a: Festival, b: Festival) => {
    return (
      new Date(b.fstvlStartDate).valueOf() -
      new Date(a.fstvlStartDate).valueOf()
    );
  });

  return (
    <Layout title={"NATFESTINFO"}>
      <div className="p-6 space-y-20">
        <h1 className="font-bold text-3xl text-center ">전국 축제 정보</h1>
        {festInfo &&
          festInfo.map((festinfom, idx) => (
            <>
              <div key={idx} className="flex">
                <button
                  className="relative flex-wrap w-60 h-52 cursor-pointer grayscale hover:grayscale-0"
                  onClick={openModal}
                >
                  <img src="img/fire.png" />
                  <span className="text-center text-white font-extrabold text-lg absolute top-4 pt-16 w-60  p-4 flex flex-col justify-between flex-wrap z-10">
                    {festinfom.fstvlNm}
                  </span>
                  <span className=" text-blue-200 absolute top-36 text-right pt-16 w-60  p-4 flex flex-col justify-between flex-wrap z-10">
                    {festinfom.fstvlStartDate}
                  </span>
                </button>
              </div>

              <React.Fragment>
                {/* //header 부분에 텍스트를 입력한다. */}
                <Modal
                  open={modalOpen}
                  close={closeModal}
                  header="Modal heading"
                >
                  {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다.*/}
                </Modal>
              </React.Fragment>
              {/* <h3> {festinfom.fstvlNm} </h3>
              <ul>
                <li>
                  <em>시작날짜</em>
                  {`${festinfom.fstvlStartDate} - ${festinfom.fstvlEndDate}`}
                </li>
                <li>
                  <em>내 용</em> {festinfom.fstvlCo}{" "}
                </li>
                <li>
                  <em>주 소</em> {festinfom.rdnmadr}{" "}
                </li>
                <li>
                  <em>홈페이지</em> {festinfom.homepageUrl}{" "}
                </li>
                <li>
                  <em>문의전화</em> {festinfom.phoneNumber}{" "}
                </li>
              </ul> */}
              {/* <div id={"ViewDetails"} className=""></div> */}
            </>
          ))}
      </div>
    </Layout>
  );
};
export default Home;
