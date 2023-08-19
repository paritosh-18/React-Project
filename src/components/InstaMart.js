import { useState } from "react";

const Section = ({ section, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 border-black m-2 p-2">
      <h1>{section.heading}</h1>
      {isVisible ? (
        <>
          <button
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>
          <p>{section.data}</p>
        </>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const InstaMart = () => {
  const data = {
    sec1: false,
    sec2: false,
    sec3: false,
  };
  const [sections, setSections] = useState({
    sec1: false,
    sec2: false,
    sec3: false,
  });
  return (
    <div>
      <Section
        key="sec1"
        section={{
          heading: "This is section heading 1",
          data: "this is section body 1",
        }}
        isVisible={sections.sec1}
        setIsVisible={(x) => {
          setSections({
            ...data,
            sec1: x,
          });
        }}
      />
      <Section
        key="sec2"
        section={{
          heading: "This is section heading 2",
          data: "this is section body 2",
        }}
        isVisible={sections.sec2}
        setIsVisible={(x) => {
          setSections({
            ...data,
            sec2: x,
          });
        }}
      />
      <Section
        key="sec3"
        section={{
          heading: "This is section heading 3",
          data: "this is section body 3",
        }}
        isVisible={sections.sec3}
        setIsVisible={(x) => {
          setSections({
            ...data,
            sec3: x,
          });
        }}
      />
    </div>
  );
};

export default InstaMart;
