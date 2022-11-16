import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/client/utils";
import logo from "./src_festimg/불꽃축제.jpg";

interface LayoutProps {
  title: string;
  children: React.ReactNode; // 몸통안에 태그 넣는 법!
}

export default function Layout(props: LayoutProps) {
  // Layout 프롭스 받아오려면 (props 적으면 됨)-> index, data, setting 파일에서 <layout title:{"HOME, SETTING, DATA"}적으면 웹에 적용됨
  const router = useRouter();

  function 다크모드전환() {
    document.body.classList.toggle("dark");
    // document.querySelector("body")?.classList.toggle("dark"); 위랑 같음!
    // 어떤 요소에 classList.toggle을 하면 있으면 없애고 없으면 있게 만들어 줌!!
  }

  return (
    <>
      <div className="flex-wrap">
        {/* // 전체 */}
        <div className="bg-fixed justify-between flex  w-[full]  text-[#1F1D28] dark:bg-[#2a313c] dark:text-[#FFFFFF] ">
          {/* <header className=" h-[100px]  relative border-b-2 shadow-md ">
            
            다크모드버튼!!!!!
            </header> */}

          <div className="ml-11 mt-10 w-[100vh]">{props.children}</div>
          {/* <div className="w-[150vh] bg-blue-500">{props.children}</div> */}
          <div className="">
            {/* <header className="flex flex-col items-center justify-center bg-[#ffffff] dark:bg-[#2a313c] w-70 h-[80vh] flex-wrap m-3 border-[#000000] dark:border-[#ffffff] border-2 table-fixed"> */}
            <header className="">
              {/* <nav className=" flex flex-col items-center fix dark:text-[#000000] "> */}
              <nav className="flex flex-col items-center mx-[30px] mt-[200px] py-16 relative border-2 border-black">
                <div
                  onClick={다크모드전환}
                  className="absolute right-[200px] top-[25px] cursor-pointer hover:bg-slate-300 rounded-2xl p-1 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </div>

                <Link href={"/"}>
                  <button
                    className={cls(
                      "font-serif mr-8 ml-8 mt-8 mb-8 h-[70px] w-[200px] flex items-center justify-center hover:bg-[#e78f58] dark:hover:bg-[#627a86] border-black border-2",
                      router.pathname === "/"
                        ? "  font-extrabold text-[#3e3e3e] bg-[#ffd966] "
                        : ""
                    )}
                  >
                    <div className="flex font-serif">
                      {/* //flex-col justify-center items-center  */}
                      <div>메인 홈</div>
                    </div>
                  </button>
                </Link>

                <Link href={"/natFestInfo"}>
                  <button
                    className={cls(
                      "font-serif mr-8 ml-8 mb-8 h-[70px] w-[200px] flex items-center justify-center hover:bg-[#9da3c3] dark:hover:bg-[#627a86] border-black border-2",
                      router.pathname === "/natFestInfo"
                        ? "  font-extrabold text-[#3e3e3e] bg-[#ffd966]"
                        : ""
                    )}
                  >
                    <div className="flex flex-col justify-center items-center font-serif">
                      <div>전국 축제 정보</div>
                    </div>
                  </button>
                </Link>

                <Link href={"/locFestInfo"}>
                  <button
                    className={cls(
                      "font-serif mr-8 ml-8 mb-8 h-[70px] w-[200px] flex items-center justify-center hover:bg-[#9da3c3] dark:hover:bg-[#627a86] border-black border-2",
                      router.pathname === "/locFestInfo"
                        ? "  font-extrabold text-[#3e3e3e] bg-[#ffd966]"
                        : ""
                    )}
                  >
                    <div className="flex flex-col justify-center items-center font-serif">
                      <div>지역 축제 정보</div>
                    </div>
                  </button>
                </Link>

                <Link href={"/homeURL"}>
                  <button
                    className={cls(
                      "font-serif mr-8 ml-8 mb-8 h-[70px] w-[200px] flex items-center justify-center hover:bg-[#9da3c3] dark:hover:bg-[#627a86] border-black border-2",
                      router.pathname === "/homeURL"
                        ? "  font-extrabold text-[#3e3e3e] bg-[#ffd966]"
                        : ""
                    )}
                  >
                    <div className="flex flex-col justify-center items-center font-serif">
                      <div>지역 대표 홈페이지 정보</div>
                    </div>
                  </button>
                </Link>

                {/* <Link href={"/test1"}>
                  <button
                    className={cls(
                      "font-serif mr-8 ml-8 mb-8 h-[70px] w-[200px] flex items-center justify-center hover:bg-[#9da3c3] dark:hover:bg-[#627a86] border-black border-2",
                      router.pathname === "/test1"
                        ? "  font-extrabold text-[#3e3e3e] bg-[#ffd966]"
                        : ""
                    )}
                  >
                    <div className="flex flex-col justify-center items-center font-serif">
                      <div>테스트</div>
                    </div>
                  </button>
                </Link> */}
              </nav>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}
