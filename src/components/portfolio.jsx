import React from "react";
import { portfolio } from "../data/portfolio";
import PortfolioItem from "./portfolioitem";

const Portfolio = () => {
    return(
        <div className="flex flex-col md:flex-row item-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map((portfolio)=>{
                    return <PortfolioItem {...portfolio}  /> // you can use this as well(just like in timeline.jsx)
                })}
            </div>
        </div>
    )
}

export default Portfolio;