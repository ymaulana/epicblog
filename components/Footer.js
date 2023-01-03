import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="py-16 text-center text-tosca/40">
      Copyright (c) 2021 - Design By{" "}
      <Link href="https://www.figma.com/file/IxRcEKTJj9GV0MH9IdA2xp/Epictetus-(Copy)">
        <a target="_blank">array-id</a>
      </Link>
    </footer>
  );
}

export default Footer;
