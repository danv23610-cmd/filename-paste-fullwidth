"use strict";

const { Plugin } = require("obsidian");

const TITLE_SELECTOR = [
  ".inline-title",
  ".view-header-title",
  ".nav-file-title-content",
  ".mod-file-rename .rename-textarea",
].join(", ");

const FULLWIDTH = {
  ":": "：",
  "*": "＊",
  "?": "？",
  '"': "＂",
  "<": "＜",
  ">": "＞",
  "|": "｜",
  "/": "／",
  "\\": "＼",
};

function onTitlePaste(event) {
  if (!event.cancelable || event.defaultPrevented) return;

  const title = event.target?.closest?.(TITLE_SELECTOR);
  if (!title || !(title.isContentEditable || title.matches("input, textarea"))) return;

  const doc = title.ownerDocument;
  if (!title.contains(doc.activeElement)) return;

  const original = event.clipboardData?.getData("text/plain");
  if (!original) return;

  const converted = original.replace(/[:*?"<>|/\\]/g, (character) => FULLWIDTH[character]);
  if (converted === original) return;

  // Keep Chromium's selection, undo history, and normal input notifications.
  const singleLine = converted.replace(/[\r\n]+/g, " ");
  if (doc.execCommand("insertText", false, singleLine)) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}

module.exports = class FilenamePasteFullwidth extends Plugin {
  documents = new Map();

  onload() {
    const workspace = this.app.workspace;
    this.listenForPaste(document);
    workspace.iterateAllLeaves((leaf) => this.listenForPaste(leaf.containerEl.ownerDocument));
    this.registerEvent(workspace.on("window-open", (_workspaceWindow, popup) => {
      this.listenForPaste(popup.document);
    }));
    this.registerEvent(workspace.on("window-close", (_workspaceWindow, popup) => {
      this.stopListening(popup);
    }));
  }

  onunload() {
    for (const win of this.documents.keys()) this.stopListening(win);
  }

  listenForPaste(doc) {
    const win = doc.defaultView;
    if (!win || this.documents.has(win)) return;

    doc.addEventListener("paste", onTitlePaste, true);
    this.documents.set(win, doc);
  }

  stopListening(win) {
    this.documents.get(win)?.removeEventListener("paste", onTitlePaste, true);
    this.documents.delete(win);
  }
};
