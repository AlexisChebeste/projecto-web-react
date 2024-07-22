import { useEffect, useState } from "react";
import checkLogo from '../../assets/images/Icons/check.svg'
import userIcon from '../../assets/images/Icons/user.svg'
import trophyIcon from '../../assets/images/Icons/trophy.svg'

import { ITeammate } from "../../types/teammate";
import { Teammate } from "./Teammate";

export function Team() {
    
    const [teammates, setTeammates] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/teams")
        .then((res) => res.json())
        .then((data) => setTeammates(data));
    }, []);

    return (
        <section className="bg-gray pt-12 px-0 pb-24">
        <div className="container grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr_auto]">
            <div className="info">
            <h2>We are proud of our design team</h2>
            <p>
                Just sit back and relax while we take care of your business needs
                for you.
            </p>
            </div>
            <div className="flex flex-wrap gap-24">
            <div className="flex flex-col items-center text-center gap-2.5 md:gap-3 flex-1">
                <div className="bg-skyblue rounded-full p-4 w-fit">
                <img className="h-[26px]" src={checkLogo} alt="" />
                </div>
                <h3 className="text-4xl">1000+</h3>
                <p>Completed Projects</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2.5 md:gap-3 flex-1">
                <div className="bg-skyblue rounded-full p-4 w-fit">
                <img className="h-[26px]" src={userIcon} alt="" />
                </div>
                <h3 className="text-4xl">50K+</h3>
                <p>Happy Customers</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2.5 md:gap-3 flex-1">
                <div className="bg-skyblue rounded-full p-4 w-fit">
                <img className="h-[26px]"  src={trophyIcon} alt="" />
                </div>
                <h3 className="text-4xl">20+</h3>
                <p>Awards Won</p>
            </div>
            </div>
            <div className="grid gap-5 grid-cols-1 col-span-full md:grid-cols-2 lg:grid-cols-4">
                {teammates.map((item: ITeammate) => 
                <Teammate 
                    key={item.id}
                    {...item}
                /> )}
            </div>
        </div>
        </section>
    );
}
