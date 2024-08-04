import { useState } from "react";
import "../styles/components/Alert.css";
export default function Alert({ isActive }) {
  return (
    <div className={`alert ${isActive ? "visible" : "hidden"}`}>
      <header className="alertHeader">
        <h3>We're improving our service</h3>
      </header>
      <div className="alertBody">
        <p>
          This functionality has not being implemented yet however we're working
          hard to making it available as soon as possible.
        </p>
      </div>
    </div>
  );
}
