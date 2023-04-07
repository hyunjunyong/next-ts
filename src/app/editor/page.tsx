"use client";
import React, { useRef, useEffect } from "react";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import CheckList from "@editorjs/checklist";
import editorImage from "@editorjs/image";
import Quote from "@editorjs/quote";
import EditorJS from "@editorjs/editorjs";
import "./styles.css";

export default function Editor() {
  const editorRef = useRef(null);
  useEffect(() => {
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
    return () => {
      Editor.isReady.then(() => {
        Editor.destroy();
      });
    };
  }, []);
  return (
    <div>
      <div id="editorjs" ref={editorRef} />
    </div>
  );
}
