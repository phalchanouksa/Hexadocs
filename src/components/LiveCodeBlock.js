import React, { useState, useEffect } from "react";
import styles from "./LiveCodeBlock.module.css";

const LiveCodeBlock = ({
  initialHTML = "",
  initialCSS = "",
  initialJS = "",
}) => {
  const [html, setHTML] = useState(initialHTML);
  const [css, setCSS] = useState(initialCSS);
  const [js, setJS] = useState(initialJS);

  // Add visibility states
  const [visiblePanels, setVisiblePanels] = useState({
    html: true,
    css: true,
    js: true,
  });

  const togglePanel = (panel) => {
    setVisiblePanels((prev) => ({
      ...prev,
      [panel]: !prev[panel],
    }));
  };

  // Handle tab indentation
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const target = e.target;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      target.value =
        target.value.substring(0, start) + "  " + target.value.substring(end);
      target.selectionStart = target.selectionEnd = start + 2;
    }
  };

  useEffect(() => {
    const updatePreview = () => {
      const previewDoc = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                margin: 0;
                padding: 1rem;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.5;
                max-width: 100%;
                overflow-x: hidden;
                color: #1a1a1a;
              }
              * { box-sizing: border-box; }
              ${css}
            </style>
          </head>
          <body>
            ${html}
            <script>${js}<\/script>
          </body>
        </html>
      `;

      const iframe = document.createElement("iframe");
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";

      const preview = document.getElementById("preview-container");
      if (preview) {
        preview.innerHTML = "";
        preview.appendChild(iframe);
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(previewDoc);
        iframe.contentWindow.document.close();
      }
    };

    const timer = setTimeout(updatePreview, 200);
    return () => clearTimeout(timer);
  }, [html, css, js]);

  const EditorHeader = ({ label, panel, visible }) => (
    <div className={styles.editorHeader}>
      <button
        className={`${styles.editorTab} ${visible ? styles.active : ""}`}
        onClick={() => togglePanel(panel)}
      >
        <span>{label}</span>
        <span className={styles.toggleIcon}>{visible ? "−" : "+"}</span>
      </button>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.editors}>
          <div
            className={`${styles.editorSection} ${
              !visiblePanels.html ? styles.collapsed : ""
            }`}
          >
            <EditorHeader
              label="HTML"
              panel="html"
              visible={visiblePanels.html}
            />
            {visiblePanels.html && (
              <div className={styles.editorContainer}>
                <textarea
                  className={styles.editor}
                  value={html}
                  onChange={(e) => setHTML(e.target.value)}
                  onKeyDown={handleKeyDown}
                  spellCheck="false"
                  placeholder="HTML"
                />
              </div>
            )}
          </div>

          <div
            className={`${styles.editorSection} ${
              !visiblePanels.css ? styles.collapsed : ""
            }`}
          >
            <EditorHeader label="CSS" panel="css" visible={visiblePanels.css} />
            {visiblePanels.css && (
              <div className={styles.editorContainer}>
                <textarea
                  className={styles.editor}
                  value={css}
                  onChange={(e) => setCSS(e.target.value)}
                  onKeyDown={handleKeyDown}
                  spellCheck="false"
                  placeholder="CSS"
                />
              </div>
            )}
          </div>

          <div
            className={`${styles.editorSection} ${
              !visiblePanels.js ? styles.collapsed : ""
            }`}
          >
            <EditorHeader label="JS" panel="js" visible={visiblePanels.js} />
            {visiblePanels.js && (
              <div className={styles.editorContainer}>
                <textarea
                  className={styles.editor}
                  value={js}
                  onChange={(e) => setJS(e.target.value)}
                  onKeyDown={handleKeyDown}
                  spellCheck="false"
                  placeholder="JavaScript"
                />
              </div>
            )}
          </div>
        </div>
        <div id="preview-container" className={styles.preview} />
      </div>
    </div>
  );
};

export default LiveCodeBlock;
