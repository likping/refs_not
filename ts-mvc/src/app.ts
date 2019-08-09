/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 16:00:57
 * @LastEditTime: 2019-08-09 20:07:16
 * @LastEditors: Please set LastEditors
 */
/**
 * @description: 
 * @param {type} 
 * @return: 
 */
class model{
    todo: any;
    fn: any;
    constructor() {
        this.todo=[
            { id: 0,text: "jojo" },
            { id: 1, text: "dio" },   
            { id: 2, text: "sjon" },
            { id: 3, text: "kz" },   
        ]    
    }
    addlist(text:string) {
        const data = {
            id: this.todo.length,
            text: text,
        }
        this.todo.push(data);
        this.datachange();
        console.log(this.todo);
    }
    delist(id:number) {
        this.todo = this.todo.filter((todo:any) => {
            if (todo.id !== id)
                return todo;
        });
        this.datachange();
    }
    handle(fn: any) {
        this.fn = fn;
    }
    datachange() {
        this.fn(this.todo);
    }
}    
class view{
    rootel:any;
    submit:any;
    input: any;
    controlleraddlist: any;
    controllerdelete: any;
    ul: any;
    constructor() {
        this.rootel = document.getElementById("root");
        this.input = this.createElement("input");
        this.input.placeholder = "Add Todo";
        this.input.setAttribute("type", "text");
        this.rootel.append(this.input);
        this.ul = this.createElement("ul");
        this.submit = this.createElement("button");
        this.submit.innerText = "submit";
        this.submit.addEventListener("click", this.addlist.bind(this));
        this.rootel.append(this.submit);
        this.rootel.append(this.ul);
    }  
    handeradd(fn:any) {
        this.controlleraddlist = fn;
    }
    handerdelete(fn: any) {
        this.controllerdelete = fn;
    }
    addlist() {
        console.log(this)
        this.controlleraddlist(this.input.value);
    }
    delete(id:any) {
        console.log(this)
        this.controllerdelete(id);
    }
    displaylist(todo: any) {
        this.ul.innerHTML = "";
        todo.forEach((e: any) => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            let id = e.id;
            btn.innerText = "delete";
            btn.addEventListener("click", this.delete.bind(this, id));
            const p = document.createElement("p");
            p.innerText = e.text;
            li.append(p);
            li.append(btn);
            this.ul.append(li);
        }) 
    }
    createElement(tag: string,className?: string) {
        var element = document.createElement(tag);
        if (className) {
            element.classList.add(className);
        }
        return element;
    }
}          
class constroller{
    model: any;
    view: any;
    constructor(model:any,view:any) {
        this.model = model;
        this.view = view;
        this.handdisplaylist(this.model.todo)

        this.view.handeradd(this.handaddlist.bind(this))
    
        this.view.handerdelete(this.handdeletelist.bind(this))
        
        this.model.handle(this.ontodochange.bind(this))
    };
    ontodochange(todo: any) {
        this.view.input.value = "";
        this.view.input.placeholder = "Add Todo";
        this.view.displaylist(todo)
    }
    handdisplaylist(todo:any) {
        this.view.displaylist(todo);
    }
    handaddlist(text: string) {
        this.model.addlist(text)
    }
    handdeletelist(id: number) {
        this.model.delist(id);
    }
}  

const app = new constroller(new model(), new view());

  
