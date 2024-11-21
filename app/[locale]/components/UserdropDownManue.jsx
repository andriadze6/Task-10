"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function DropDownList() {
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <div className="login-Account">
        <a className="sign-button" href="/api/auth/login">
          Login
        </a>
      </div>
    </div>
  );
}
