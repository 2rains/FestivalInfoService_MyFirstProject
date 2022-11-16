// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import csvToJSON from "../../components/csvToJSON";
import { Festival, prisma } from "@prisma/client";
import client from "../../libs/server/client";

type Data = {
  name: string;
  createMany?: any;
  arr_json?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fs = require("fs");
  const file_csv = fs.readFileSync("DBfest.csv"); // csv파일 읽기
  const string_csv = file_csv.toString(); // csv파일 문자열로 만듦
  const arr_json = csvToJSON(string_csv); // 문자열->json
  // console.log(arr_json)

  try {
    const createMany = await client.festival.createMany({
      data: arr_json,
    });

    res.status(200).json({ name: "John Doe", createMany });
  } catch (err) {
    res.status(500).json({ name: "실패", arr_json });
  }
}

//// csv to json으로 바꿈!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//// json -> mongoDB에 insert시킴(createMany())
