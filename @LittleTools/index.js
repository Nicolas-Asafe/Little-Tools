// 2025 04/04 19:52 <NICK services>
function SelectRandom(list=[]){
    //Seleciona um item da lista 
    const indexSelect = Math.round(Math.random() * list.length);
    return list[indexSelect]
}
function AddAllItems(list=[]){
    //Soma todos os itens da lista
    let EndValue = 0 || ''
    list.forEach(i=>{EndValue+=i})
    return EndValue
}
function CreateSequence(a=0,b=0){
    //Cria uma sequencia de numeros de A(1) á B(10)
    let Values = [];
    for(let i = a;i<b;i++){Values.push(i)}
    return Values
}
function ReverseText(Text=''){
    // Dá um reverso no texto
    const listText = Text.split(' ');
    const newlisttext = listText.reverse();
    let textend = ''
    newlisttext.forEach(t=>{
        textend+=t+' '
    })
    return textend
}
const LittleToolsInAcronyms = {
    RT:ReverseText(),
    CS:CreateSequence(),
    AAI:AddAllItems(),
    SR:SelectRandom(),
}
const LittleTools={
    ReverseText:ReverseText(),
    CreateSequence:CreateSequence(),
    AddAllItems:AddAllItems(),
    SelectRandom:SelectRandom(),
}
export {LittleTools,LittleToolsInAcronyms}