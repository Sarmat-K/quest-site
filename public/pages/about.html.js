export const html = `
<!--
<div class="title-big">Куда ты попал?</div>
<div class="text"><span class="text-big>"Здесь</span> ты сможешь найти <span class="text-big">квест</span> по душе, созданный нашими профессионалами</div>
<div class="title">"Shut up and take my money"</div>
<div class="text">Всё <span class="text-big">бесплатно</span> <span style="font-style: italic">пока что</span></div>
-->
<ul class="underbar-contacts">
    <!--div><li style="padding: 0px 0 0px 10px">
        <span>Контакты</span>
    </li></div-->
    <li>
        <div class="text">E-mail:</div>
        <div style="text-shadow: 0 0 8px #ba9b87">Tyapkin2002@mail.ru</div>
    </li>
    <li>
        <div class="text">VK: <span style="font-size: 8px">(лучше сюда)</span> </div>
        <div><a href="https://vk.com/0pointer" style="color: inherit; text-shadow: 0 0 8px #baa190">vk.com/0pointer</a></div>
    </li>
    <li>
        <div class="text">Telegram:</div>
        <div><a href="https://t.me/tyapkin_s" style="color: inherit; text-shadow: 0 0 8px #c3a38e">t.me/tyapkin_s</a></div>
    </li>
</ul>
`;

export function source(element, router) {
    document.title = "О нас";
    element.innerHTML = html;
}