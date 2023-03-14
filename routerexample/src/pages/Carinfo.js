import React from "react";

const carInfo = [
    {name:"Grandeur", price:5600, desc:"Economic cost Funct"},
    {name:"BMW", price:7800, desc: "ional excellence Grac"},
    {name:"Genesis", price:8000, desc: "eful Design"}
]

const CarItem = ({car}) => (
    <div>
        <span>
            {car.name}
        </span>
        <span>
            {car.price}
        </span>
        <span>
            {car.desc}
        </span>

    </div>
)

const Car = () => {
    return (
        <div>
            <h2>Car Information</h2>
            {carInfo.map(car => (
                <CarItem student={car}/>
            ))}
        </div>
    );
}

export default Car;