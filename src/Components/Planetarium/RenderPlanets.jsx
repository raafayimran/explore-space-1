import { useEffect, useState } from "react";
import { Planet } from "./Planet";
import planetData from "./planetData";
import { Saturn } from "./Saturn";

// global variable for finding the median of planetData
const median = Math.floor(planetData.length / 2 - 1);

function RenderPlanets(props) {
  const [updatedData, setUpdatedData] = useState(planetData);

  // Getting current planet
  props.currentPlanet(updatedData[median]);

  // Switching to next planet
  // useEffect is here to prevent infinite loops
  // need a temp array to stop .map() from breaking during .push()/.pop()
  useEffect(() => {
    if (props.nextPlanet) {
      let tempData = updatedData;
      const datum = tempData.shift();
      tempData.push(datum);
      setUpdatedData(tempData);
      tempData = [];
    }
  });

  // Switching to previous planet
  useEffect(() => {
    if (props.prevPlanet) {
      let tempData = updatedData;
      const datum = tempData.pop();
      tempData.unshift(datum);
      setUpdatedData(tempData);
      tempData = [];
    }
  });

  function handlePlanetMapping(data) {
    const spacing = 3.8;
    const index = updatedData.indexOf(data);
    let positionX;

    // Choosing whether to put a planet after or before the median planet
    if (index == median) {
      positionX = 0;
    } else if (index < median) {
      positionX = (index - median) * spacing;
    } else if (index > median) {
      positionX = (index - median) * spacing;
    }
    return positionX;
  }

  function getScale(data) {
    let size = 0.0013;
    // Changing the scale for all other planets
    if (data.id == 0) {
      size = size * 1000;
    }
    // Doubling the size for median planet
    if (updatedData.indexOf(data) == median) {
      size = size * 2;
    }
    return size;
  }

  // mapping out all of the planets
  const planets = updatedData.map((data) => {
    const positionX = handlePlanetMapping(data);
    let med;
    {
      updatedData.indexOf(data) === median ? (med = true) : (med = false);
    }
    return (
      <>
        {data.id === 6 ? (
          <Saturn
            key={data.id}
            median={med}
            position={[positionX, props.positionY, -6]}
          />
        ) : (
          <Planet
            key={data.id}
            planetLink={data.planetLink}
            position={[positionX, props.positionY, -6]}
            scale={getScale(data)}
          />
        )}
      </>
    );
  });

  return <>{planets}</>;
}

export default RenderPlanets;
