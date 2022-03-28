import{W as x,s as a,j as h,C as g,r as u,B as b,R as y,G as v,F as w,S as N,a as k,b as M,c as E,d as C,e as f,f as S,g as W,H as z,h as j,i as I,k as $,l as D}from"./vendor.6a47d345.js";const L=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(o){if(o.ep)return;o.ep=!0;const t=l(o);fetch(o.href,t)}};L();var R=x`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        background: ${i=>i.theme.elements.background};
        color: ${i=>i.theme.elements.text};
        font-family: 'Ubuntu';
    }
    h1, div, p, a, span {
        color: ${i=>i.theme.elements.text};
    }
    .infoWrapper h1 {
        font-weight: 400;
        font-size: 2.3rem;
    }
    .infoWrapper hr {
        border: 1px solid ${i=>i.theme.elements.text};
        background-color: ${i=>i.theme.elements.text};
        margin-top: 16px;
    }
    .mobile-menu-enter {
        transform: translateX(-110%);
    }
    .mobile-menu-enter-active {
        transform: translateX(0%);
        transition: 0.3s;
    }
    .mobile-menu-exit {
        transform: translateX(0%);
    }   
    .mobile-menu-exit-active {
        transform: translateX(-110%);
        transition: transform 0.3s;
    }
`,p={title:"light",colors:{primary:"#6246ea",secondary:"#e45858"},elements:{background:"#d1d1e9",background_mobile_menu:"#ebebf9",text:"#2b2c34",inputBackground:"#fffffe"}},T={title:"dark",colors:{primary:"#6246ea",secondary:"#e45858"},elements:{background:"#2b2c34",background_mobile_menu:"#3b3c47",text:"#fffffe",inputBackground:"#d1d1e9"}};const F=a.div`
    @media (max-width: 769px) {
        .menuLinks li a {
            display: none;
        }
    }

    @media (min-width: 769px) {
        .mobileMenu {
            display:none;
        }
    }

    position: fixed;
    width: 100%;

    .menu {
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        font-family: 'Roboto';
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 1px;
        background-color: ${i=>i.theme.colors.primary};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .menu ul {
        display: flex;
        justify-content: center;
        list-style: none;
    }

    .menu a {
        text-decoration: none;
        color: ${i=>i.theme.elements.text};
        padding: 0px 10px;
    }

    .name {
        font-family: 'Ubuntu';
        padding: 0 40px;
    }

    .themeModeButton {
        padding: 0 30px;
    }
`,O=a.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    color: ${i=>i.theme.elements.text};
    &: focus {
        border: none;
    }
    transition: all .3s ease-in-out;
`,e=h.exports.jsx,n=h.exports.jsxs,B=a.div`
    background-color: ${i=>i.theme.elements.background_mobile_menu};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 65%;
    height: 100%;
    position:fixed;
    z-index: 1;

    a {
        font-family: 'Roboto';
        font-weight: 700;
        text-decoration: none;
        color: ${i=>i.theme.elements.text}
    }

    .mobileMenuWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .mobileMenuWrapper ul {
        list-style: none;
    }

    .mobileMenuWrapper li {
        font-size: 2rem;
        margin: 20px 10px;
    }
`,H=i=>e(g,{in:i.openMobileMenu,timeout:300,classNames:"mobile-menu",unmountOnExit:!0,children:e(B,{children:n("ul",{className:"mobileMenuWrapper",children:[e("li",{children:e("a",{href:"#inicio",onClick:()=>i.closeMobileMenu(),children:"In\xEDcio"})}),e("li",{children:e("a",{href:"#sobre",onClick:()=>i.closeMobileMenu(),children:"Sobre"})}),e("li",{children:e("a",{href:"#habilidades",onClick:()=>i.closeMobileMenu(),children:"Habilidades"})}),e("li",{children:e("a",{href:"#contato",onClick:()=>i.closeMobileMenu(),children:"Contato"})})]})})}),_=i=>{const[r,l]=u.exports.useState(!1),c=r?e(v,{size:25}):e(w,{size:25}),o=i.theme.title==="light"?e(b,{size:25}):e(y,{size:25}),t="eduardo";function s(){l(!r)}return n(F,{children:[n("nav",{className:"menu",children:[e("a",{className:"mobileMenu",onClick:()=>l(!r),children:c}),e("span",{className:"name",children:t}),n("ul",{className:"menuLinks",children:[e("li",{children:e("a",{href:"#inicio",children:"In\xEDcio"})}),e("li",{children:e("a",{href:"#sobre",children:"Sobre"})}),e("li",{children:e("a",{href:"#habilidades",children:"Habilidades"})}),e("li",{children:e("a",{href:"#contato",children:"Contato"})})]}),e(O,{className:"themeModeButton",onClick:i.toggleTheme,children:o})]}),e(H,{openMobileMenu:r,closeMobileMenu:s})]})},d=a.section`
    overflow: hidden;
