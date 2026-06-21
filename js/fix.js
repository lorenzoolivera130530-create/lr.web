const nav = `<nav id="tab">
            <h1 id="textc">Learn web<span class="icon"><img src="/sources/icons/book.png" width="50px" height="50px"></span></h1>
            <ul>
                <li><button>Inicio <img src="/sources/icons/home.png"></button></li>
                <li><button>Cursos <img src="/sources/icons/file.png"></button></li>
                <li><button onclick="location.href='#'">Sobre Nosotros<img src="/sources/icons/question.png"></button></li>
            </ul>
        </nav>`
const footer = `<footer>
        <p>© 2026 LearnApp - Todos los derechos reservados</p>
    </footer>`
const head = 
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#nav-placeholder").innerHTML = nav
    document.querySelector("#foot-placeholder").innerHTML = footer
});
    