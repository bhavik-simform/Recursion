import React from "react";

// src/data/fileStructure.js
const fileStructure = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            { name: "App.js", type: "file" },
            { name: "Header.js", type: "file" },
          ],
        },
        { name: "index.js", type: "file" },
      ],
    },
    {
      name: "public",
      type: "folder",
      children: [
        { name: "index.html", type: "file" },
        { name: "favicon.ico", type: "file" },
      ],
    },
  ],
};

const FileFolderTree = ({ item = fileStructure }) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <div>
        {item.type === "folder" ? "📁" : "📄"} {item.name}
      </div>
      {item.children &&
        item.children.map((child, index) => (
          <FileFolderTree key={index} item={child} />
        ))}
    </div>
  );
};

export default FileFolderTree;
