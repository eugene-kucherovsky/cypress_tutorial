"use client";

import { Button } from "@mui/material";
import styles from "./postButton.module.css";

export default function PostButton() {
  function handleClick() {
    fetch("http://localhost:3000/examples", { method: "POST" })
      .then((res) => {
        res.json().then((data) => {
          console.log({ data });
        });
      })
      .catch(() => {
        console.log("An error occured");
      });
  }

  return (
    <Button
      className={styles.postButton}
      onClick={handleClick}
      data-testid="btn-post"
    >
      Post Data
    </Button>
  );
}
