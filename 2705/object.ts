interface Master{
    // id:number,
    // name:string
}
interface PersonI extends Master{
    getId:()=>number
    getName:()=>string
    setName:(name:string)=>void
}

class PersonEntity implements PersonI{
    private id :number
    private name :string
    constructor(id:number,name:string){
        this.id = id
        this.name = name
    }
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    setName(name:string):void{
        this.name = name
    }
    toMyString(){
        return `PersonEntity(id ${this.getId()}),name ${this.getName()})`
    }
}
const personEntity:PersonEntity = new PersonEntity(1,"name")
console.log(personEntity.toMyString())