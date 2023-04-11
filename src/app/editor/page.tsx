"use client";
import React, { useState } from "react";
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
  const Editor = new EditorJS({
    holder: "editorjs",
    // autofocus: true,
    tools: {
      header: Header,
      image: editorImage,
      link: Link,
      raw: Raw,

      list: List,
      checklist: CheckList,
      quote: Quote,
      embed: Embed,
    },
    onReady: () => {
      console.log("Editor.js가 작동할 준비가 되었습니다!");
    },

    onChange: (api, event) => {
      // console.log("이제 Editor의 내용이 변경되었음을 알 수 있습니다!", event);
    },
  });
  const [data, setData] = useState(null);
  const saveData = async () => {
    const res = await Editor.save();
    setData(res.blocks);
    console.log(res);
  };

  return (
    <div className="Editor">
      <h1>editor js입니다.</h1>
      <div>
        <button onClick={saveData} className="Editor-btn">
          저장
        </button>
        <div id="editorjs" />
        <div>{data}</div>
      </div>
    </div>
  );
}
