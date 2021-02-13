const Modal = {
        open(){
        //Abrir modal 
        // Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
        close(){
        //Fechar o modal
        //remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
        
    }
 
 
 const transactions = [
    {
    id: 1,
    description: 'Luz'
    amount: -50000, 
    date:'23/01/2021',  
    },
    {
        d: 2,
        description:'website'
        amount: 50000, 
        date:'23/01/2021',
    }, 
    {   
        d: 3,
        description:'Internet'
        amount: -20000, 
        date:'23/01/2021',
    },
]

const Transaction = {
        incomes(){
            //somar entradas
        },
        expenses(){
            //somar as saidas
        },
        total(){
            // entradas - saidas
        }
       
}

