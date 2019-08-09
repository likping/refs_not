/*
 * @Description: ungainly MVC
 * @Author: your name
 * @Date: 2019-08-09 12:14:11
 * @LastEditTime: 2019-08-09 15:02:43
 * @LastEditors: Please set LastEditors
 */
class model{
    constructor() {
        this.data = [
            { id: 1, text:"jojo" },
            { id: 2, text:"jojo" }
        ]
        this.de = this.de.bind(this);
    };
    adddata(text) {
        const data = {
            id: this.data.length>0? this.data[this.data.length - 1].id+1:1,
            text: text,
            
        }
        this.data.push(data);
        console.log(this.data)
    }
    de(id) {
        this.data = this.data.filter(todo => todo.id !== id)
        console.log(this.data)
    }
}
class view{

    constructor() {
        this.rootelemet = document.getElementById("root");  
       
       
        this.input = document.getElementById("input")
        
         this.input.placeholder ="Add todolist";
    };
    handle(fn) {
        this.fn = fn; 
    }
    onbtn() {
        return this.input.value;
    };
    patch(id) {
       
        this.fn.de(id)
        this.rootelemet.innerHTML = " ";
        this.displaytodo(this.fn.data);
        
    }
    listodo(e) {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const dp = document.createElement("button");
        dp.innerText = "delete";
        var deletetodo = function () {
            let de = e;
            this.patch.call(this,de.id);
        }
        dp.addEventListener("click", deletetodo.bind(this));
        const pox = new Proxy(e, {
            get(target, property) {
                return target[property] + " sir"
            }
        })
        let value;
        let ti;
        p.innerText = pox.text;
        p.setAttribute('contenteditable', true);
        p.addEventListener("input", function (e) {
            value = e.target.innerText;
            if (ti) {
                clearTimeout(ti);
            }
            ti = setTimeout(function () {
                console.log(value)
                e.text = value;
            }, 200)
        })
        li.append(p);
        li.append(dp);
        this.rootelemet.append(li);
    }
    displaytodo(todo) {
        var list = this.listodo.bind(this);
        todo.forEach((e) => {
            list(e);
        })
    
    };
    updata(e) {
        var list = this.listodo.bind(this);
        list(e);
        this.input.value = "";
        this.input.placeholder="Add todolist";
    }
}
class controller{
   
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.displaytodo(this.model.data)
        // 添加
        var ss= function () {
            this.model.adddata(this.view.onbtn())
            this.view.updata(this.model.data[this.model.data.length - 1]);
        }
        this.btn = document.getElementById("submit");
        this.btn.addEventListener("click", ss.bind(this))
        //删除
        this.view.handle(this.model)
       
    }
}
const app = new controller(new model(), new view());