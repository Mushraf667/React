function Hello() {
  return <p style={{ textAlign: "left" }}>Hello</p>;
}

function Galaxy(props) {
  return (
    <div style={{ textAlign: "left" }}>
      <h4>Name: {props.name}</h4>
      <h4>Process: {props.process}</h4>
    </div>
  );
}

function Star() {
  return (
    <Galaxy
      name="Sun"
      process="Nuclear Fission and Fusion"
    />
  );
}

function Summary(props) {
  return (
    <p style={{ textAlign: "justify" }}>
      Results-driven and highly motivated professional seeking a{" "}
      {props.job} position in a leading {props.company}. Possess strong
      knowledge and hands-on experience in {props.skill1}, {props.skill2},
      and {props.skill3}. Adept at problem-solving, teamwork, and delivering
      high-quality technical solutions.
    </p>
  );
}

function Animator() {
  return (
    <Summary
      job="Animator"
      company="Garena"
      skill1="Unreal Engine"
      skill2="Blender"
      skill3="Graphic Design"
    />
  );
}

function Animal() {
  return (
    <>
      <h1>Animals</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <p style={{ textAlign: "justify" }}>
          In 1924, Hidesaburō Ueno, an agricultural science professor at Tokyo
          Imperial University, adopted a golden-brown Akita puppy and named
          him Hachi. The two formed an incredibly tight bond.
        </p>

        <img
          style={{ width: 120 }}
          src="https://i.pinimg.com/736x/7c/5d/93/7c5d9348e5bf8a0fec9a7162155d66dd.jpg"
          alt="Dog"
        />
      </div>

      <Hello />
      <Star />
      <Animator />
    </>
  );
}

export default Animal;