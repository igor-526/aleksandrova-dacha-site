import { ReactElement } from "react";
import CardHorse from "./CardHorse";

// const getData = async (): Promise<Horses> => {
//   const data = await horses.getHorses();
//   return data;
// };

const HorseList = async (): Promise<ReactElement> => {
  // const data = await getData();

  return (
    <div>
      {/* <ul className="flex flex-wrap justify-between">
        {data.map((item) => {
          return (
            <li key={item.id} className="mb-5">
              <CardHorse
                id={item.id}
                name={item.name}
                breed={item.breed.name}
                sex={item.sex}
                sire={item.pedigree?.sire.name || ""}
                dame={item.pedigree?.dame.name || ""}
                description={item.description}
                pathImage={item.photos[0].image}
              />
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};
export default HorseList;
