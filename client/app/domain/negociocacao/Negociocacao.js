class Negociacao{


    constructor(_data, _quantidade,_valor){
        Object.assign(this,{_quantidade,_valor});
        this._data= new Date(_data.getTime());
        Object.freeze(this);

    }
    
    getVolume() {
        return this.quantidade * this.valor ;

    }
    getData(){
        return this.data;

    }

    getQuantidade(){
        return this.quantidade;

    }

    getValor(){
        return this.valor;
    }

}