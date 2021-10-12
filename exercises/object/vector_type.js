class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(vector){
        let newX = vector.x + this.x;
        let newY = vector.y + this.y;
        return new Vector(newX, newY);
    }

    minus(vector){
        let newX = this.x - vector.x;
        let newY = this.y - vector.y;
        return new Vector(newX, newY);
    }

    
}