// [['grapes', 10000]]

class HashTable {
    constructor(size){
      this.data = new Array(size);
    }

    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key) {
        let address = this._hash(key);
        for(let i=0; i<this.data[address].length; i++) {
            if(this.data[address][i][0] === key) {
                console.log(i);
                return this.data[address][i];              
            }
        }
        return undefined;
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.set('apples', 9)
  myHashTable.set('orange', 23)
  myHashTable.set('mango', 8)
  myHashTable.set('banana', 14)
  console.log(myHashTable.data);
  console.log(myHashTable.get('grapes'));
  console.log(myHashTable.get('tomato'));

  