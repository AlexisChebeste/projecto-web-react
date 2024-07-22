import { ITeammate } from "../../types/teammate";

export function Teammate({image, name, area, description}: ITeammate) {
    return (
        <div className="bg-white shadow-md p-5">
            <img className="w-full" src={image} />
            <h3 className="text-[20px]">{name}</h3>
            <p className="text-[#AAB0BC] uppercase">{area}</p>
            <p>{description}</p>
        </div>
    );
}
