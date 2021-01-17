class FamilyTree {
  constructor (str) {
    if(typeof str != 'string')
      throw "Error not a string";
    else
      this.value = str;
    
    this.children = [];
  }
  insert(str){
    const newFam = new FamilyTree(str);
    //console.log(newFam);
    this.children.push(newFam);
  }
  familySize(){
    if(this.children.length != null)
      return 1 + this.children.length;
    else
      return 1;
  }
  findMember(str) {
    let member;
    //console.log(this.children);
    /*this.children.forEach((fam) =>{
      if(fam.value === str){
        member = fam;
      }
        //console.log(fam);
        //return this.children(fam);
        console.log(member);
        return member;
    }); */
    member = this.children.filter(fam => fam.value === str);
    //console.log(member);
    return member[0];
  }

  log(){
    let arr = [];
    let str2 = '';
    //console.log(this.children);
    arr = this.children.reduce((acc, famMember) => {
      acc.push(`---- ${famMember.value}`);
      for(let i = 0; i < famMember.children.length; i++)
      {
        acc.push(`------ ${famMember.children[i].value}`);
      }
      
      //acc.push(famMember.value);
      return acc;
        
    }, ['-- '+this.value]);

    str2 = arr.join('\n');
    //console.log(str2);
    return str2;
  }

}
module.exports = FamilyTree;
