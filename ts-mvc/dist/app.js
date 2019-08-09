"use strict";
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 16:00:57
 * @LastEditTime: 2019-08-09 20:06:30
 * @LastEditors: Please set LastEditors
 */
/**
 * @description:
 * @param {type}
 * @return:
 */
var model = /** @class */ (function () {
    function model() {
        this.todo = [
            { id: 0, text: "jojo" },
            { id: 1, text: "dio" },
            { id: 2, text: "sjon" },
            { id: 3, text: "kz" },
        ];
    }
    model.prototype.addlist = function (text) {
        var data = {
            id: this.todo.length,
            text: text,
        };
        this.todo.push(data);
        this.datachange();
        console.log(this.todo);
    };
    model.prototype.delist = function (id) {
        this.todo = this.todo.filter(function (todo) {
            if (todo.id !== id)
                return todo;
        });
        this.datachange();
    };
    model.prototype.handle = function (fn) {
        this.fn = fn;
    };
    model.prototype.datachange = function () {
        this.fn(this.todo);
    };
    return model;
}());
var view = /** @class */ (function () {
    function view() {
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
    view.prototype.handeradd = function (fn) {
        this.controlleraddlist = fn;
    };
    view.prototype.handerdelete = function (fn) {
        this.controllerdelete = fn;
    };
    view.prototype.addlist = function () {
        console.log(this);
        this.controlleraddlist(this.input.value);
    };
    view.prototype.delete = function (id) {
        console.log(this);
        this.controllerdelete(id);
    };
    view.prototype.displaylist = function (todo) {
        var _this = this;
        this.ul.innerHTML = "";
        todo.forEach(function (e) {
            var li = document.createElement("li");
            var btn = document.createElement("button");
            var id = e.id;
            btn.innerText = "delete";
            btn.addEventListener("click", _this.delete.bind(_this, id));
            var p = document.createElement("p");
            p.innerText = e.text;
            li.append(p);
            li.append(btn);
            _this.ul.append(li);
        });
    };
    view.prototype.createElement = function (tag, className) {
        var element = document.createElement(tag);
        if (className) {
            element.classList.add(className);
        }
        return element;
    };
    return view;
}());
var constroller = /** @class */ (function () {
    function constroller(model, view) {
        this.model = model;
        this.view = view;
        this.handdisplaylist(this.model.todo);
        this.view.handeradd(this.handaddlist.bind(this));
        this.view.handerdelete(this.handdeletelist.bind(this));
        this.model.handle(this.ontodochange.bind(this));
    }
    ;
    constroller.prototype.ontodochange = function (todo) {
        this.view.input.value = "";
        this.view.input.placeholder = "Add Todo";
        this.view.displaylist(todo);
    };
    constroller.prototype.handdisplaylist = function (todo) {
        this.view.displaylist(todo);
    };
    constroller.prototype.handaddlist = function (text) {
        this.model.addlist(text);
    };
    constroller.prototype.handdeletelist = function (id) {
        this.model.delist(id);
    };
    return constroller;
}());
var app = new constroller(new model(), new view());
