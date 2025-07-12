const arr=[
    ['id',1],
    ['name','test'],
        ['age',20]
]
// {
//     id:1,name:'test',age:20
// }
 const result = arr.reduce((acc,val)=>{
    const [key,value]=val;
   acc[key]=value;
   return acc;
},{})
console.log(result)