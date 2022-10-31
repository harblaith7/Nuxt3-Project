import popularCars from "@/starter/popularCar.json"

export const usePopularCars = () => {

    const findCarByName = (name) => {
        if(!name) return null
        return popularCars.find(car => {
            console.log(car.name, name, car.name === name)
            return car.name === name
        })
    }

    return {popularCars, findCarByName}
}