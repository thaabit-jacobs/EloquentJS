class Group{
    constructor(){
        this.set = [];
    }

    add(valueToBeAdded){
        let indexOfValueToBeAdded = this.set.indexOf(valueToBeAdded);

        if(indexOfValueToBeAdded === -1){
            this.set.push(valueToBeAdded);
            return true;
        }

        return false;
    }

    has(value){
        let indexOfValue = this.set.indexOf(value);

        if(indexOfValue !== -1) return true;

        return false;
    }

    delete(valueToBeDeleted){
        let indexOfValueToBeDeleted = this.set.indexOf(valueToBeDeleted);
        
        if(indexOfValueToBeDeleted === -1){
            return false;
        }

        if(indexOfValueToBeDeleted === this.set.length-1){
            this.set.pop();
            return true;
        }

        this.set = this.set.slice(0, indexOfValueToBeDeleted).concat(this.set.slice(indexOfValueToBeDeleted + 1));
        return true;

    }

    length(){
        return this.set.length;
    }

     from(iterableObject){
        if(iterableObject === null || typeof iterableObject[Symbol.iterator] !== 'function'){
            return false;
        }

        let newSet = new Group();
        for(let element of iterableObject){
            newSet.add(element);
        }
        return newSet;
    }

}

class GroupIterator{
    constructor(group){
        this.group = group;
        this.index = 0;
    }

    next(){
        if(this.group.length-1 === this.index){
            return {done: true};
        }

        let value = {
            value: this.group[this.index],
            done: false
        }
        
        this.index++;

        return value;
    }
}


let set = new Group();
set.add(2);
set.add(4);
set.add(6);
set.add(2);
Group.prototype.toString = function() {
    return `${this.set}`;
};
    

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this.set);
};

for(let element of set){
    console.log(element);
}