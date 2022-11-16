import Link from "next/link";
import React from "react";
import ReactDOM from "react-dom";
// import modalCss from "../../../../../../../../../styles/modal.css";
// import '../../../assets/css/modal.css';
import test from "../Test1111";

const Modal = (props: {
  children?: any;
  open?: any;
  close?: any;
  header?: any;
}) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section className="w-[90%] max-w-[450px] m-0 border-r-[0.3rem] bg-[#fff] overflow-hidden">
          <header className="relative p-16 bg-[#f1f1f1] font-bold">
            <button
              className="close absolute top-14 right-14 w-[30px] text-[21px] font-bold text-center text-[#999] bg-transparent"
              onClick={close}
            >
              &times;
            </button>
          </header>
          <main className="p-[16px] border-b-[1px] border-solid border-[#dee2e6] border-t-[1px]">
            {props.children}
            {}
          </main>
          <footer className="py-[12px] px-[16px] text-right">
            <button
              className="close py-[6px] px-[12px] text-[#fff] bg-[#6c757d] border-r-[5px] text-[13px]"
              onClick={close}
            >
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
