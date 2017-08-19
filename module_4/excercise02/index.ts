interface Airplane {
	wheel: number;
	fuel: string;
    color: string;

    setColor(name:string): void;
    setFuel(name:string): void;
    setWheel(name:number): void;

}

class Concorde implements Airplane {
    wheel: number;
	fuel: string;
    color: string;

    setColor(color:string): void {
        this.color  = color; 
    };
    setFuel(fuel:string): void {
        this.fuel  = fuel; 
    };
    setWheel(wheel:number): void {
        this.wheel  = wheel; 
    };
}
