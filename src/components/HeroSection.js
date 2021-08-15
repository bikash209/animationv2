import React, { useEffect } from "react";
import "./HeroSection.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../locomotive-scroll.css";
import useLocoScroll from "../hooks/useLocoScroll";

export default function HeroSection() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const locoScroll = useLocoScroll();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".orange",
        scroller: ".smooth-scroll",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
        marker: true,
      },
    });

    tl.from(".orange p", {
      opacity: 0,
      y: 200,
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }, []);
  return (
    <div className="smooth-scroll">
      <div className="description panel">
        <p>
          There are no mandatory locks. All investors can unlock at any time but
          are subject to varying tax or bonuses relative to their chosen vesting
          period.
        </p>
      </div>

      {/* Section 01 */}
      <section className="panel red">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </section>
      {/* Section 02 */}
      <section className="panel orange">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </section>
      {/* Section 03 */}
      <section className="panel black">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </section>
    </div>
  );
}
