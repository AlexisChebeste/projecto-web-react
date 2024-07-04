import { useEffect, useState } from "react";
import checkLogo from '../../assets/images/Icons/check.svg'
import userIcon from '../../assets/images/Icons/user.svg'
import trophyIcon from '../../assets/images/Icons/trophy.svg'

import { ITeammate } from "../../types/teammate";
import { Teammate } from "./Teammate";
import styles from "./Team.module.css"

export function Team() {
    
    const [teammates, setTeammates] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/teams")
        .then((res) => res.json())
        .then((data) => setTeammates(data));
    }, []);

    return (
        <section className={styles.team}>
        <div className={`container ${styles.teamContainer}`}>
            <div className="info">
            <h2>We are proud of our design team</h2>
            <p>
                Just sit back and relax while we take care of your business needs
                for you.
            </p>
            </div>
            <div className={styles.teamStatistics}>
            <div className={styles.teamStatisticsItem}>
                <div className="image">
                <img src={checkLogo} alt="" />
                </div>
                <h3>1000+</h3>
                <p>Completed Projects</p>
            </div>
            <div className={styles.teamStatisticsItem}>
                <div className="image">
                <img src={userIcon} alt="" />
                </div>
                <h3>50K+</h3>
                <p>Happy Customers</p>
            </div>
            <div className={styles.teamStatisticsItem}>
                <div className="image">
                <img src={trophyIcon} alt="" />
                </div>
                <h3>20+</h3>
                <p>Awards Won</p>
            </div>
            </div>
            <div className={styles.teamList}>
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