(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{nhC3:function(t,o,r){"use strict";r.d(o,"a",(function(){return e}));var n=r("kiDG"),u=r("CcnG"),p=r("t/Na"),e=function(){function t(t){this.http=t,this.url=n.a.apiUrl}return t.prototype.add=function(t){return this.http.post(this.url+"productos/",t)},t.prototype.update=function(t,o){return this.http.put(this.url+"productos/"+o+"/",t)},t.prototype.delete=function(t){return this.http.delete(this.url+"productos/"+t+"/")},t.prototype.get=function(t){return this.http.get(this.url+"productos/"+t+"/")},t.prototype.getAll=function(){return this.http.get(this.url+"productos/")},t.\u0275prov=u.Yb({factory:function(){return new t(u.Zb(p.c))},token:t,providedIn:"root"}),t}()}}]);