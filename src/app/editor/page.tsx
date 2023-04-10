"use client";
import React, { useRef, useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import CheckList from "@editorjs/checklist";
import editorImage from "@editorjs/image";
import Quote from "@editorjs/quote";

import "./styles.css";

export default function Editor() {
  const editorRef = useRef(null);
  const Editor = new EditorJS({
    holder: "editorjs",
    // autofocus: true,
    // tools: {
    //   header: {
    //     class: Header,
    //     inlineToolbar: ["link"],
    //   },
    //   list: {
    //     class: List,
    //     inlineToolbar: true,
    //   },

    //   embed: Embed,
    //   link: Link,
    //   raw: Raw,
    //   SimpleImage: SimpleImage,
    //   checklist: CheckList,
    //   image: editorImage,
    //   quote: Quote,
    // },

    // data: {
    //   time: 1552744582955,
    //   blocks: [
    //     {
    //       type: "image",
    //       data: {
    //         url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
    //       },
    //     },
    //   ],
    //   version: "2.11.10",
    // },
  });
  const saveData = async () => {
    const data = await Editor.save();
    console.log(data);
  };
  useEffect(() => {
    return () => {
      Editor.isReady.then(() => {
        Editor.destroy();
      });
    };
  }, []);
  return (
    <div className="Editor">
      <h1>editor js입니다.</h1>
      <div>
        <button onClick={saveData} className="Editor-btn">
          저장
        </button>
        <div id="editorjs" ref={editorRef} />
      </div>
    </div>
  );
}
