"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapTest() {
  const testRef = useRef<HTMLDivElement | null>(null); // Declare the ref type
  const circle = useRef<HTMLDivElement | null>(null); // Declare the ref type

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Use scoped selectors
      gsap.to(".box", { rotation: 360 });
      // or refs
      gsap.to(circle.current, { rotation: 360 });
    }, testRef); // Pass the DOM element, not the ref itself

    return () => ctx.revert();
  }, []);

  return (
    <div ref={testRef} className="flex gap-5">
      <div className="box bg-gray-200 text-8xl text-gray-700 p-4 rounded-lg shadow-md">
        selector
      </div>
      <div
        className="circle w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center"
        ref={circle}
      >
        Ref
      </div>
    </div>
  );
}
