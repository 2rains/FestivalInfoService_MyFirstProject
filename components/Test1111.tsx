import { Festival } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
// import { json } from "stream/consumers";
import Layout from "./Layout";
import moment from "moment";
import "moment/locale/ko";
import React from "react";
import Modal from "./Modals/Modal";

type Data = {
  name: string;
  createMany?: any;
  arr_json?: any;
  // sort:() => void;
  // setDateSort:() => void;
};

const Home = ({ data }: any) => {
  const [addDevice, setAddDevice] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); //에러 메세지(입력 안 했을 경우)
  const [enterDevice, setEnterDevice] = useState("");
  const [festInfo, setFestInfo] = useState<Festival[]>([]);
  const [bToggle, setBToggle] = useState(false);
  const [includeLoc, setIncludeLoc] = useState<Festival[]>([]);
  const [modalOpen, setModalOpen] = useState(false); // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // console.log(data);
  useEffect(() => {
    fetch("/api/device/allfest")
      .then((res) => res.json())
      .then((json) => {
        const a = json.allfest.sort((a: Festival, b: Festival) => {
          // 날짜 정렬
          return (
            new Date(b.fstvlStartDate).valueOf() -
            new Date(a.fstvlStartDate).valueOf()
          );
        });
        // console.log(a);
        const b = a.filter(
          (x: any) => x.lnmadr.includes(data) || x.rdnmadr.includes(data)
        ); // data는 locFestinfo에서 보내온 지역 이름
        console.log(b);
        setFestInfo(b);
      });
  }, [data]);

  festInfo.sort((a: Festival, b: Festival) => {
    return (
      new Date(b.fstvlStartDate).valueOf() -
      new Date(a.fstvlStartDate).valueOf()
    );
  });

  return (
    <Layout title={"LOCFESTINFO"}>
      {/* <Link href={"/locFestinfo"}> */}
      <div className="p-6 space-y-20">
        {festInfo &&
          festInfo.map((festinfom, idx) => (
            <>
              <div key={idx} className="flex ">
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
                {/* <button onClick={openModal}></button> */}
                {/* //header 부분에 텍스트를 입력한다. */}
                <Modal
                  open={modalOpen}
                  close={closeModal}
                  header="Modal heading"
                >
                  {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다.*/}
                </Modal>
              </React.Fragment>
            </>
          ))}
      </div>
    </Layout>
  );
};
export default Home;
