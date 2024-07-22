import { IStrategyCard } from "../../types/strategyCard";

export function StrategyCard({id, title, description}: IStrategyCard) {
    return (
    <div className="items-center bg-white shadow-md flex gap-5 max-w-[520px] p-5 relative xl:[&:nth-child(2)]:left-[50px] xl:[&:nth-child(3)]:left-[20px]">
        <div className="bg-skyblue rounded-full text-primary-color text-xl font-semibold py-2.5 px-3 w-fit">{`0${id}`}</div>
        <div className="info">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        </div>
    );
}