`,A=a.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    @media (min-width: 501px) {
        img {
            width: 500px;
            height: 550px;
        }
    }

    @media (max-width: 500px) {
        img {
            width: 320px;
            height: 320px;
        }
    }

    @media (max-width: 1024px) {
        .imageTwo img {
            display: none;
        }
    }

    height: 100vh;
    text-align: center;
    overflow: hidden;

    h1 {
        font-size: 2.8rem;
        padding-top: 120px;
        padding-left: 10px;
    }

    h2 {
        font-family: 'Roboto';
        font-size: 1rem;
        padding: 0 10px;
    }

    .images {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: nowrap;
    }
`,P=i=>e(d,{id:"inicio",children:n(A,{className:"header",children:[e("h1",{children:"Eduardo Soares Dutra"}),e("h2",{children:"Estudante de Ci\xEAncia da Computa\xE7\xE3o e Desenvolvedor Web"}),n("div",{className:"images",children:[e("div",{className:"imageOne",children:e("img",{src:"Code typing-pana.svg",alt:"Developer 1"})}),e("div",{className:"imageTwo",children:e("img",{src:"Mobile development-pana.svg",alt:"Developer 2"})})]})]})}),m=a.div`
    @media (min-width: 767px) {
        width: 900px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    max-width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #2b2c34;

    border-radius: 25px;
    
    padding: 0 20px;

    h1 {
        font-size: 2.5rem;
        padding-top: 50px;
    }
`,G=a.div`
    a, a:hover, a:focus, a:active {
        color: ${i=>i.theme.colors.primary};
    }

    .info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        font-size: 1.3rem;
        padding-top: 30px;
    }

    .info img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }

    .info p {
        text-align: justify;
        padding: 30px 15px;
        font-weight: 200;
        font-family: 'Roboto';
    }

    .aboutMedia {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-itens: center;
    }

    .social {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-itens: center;
        margin: 0 30px;
    }

    .social a {
        margin: 6px 0;
    }

    .icon {
        color: ${i=>i.theme.colors.primary}
    }
`,U=i=>e(d,{id:"sobre",children:e(m,{children:e(G,{children:n("div",{className:"infoWrapper",children:[e("h1",{children:"Um pouco sobre mim :)"}),e("hr",{}),n("div",{className:"info",children:[n("div",{className:"aboutMedia",children:[n("div",{className:"social",children:[e("a",{href:"https://github.com/eduardosoaresdutra",target:"_blank",children:e(N,{size:30,className:"icon"})}),e("a",{href:"https://linkedin.com/in/eduardo-soares-dutra-b00273217",target:"_blank",children:e(k,{size:30,className:"icon"})})]}),e("img",{src:"/eduardoSoaresDutra.jpg",alt:"Eduardo Soares Dutra"})]}),e("p",{children:"Oi, meu nome \xE9 Eduardo, sou estudante de Ci\xEAncia da Computa\xE7\xE3o, apaixonado por tecnologia, programa\xE7\xE3o e desenvolvimento de software. Possuo conhecimento e dom\xEDnio de l\xF3gica de programa\xE7\xE3o, conceitos e paradigmas de programa\xE7\xE3o e desenvolvimento de software, como programa\xE7\xE3o orientada a objetos e funcional. Atualmente estou me aventurando no desenvolvimento web utilizando tecnologias como React, ao mesmo tempo que procuro por oportunidades para aprimorar meus conhecimentos e mostrar minhas habilidades como desenvolvedor."})]})]})})})}),X=a.div`
  .skillIconDiv{
      padding: 30px 0px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
  }

  .iconWrapper {
    height: 150px;
    display: flex;
    justify-content: space-around;
  }

  .icon {
    height: 80%;
    width: 100%;
    color: ${i=>i.theme.colors.primary};
  }

  .skillLabel {
    font-size: 1.3rem;
  }
`,q=i=>e(d,{id:"habilidades",children:e(m,{children:e(X,{children:n("div",{className:"infoWrapper",children:[e("h1",{children:"Minhas Habilidades"}),e("hr",{}),n("div",{className:"skillIconDiv",children:[n("div",{className:"iconWrapper",children:[n("div",{children:[e(M,{className:"icon"}),e("span",{className:"skillLabel",children:"Html"})]}),n("div",{children:[e(E,{className:"icon"}),e("span",{className:"skillLabel",children:"Css"})]})]}),n("div",{className:"iconWrapper",children:[n("div",{children:[e(C,{className:"icon"}),e("span",{className:"skillLabel",children:"Javascript"})]}),n("div",{children:[e(f,{className:"icon"}),e("span",{className:"skillLabel",children:"React"})]})]}),n("div",{className:"iconWrapper",children:[n("div",{children:[e(S,{className:"icon"}),e("span",{className:"skillLabel",children:"Python"})]}),n("div",{children:[e(W,{className:"icon"}),e("span",{className:"skillLabel",children:"C#"})]})]})]})]})})})}),J=a.div`
    width: 100%;

    .contactInfo {
        margin: 30px 0;
    }

    .contactInfo ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        list-style: none;
        margin: 60px 0;
    }
    
    .contactInfo li {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-size: 1.1rem;
        font-family: roboto;
        font-weight: 700;
        margin: 20px 0;
    }
    
    .contactInfo p {
        font-family: roboto;
        font-size: 1.2rem;
    }

    .contactIcon {
        margin: 0 8px;
    }
`,K=i=>e(d,{id:"contato",children:e(m,{children:e(J,{children:n("div",{className:"infoWrapper",children:[e("h1",{children:"Contato"}),e("hr",{}),n("div",{className:"contactInfo",children:[e("p",{children:"Se precisar falar comigo, aqui est\xE3o meus contatos!"}),n("ul",{children:[n("li",{children:[e(z,{size:30,className:"contactIcon"}),e("span",{children:"eduardosoaresdutra@gmail.com"})]}),n("li",{children:[e(j,{size:25,className:"contactIcon"}),e("span",{children:"(28) 9 9917-0314"})]})]})]})]})})})}),Q=a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${i=>i.theme.colors.secondary};

    p, a {
        color: #2b2c34;
    }

    a {
        font-size: 0.9rem;
    }

    div, a {
        margin: 4px 4px;
    }

    #reactIcon {
        color: #61dbfb;
        margin: 0px 8px;
    }

    .madeWith {
        display: flex;
        align-items: center;
    }
`,V=i=>e("footer",{children:n(Q,{children:[n("div",{className:"madeWith",children:[e("p",{children:"Feito com "}),e(f,{id:"reactIcon",size:30})]}),n("div",{children:[e("a",{href:"https://storyset.com/work",children:"Work illustrations by Storyset"}),e("a",{href:"https://www.flaticon.com/br/icones-gratis/ui",title:"ui \xEDcones",children:"Ui \xEDcones criados por Circlon Tech - Flaticon"})]})]})}),Y=a.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
`;function Z(){const[i,r]=u.exports.useState(p);return e("div",{className:"App",children:n(I,{theme:i,children:[e(R,{}),e(_,{theme:i,toggleTheme:()=>{r(i.title==="light"?T:p)}}),e(P,{}),n(Y,{children:[e(U,{}),e(q,{}),e(K,{})]}),e(V,{})]})})}$.render(e(D.StrictMode,{children:e(Z,{})}),document.getElementById("root"));
