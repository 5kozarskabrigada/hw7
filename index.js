// Задача - 1: Создание интерфейсных элементов с помощью
// JavaScript
// В этом упражнении вы создадите набор функций для генерации различных
// интерфейсных элементов с использованием JavaScript.Каждая функция будет
// создавать определенный тип элемента с заданными параметрами и возвращать его в
// виде DOM - элемента.
// Генерация карточки товара:
// Напишите функцию createProductCard, которая принимает следующие параметры:
// ● productName: строка, название товара.
// ● price: строка, цена товара.
// ● imageUrl: строка, URL изображения товара.
// Функция должна создать карточку товара, содержащую изображение товара, название
// и цену, и возвратить эту карточку в виде DOM - элемента.
// Создание сообщения комментария:
// Напишите функцию createCommentMessage, которая принимает следующие
// параметры:
// ● author: строка, имя автора комментария.
// ● message: строка, текст комментария.
// ● timestamp: строка, временная метка комментария.
// Функция должна создать сообщение комментария, содержащее имя автора, текст
// комментария и временную метку, и возвратить это сообщение в виде DOM - элемента.
// Генерация элемента меню:
// Напишите функцию createMenuItem, которая принимает следующие параметры:
// ● name: строка, название блюда в меню.
// ● price: строка, цена блюда.
// ● description: строка, описание блюда.
// Функция должна создать элемент меню, содержащий название блюда, цену и
// описание, и возвратить этот элемент в виде DOM - элемента.
// Ваша задача заключается в том, чтобы реализовать эти три функции таким образом,
//     чтобы они создавали корректную HTML - разметку с заданными параметрами, и
// использовать их для создания интерфейсных элементов на веб - странице.



function createProductCard(productName, price, imageUrl) 
{
    const card = document.createElement("div");
    card.classList.add("product-card");
    const img = document.createElement("img");
    img.src = imageUrl;
    const name = document.createElement("h1");
    name.textContent = productName;
    const prodPrice = document.createElement("p");
    prodPrice.textContent = `Price: ${price}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(prodPrice);
    return card;
}


function createCommentMessage(author, message, timestamp) 
{
    const comment = document.createElement("div");
    comment.classList.add("comment-message");
    const authorName = document.createElement("h2");
    authorName.textContent = author;
    const commentText = document.createElement("p");
    commentText.textContent = message;
    const time = document.createElement("span");
    time.textContent = timestamp;

    comment.appendChild(authorName);
    comment.appendChild(commentText);
    comment.appendChild(time);
    return comment;
}

