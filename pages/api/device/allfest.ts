// 서버 함수임!!!
// 미리 데이터 받을 형식 갖춘 다음에 서버 만들어야 함

import { Festival } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";

interface Data {
  ok: boolean;
  allfest?: Festival[];
  error?: String;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  if (request.method !== "GET") {
    response.status(405).json({
      ok: false,
      error: `지원하지 않는 메서드 입니다 : ${request.method}`,
    });
    return;
  }

  try {
    const allfest = await client.festival.findMany();

    response.status(200).json({ ok: true, allfest });
    // console.log(allfest)
  } catch (err) {
    response.status(200).json({ ok: false, error: `${err} allfest실패!!!!` });
  } finally {
    //예외가 있던 없던 실행되는 블록임!
    await client.$disconnect();
  }
}
