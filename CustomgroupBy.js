Array.prototype.groupBy=function(fn){
  return this.reduce((groups,item)=>{
    const key=fn(item);
    groups[key]=groups[key]||[];
    groups[key].push(item);
    return groups;
  },{})
}

const numbers=[1,2,3,4,5];
const groups=numbers.groupBy(n=>n%2===0?"even":"odd");
console.log(groups);