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
    autofocus: true,
    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link"],
      },
      list: {
        class: List,
        inlineToolbar: true,
      },

      embed: Embed,
      link: Link,
      raw: Raw,
      SimpleImage: SimpleImage,
      checklist: CheckList,
      image: editorImage,
      quote: Quote,
    },
    // data: {},
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
    <div>
      <button onClick={saveData}>저장</button>
      <div id="editorjs" ref={editorRef} />
    </div>
  );
}
