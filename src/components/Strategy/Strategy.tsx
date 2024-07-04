import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { StrategyCard } from "./StrategyCard";
import { IStrategyCard } from "../../types/strategyCard";
import styles from "./Strategy.module.css"

export function Strategy (){

    const [strategyCards, setStrategyCards] = useState([]);

    useEffect (()=>{
        fetch("http://localhost:3000/strategys")
            .then((res) => res.json())
            .then((data) => setStrategyCards(data));
    }, []);

    return (
        <section className={styles.strategy}>
            <div className={`container ${styles.strategyContainer}`}>
                <div className="left">
                    <h2>Here are 3 working steps to organize our projects.</h2>
                    <p>
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                    vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id
                    dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget
                    urna mollis.
                    </p>
                    <p>
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
                    ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
                    consectetur.
                    </p>
                    <Button content="Learn more" href="/strategy"/>
                </div>
                <div className="right">
                    <div className={styles.strategyCardsContainer}>
                        {strategyCards.map((card: IStrategyCard) => ( 
                            <StrategyCard key={card.id} {...card}/>
                        ))}
                    </div>
                </div>
                </div>
        </section>
    );
}