import type { NextPage } from "next";
// import { useCallback, useEffect, useState } from "react";
// import Test1111 from "../components/Test1111";
// import "moment/locale/ko";
// import Modal from "../components/Modals/Modal";
// import React from "react";

// type Data = {
//   name: string;
//   createMany?: any;
//   arr_json?: any;
//   data?: any;
//   // sort:() => void;
//   // setDateSort:() => void;
// };

// const Home: NextPage = () => {
//   const [input, setInput] = useState("");
//   const [input1, setInput1] = useState("");
//   const [type, setType] = useState("");

//   // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
//   const [modalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };
//   const closeModal = () => {
//     setModalOpen(false);
//   };
//   //--------------------------------------------------------------------
//   return (
//     // *********여기서부터 지역구분하면 됌!!!!!!!!!!!!!1
//     // <Link ref>
//     <div key={1} className="bg-red-200">
//       {/* <input
//         // type={"button"}
//         // id={"서울"}
//         onChange={(e) => setInput(e.currentTarget.value)}
//       ></input> */}
//       <h1 className="bg-blue-200 font-bold text-3xl text-center py-9">
//         {" "}
//         지역 축제 정보{" "}
//       </h1>
//       <span className="bg-yellow-200 border-y-2 border-black ml-16 py-8">
//         <span className="ml-16"> 관심있는 지역의 축제 정보 </span>
//         <select
//           className="h-14 ring-2 ring-black text-gray-800 px-3 mt-11 ml-8"
//           // onChange={장치종류변경}
//           onChange={(e) => setInput1(e.currentTarget.value)} // select에서 선택한 옵션의 value 값
//           // value={type}
//         >
//           <option hidden>장치 종류를 선택하세요</option>
//           <option value="서울">서울광역시</option>
//           <option value="부산광역시">부산광역시</option>
//           <option value="대구광역시">대구광역시</option>
//           <option value="인천광역시">인천광역시</option>
//           <option value="광주광역시">광주광역시</option>
//           <option value="대전광역시">대전광역시</option>
//           <option value="울산광역시">울산광역시</option>
//           <option value="세종특별자치시">세종특별자치시</option>
//           <option value="경기도">경기도</option>
//           <option value="강원도">강원도</option>
//           <option value="충청북도">충청북도</option>
//           <option value="충청남도">충청남도</option>
//           <option value="전라북도">전라북도</option>
//           <option value="전라남도">전라남도</option>
//           <option value="경상북도">경상북도</option>
//           <option value="경상남도">경상남도</option>
//           <option value="제주특별자치도">제주특별자치도</option>
//         </select>
//         {input1 ? <Test1111 data={input1} /> : <Test1111 data={""} />}
//       </span>
//       {/* <button onClick={() => setInput1("강원")} className="bg-red-400"></button>
//       <button onClick={() => setInput1("제주")} className="bg-red-700"></button> */}

//       {/* {input1 ? <Test1111 data={input1} /> : <Test1111 data={""} />} */}

//       {/* <button onClick={() => setInput1("서울")}>서울</button>
//       {input1 ? <Test1111 data={input1} /> : <Test1111 data={""} />} */}
//     </div>
//   );
// };
// export default Home;
