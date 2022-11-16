// ********

import { Festival } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
// import { json } from "stream/consumers";
import Layout from "../components/Layout";
import moment from "moment";
import "moment/locale/ko";
import Toggle from "react-toggle";

type Data = {
  name: string;
  createMany?: any;
  arr_json?: any;
  // sort:() => void;
  // setDateSort:() => void;
};

const Home: NextPage = () => {
  const [addDevice, setAddDevice] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); //에러 메세지(입력 안 했을 경우)
  const [enterDevice, setEnterDevice] = useState("");
  const [festInfo, setFestInfo] = useState<Festival[]>([]);
  const [bToggle, setBToggle] = useState(false);

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

  const sortedFestinfo = festInfo.slice(0).sort((a: Festival, b: Festival) => {
    return (
      new Date(b.fstvlStartDate).valueOf() -
      new Date(a.fstvlStartDate).valueOf()
    );
  });

  useCallback(() => {
    // 무한루프 막기
    setFestInfo(sortedFestinfo);
  }, [sortedFestinfo]);

  // SORT BY DATE (TOGGLE)
  const sortByDate = () => {
    if (
      new Date(festInfo[0].fstvlStartDate).valueOf() <
      new Date(festInfo[festInfo.length - 1].fstvlStartDate).valueOf()
    ) {
      const sortedFestinfo = festInfo
        .slice(0)
        .sort((a: Festival, b: Festival) => {
          return (
            new Date(b.fstvlStartDate).valueOf() -
            new Date(a.fstvlStartDate).valueOf()
          );
        });
      setFestInfo(sortedFestinfo);
    } else {
      const sortedFestinfo = festInfo
        .slice(0)
        .sort((a: Festival, b: Festival) => {
          return (
            new Date(a.fstvlStartDate).valueOf() -
            new Date(b.fstvlStartDate).valueOf()
          );
        });
      setFestInfo(sortedFestinfo);
    }
  };

  return (
    <Layout title={"HOMEURL"}>
      <div className="pt-60 pl-48 text-center text-lg ">
        <div className="bg-[#ffd966] pt-16 dark:text-[#2a313c]">
          준비 중인 페이지입니다!
        </div>
        <div className="bg-[#ffd966] pb-16 dark:text-[#2a313c]">
          {" "}
          조금만 기다려주세요!
        </div>
      </div>
    </Layout>
  );
};
export default Home;
