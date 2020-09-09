class ArrangeBox extends HTMLElement {

    constructor() {
        super();
        this.all_list = ['январь', 'февраль', 'март', 'апрель', 
        'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        this.values = []        
        this.shadow = this.attachShadow({mode: 'open'});
    }

    render(){
        
        
        this.shadow.innerHTML = "Вы можете выбрать несколько записей, с зажатым ctrl <br/>"

        this.shadow.innerHTML += '<input type="text" size="40" id="newEl">'
        
        const btnAddEl = this.createButton('Добавить элемент', ()=>{            
            this.all_list.unshift(this.shadow.getElementById('newEl').value)
            this.render()
        })
        this.shadow.appendChild(btnAddEl)
        this.shadow.appendChild(document.createElement("br"))
        
        this.shadow.appendChild(this.createSelect(this.all_list, 'rt'));
        this.shadow.appendChild(document.createElement("br"))
        this.shadow.appendChild(this.createSelect(this.values, 'lf'));
        
        this.shadow.appendChild(document.createElement("br"))
                

        const btnToRightAll = this.createButton('Выбрать все', ()=>{
            this.values = this.all_list
            this.render()
        })
        this.shadow.appendChild(btnToRightAll) 

        const btnClearRight = this.createButton('Очистить', ()=>{
            this.values = []
            this.render()
        })
        this.shadow.appendChild(btnClearRight)

        const btnToRight = this.createButton('Только выбранные', ()=>{
            const selector = this.shadow.getElementById('rt');
            const slctd = []            
            for (let i = 0; i < selector.options.length; i++) {

                const element = selector.options[i];                
                
                if ( element.selected ) {
                    this.values.push(element.innerHTML)
                }
            }

            this.render()
        })
        this.shadow.appendChild(btnToRight)


        const btnToRight = this.createButton('Только выбранные', ()=>{
            const selector = this.shadow.getElementById('rt');
            const slctd = []            
            for (let i = 0; i < selector.options.length; i++) {

                const element = selector.options[i];                
                
                if ( element.selected ) {
                    this.values.push(element.innerHTML)
                }
            }

            this.render()
        })
        this.shadow.appendChild(btnToRight)        

    }

    createButton(text, click) {
        const btn = document.createElement("button");        
        btn.innerHTML = text
        btn.onclick = click
        return btn
    }

    createSelect(values, ids) {
        // создает элемент
        const select = document.createElement("select")
        select.setAttribute("size", 6);
        select.setAttribute("multiple", "multiple");
        select.setAttribute("id", ids);
        select.style.cssText = "width:260px;"
        for (const val of values) {
            let option = document.createElement("option")
            option.setAttribute("value", val);
            option.innerText = val
            select.appendChild(option)            
        }
        return select
    }

    connectedCallback(){
        this.render()
    }

}

export {ArrangeBox}