import { Festival } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modals/Modal";

const Home: NextPage = () => {
  const [festi, setFesti] = useState<Festival[]>([]);
  const [festInfo, setFestInfo] = useState<Festival[]>([]);
  const [modalOpen, setModalOpen] = useState(false); // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // 데이터 가져옴
    fetch("/api/device/allfest")
      .then((res) => res.json())
      .then((json) => setFesti(json.allfest));
    // console.log(json.allfest);
  }, []);

  const todayFormal = () => {
    // 현재 날짜
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth =
      now.getMonth() + 1 > 9 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
    let todayDate = now.getDate() > 9 ? now.getDate() : "0" + now.getDate();
    return todayYear + "-" + todayMonth + "-" + todayDate;
    console.log(todayFormal);
  };

  const 날짜비교 = (a: any, b: any) => {
    a >= b;
    return a;
  };

  return (
    <Layout title={"FMAIN"}>
      <div className="h-full p-6 font-serif ">
        {/* <div className="h-[100vh]">안녕</div> */}

        <div id="웰컴메세지" className="flex justify-between items-center">
          <div>
            <div className="text-4xl font-bold">Hello Everyone!</div>
            <div className="text-gray-500:">
              Welcome back to festival information service
            </div>
            <img src="img/fall.png" className="w-[900px] pt-40" />
            <body className="h-[100vh]"></body>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

// let express = require("express")
// let app = express();
// let port = process.env.PORT || 80;

// app.user(express.static("public_html"))
// app.listen(port, function(){
//   console.log("html서버 시작됨")
// })
// app.get("/festival_list", (req, res)=>{
//   let api = async ( :type) => {

//   }
// })
